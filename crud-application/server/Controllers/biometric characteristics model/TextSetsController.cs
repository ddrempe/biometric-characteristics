using System;
using System.Linq;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData;
using Microsoft.AspNetCore.OData.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using BiometricCharacteristicsApp.Models;
using BiometricCharacteristicsApp.Data;
using BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel;

namespace BiometricCharacteristicsApp.Controllers.BiometricCharacteristicsModel
{
  [EnableQuery]
  [ODataRoute("odata/BiometricCharacteristicsModel/TextSets")]
  public partial class TextSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public TextSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/TextSets
    [HttpGet]
    public IEnumerable<TextSet> Get()
    {
      var items = this.context.TextSets.AsQueryable<TextSet>();

      this.OnTextSetsRead(ref items);

      return items;
    }

    partial void OnTextSetsRead(ref IQueryable<TextSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetTextSet(int key)
    {
        var item = this.context.TextSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnTextSetDeleted(TextSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeleteTextSet(int key)
    {
        var item = this.context.TextSets
            .Where(i => i.Id == key)
            .Include(i => i.HandwritingSets)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnTextSetDeleted(item);
        this.context.TextSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnTextSetUpdated(TextSet item);

    [HttpPut("{Id}")]
    public IActionResult PutTextSet(int key, [FromBody]TextSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnTextSetUpdated(newItem);
        this.context.TextSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchTextSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.TextSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnTextSetUpdated(item);
        this.context.TextSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnTextSetCreated(TextSet item);

    [HttpPost]
    public IActionResult Post([FromBody] TextSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnTextSetCreated(item);
        this.context.TextSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/TextSets/{item.Id}", item);
    }
  }
}
