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
  [ODataRoute("odata/BiometricCharacteristicsModel/KeyboardSets")]
  public partial class KeyboardSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public KeyboardSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/KeyboardSets
    [HttpGet]
    public IEnumerable<KeyboardSet> Get()
    {
      var items = this.context.KeyboardSets.AsQueryable<KeyboardSet>();

      this.OnKeyboardSetsRead(ref items);

      return items;
    }

    partial void OnKeyboardSetsRead(ref IQueryable<KeyboardSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetKeyboardSet(int key)
    {
        var item = this.context.KeyboardSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnKeyboardSetDeleted(KeyboardSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeleteKeyboardSet(int key)
    {
        var item = this.context.KeyboardSets
            .Where(i => i.Id == key)
            .Include(i => i.KeystrokeSets)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnKeyboardSetDeleted(item);
        this.context.KeyboardSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnKeyboardSetUpdated(KeyboardSet item);

    [HttpPut("{Id}")]
    public IActionResult PutKeyboardSet(int key, [FromBody]KeyboardSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnKeyboardSetUpdated(newItem);
        this.context.KeyboardSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchKeyboardSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.KeyboardSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnKeyboardSetUpdated(item);
        this.context.KeyboardSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnKeyboardSetCreated(KeyboardSet item);

    [HttpPost]
    public IActionResult Post([FromBody] KeyboardSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnKeyboardSetCreated(item);
        this.context.KeyboardSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/KeyboardSets/{item.Id}", item);
    }
  }
}
