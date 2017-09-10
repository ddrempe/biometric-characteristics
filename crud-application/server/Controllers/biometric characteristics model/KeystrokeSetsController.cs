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
  [ODataRoute("odata/BiometricCharacteristicsModel/KeystrokeSets")]
  public partial class KeystrokeSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public KeystrokeSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/KeystrokeSets
    [HttpGet]
    public IEnumerable<KeystrokeSet> Get()
    {
      var items = this.context.KeystrokeSets.AsQueryable<KeystrokeSet>();

      this.OnKeystrokeSetsRead(ref items);

      return items;
    }

    partial void OnKeystrokeSetsRead(ref IQueryable<KeystrokeSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetKeystrokeSet(int key)
    {
        var item = this.context.KeystrokeSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnKeystrokeSetDeleted(KeystrokeSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeleteKeystrokeSet(int key)
    {
        var item = this.context.KeystrokeSets
            .Where(i => i.Id == key)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnKeystrokeSetDeleted(item);
        this.context.KeystrokeSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnKeystrokeSetUpdated(KeystrokeSet item);

    [HttpPut("{Id}")]
    public IActionResult PutKeystrokeSet(int key, [FromBody]KeystrokeSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnKeystrokeSetUpdated(newItem);
        this.context.KeystrokeSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchKeystrokeSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.KeystrokeSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnKeystrokeSetUpdated(item);
        this.context.KeystrokeSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnKeystrokeSetCreated(KeystrokeSet item);

    [HttpPost]
    public IActionResult Post([FromBody] KeystrokeSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnKeystrokeSetCreated(item);
        this.context.KeystrokeSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/KeystrokeSets/{item.Id}", item);
    }
  }
}
