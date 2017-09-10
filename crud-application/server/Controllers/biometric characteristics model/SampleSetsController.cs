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
  [ODataRoute("odata/BiometricCharacteristicsModel/SampleSets")]
  public partial class SampleSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public SampleSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/SampleSets
    [HttpGet]
    public IEnumerable<SampleSet> Get()
    {
      var items = this.context.SampleSets.AsQueryable<SampleSet>();

      this.OnSampleSetsRead(ref items);

      return items;
    }

    partial void OnSampleSetsRead(ref IQueryable<SampleSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetSampleSet(int key)
    {
        var item = this.context.SampleSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnSampleSetDeleted(SampleSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeleteSampleSet(int key)
    {
        var item = this.context.SampleSets
            .Where(i => i.Id == key)
            .Include(i => i.HandwritingSets)
            .Include(i => i.FingerprintSets)
            .Include(i => i.PalmprintSets)
            .Include(i => i.FaceSets)
            .Include(i => i.IrisSets)
            .Include(i => i.GaitSets)
            .Include(i => i.SpeechSets)
            .Include(i => i.SignatureSets)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnSampleSetDeleted(item);
        this.context.SampleSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnSampleSetUpdated(SampleSet item);

    [HttpPut("{Id}")]
    public IActionResult PutSampleSet(int key, [FromBody]SampleSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnSampleSetUpdated(newItem);
        this.context.SampleSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchSampleSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.SampleSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnSampleSetUpdated(item);
        this.context.SampleSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnSampleSetCreated(SampleSet item);

    [HttpPost]
    public IActionResult Post([FromBody] SampleSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnSampleSetCreated(item);
        this.context.SampleSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/SampleSets/{item.Id}", item);
    }
  }
}
