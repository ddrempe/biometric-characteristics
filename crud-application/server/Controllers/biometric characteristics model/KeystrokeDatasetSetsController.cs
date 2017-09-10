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
  [ODataRoute("odata/BiometricCharacteristicsModel/KeystrokeDatasetSets")]
  public partial class KeystrokeDatasetSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public KeystrokeDatasetSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/KeystrokeDatasetSets
    [HttpGet]
    public IEnumerable<KeystrokeDatasetSet> Get()
    {
      var items = this.context.KeystrokeDatasetSets.AsQueryable<KeystrokeDatasetSet>();

      this.OnKeystrokeDatasetSetsRead(ref items);

      return items;
    }

    partial void OnKeystrokeDatasetSetsRead(ref IQueryable<KeystrokeDatasetSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetKeystrokeDatasetSet(int key)
    {
        var item = this.context.KeystrokeDatasetSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnKeystrokeDatasetSetDeleted(KeystrokeDatasetSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeleteKeystrokeDatasetSet(int key)
    {
        var item = this.context.KeystrokeDatasetSets
            .Where(i => i.Id == key)
            .Include(i => i.KeystrokeSets)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnKeystrokeDatasetSetDeleted(item);
        this.context.KeystrokeDatasetSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnKeystrokeDatasetSetUpdated(KeystrokeDatasetSet item);

    [HttpPut("{Id}")]
    public IActionResult PutKeystrokeDatasetSet(int key, [FromBody]KeystrokeDatasetSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnKeystrokeDatasetSetUpdated(newItem);
        this.context.KeystrokeDatasetSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchKeystrokeDatasetSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.KeystrokeDatasetSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnKeystrokeDatasetSetUpdated(item);
        this.context.KeystrokeDatasetSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnKeystrokeDatasetSetCreated(KeystrokeDatasetSet item);

    [HttpPost]
    public IActionResult Post([FromBody] KeystrokeDatasetSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnKeystrokeDatasetSetCreated(item);
        this.context.KeystrokeDatasetSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/KeystrokeDatasetSets/{item.Id}", item);
    }
  }
}
