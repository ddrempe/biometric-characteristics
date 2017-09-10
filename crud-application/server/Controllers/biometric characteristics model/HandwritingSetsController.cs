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
  [ODataRoute("odata/BiometricCharacteristicsModel/HandwritingSets")]
  public partial class HandwritingSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public HandwritingSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/HandwritingSets
    [HttpGet]
    public IEnumerable<HandwritingSet> Get()
    {
      var items = this.context.HandwritingSets.AsQueryable<HandwritingSet>();

      this.OnHandwritingSetsRead(ref items);

      return items;
    }

    partial void OnHandwritingSetsRead(ref IQueryable<HandwritingSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetHandwritingSet(int key)
    {
        var item = this.context.HandwritingSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnHandwritingSetDeleted(HandwritingSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeleteHandwritingSet(int key)
    {
        var item = this.context.HandwritingSets
            .Where(i => i.Id == key)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnHandwritingSetDeleted(item);
        this.context.HandwritingSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnHandwritingSetUpdated(HandwritingSet item);

    [HttpPut("{Id}")]
    public IActionResult PutHandwritingSet(int key, [FromBody]HandwritingSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnHandwritingSetUpdated(newItem);
        this.context.HandwritingSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchHandwritingSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.HandwritingSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnHandwritingSetUpdated(item);
        this.context.HandwritingSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnHandwritingSetCreated(HandwritingSet item);

    [HttpPost]
    public IActionResult Post([FromBody] HandwritingSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnHandwritingSetCreated(item);
        this.context.HandwritingSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/HandwritingSets/{item.Id}", item);
    }
  }
}
