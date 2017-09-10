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
  [ODataRoute("odata/BiometricCharacteristicsModel/SampleTypeSets")]
  public partial class SampleTypeSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public SampleTypeSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/SampleTypeSets
    [HttpGet]
    public IEnumerable<SampleTypeSet> Get()
    {
      var items = this.context.SampleTypeSets.AsQueryable<SampleTypeSet>();

      this.OnSampleTypeSetsRead(ref items);

      return items;
    }

    partial void OnSampleTypeSetsRead(ref IQueryable<SampleTypeSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetSampleTypeSet(int key)
    {
        var item = this.context.SampleTypeSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnSampleTypeSetDeleted(SampleTypeSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeleteSampleTypeSet(int key)
    {
        var item = this.context.SampleTypeSets
            .Where(i => i.Id == key)
            .Include(i => i.SampleSets)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnSampleTypeSetDeleted(item);
        this.context.SampleTypeSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnSampleTypeSetUpdated(SampleTypeSet item);

    [HttpPut("{Id}")]
    public IActionResult PutSampleTypeSet(int key, [FromBody]SampleTypeSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnSampleTypeSetUpdated(newItem);
        this.context.SampleTypeSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchSampleTypeSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.SampleTypeSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnSampleTypeSetUpdated(item);
        this.context.SampleTypeSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnSampleTypeSetCreated(SampleTypeSet item);

    [HttpPost]
    public IActionResult Post([FromBody] SampleTypeSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnSampleTypeSetCreated(item);
        this.context.SampleTypeSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/SampleTypeSets/{item.Id}", item);
    }
  }
}
