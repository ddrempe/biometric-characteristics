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
  [ODataRoute("odata/BiometricCharacteristicsModel/SpeechSets")]
  public partial class SpeechSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public SpeechSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/SpeechSets
    [HttpGet]
    public IEnumerable<SpeechSet> Get()
    {
      var items = this.context.SpeechSets.AsQueryable<SpeechSet>();

      this.OnSpeechSetsRead(ref items);

      return items;
    }

    partial void OnSpeechSetsRead(ref IQueryable<SpeechSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetSpeechSet(int key)
    {
        var item = this.context.SpeechSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnSpeechSetDeleted(SpeechSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeleteSpeechSet(int key)
    {
        var item = this.context.SpeechSets
            .Where(i => i.Id == key)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnSpeechSetDeleted(item);
        this.context.SpeechSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnSpeechSetUpdated(SpeechSet item);

    [HttpPut("{Id}")]
    public IActionResult PutSpeechSet(int key, [FromBody]SpeechSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnSpeechSetUpdated(newItem);
        this.context.SpeechSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchSpeechSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.SpeechSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnSpeechSetUpdated(item);
        this.context.SpeechSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnSpeechSetCreated(SpeechSet item);

    [HttpPost]
    public IActionResult Post([FromBody] SpeechSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnSpeechSetCreated(item);
        this.context.SpeechSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/SpeechSets/{item.Id}", item);
    }
  }
}
