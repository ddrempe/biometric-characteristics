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
  [ODataRoute("odata/BiometricCharacteristicsModel/SampleDatasetSets")]
  public partial class SampleDatasetSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public SampleDatasetSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/SampleDatasetSets
    [HttpGet]
    public IEnumerable<SampleDatasetSet> Get()
    {
      var items = this.context.SampleDatasetSets.AsQueryable<SampleDatasetSet>();

      this.OnSampleDatasetSetsRead(ref items);

      return items;
    }

    partial void OnSampleDatasetSetsRead(ref IQueryable<SampleDatasetSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetSampleDatasetSet(int key)
    {
        var item = this.context.SampleDatasetSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnSampleDatasetSetDeleted(SampleDatasetSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeleteSampleDatasetSet(int key)
    {
        var item = this.context.SampleDatasetSets
            .Where(i => i.Id == key)
            .Include(i => i.SampleSets)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnSampleDatasetSetDeleted(item);
        this.context.SampleDatasetSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnSampleDatasetSetUpdated(SampleDatasetSet item);

    [HttpPut("{Id}")]
    public IActionResult PutSampleDatasetSet(int key, [FromBody]SampleDatasetSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnSampleDatasetSetUpdated(newItem);
        this.context.SampleDatasetSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchSampleDatasetSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.SampleDatasetSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnSampleDatasetSetUpdated(item);
        this.context.SampleDatasetSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnSampleDatasetSetCreated(SampleDatasetSet item);

    [HttpPost]
    public IActionResult Post([FromBody] SampleDatasetSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnSampleDatasetSetCreated(item);
        this.context.SampleDatasetSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/SampleDatasetSets/{item.Id}", item);
    }
  }
}
