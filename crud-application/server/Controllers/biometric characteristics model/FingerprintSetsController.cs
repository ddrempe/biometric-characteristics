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
  [ODataRoute("odata/BiometricCharacteristicsModel/FingerprintSets")]
  public partial class FingerprintSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public FingerprintSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/FingerprintSets
    [HttpGet]
    public IEnumerable<FingerprintSet> Get()
    {
      var items = this.context.FingerprintSets.AsQueryable<FingerprintSet>();

      this.OnFingerprintSetsRead(ref items);

      return items;
    }

    partial void OnFingerprintSetsRead(ref IQueryable<FingerprintSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetFingerprintSet(int key)
    {
        var item = this.context.FingerprintSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnFingerprintSetDeleted(FingerprintSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeleteFingerprintSet(int key)
    {
        var item = this.context.FingerprintSets
            .Where(i => i.Id == key)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnFingerprintSetDeleted(item);
        this.context.FingerprintSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnFingerprintSetUpdated(FingerprintSet item);

    [HttpPut("{Id}")]
    public IActionResult PutFingerprintSet(int key, [FromBody]FingerprintSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnFingerprintSetUpdated(newItem);
        this.context.FingerprintSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchFingerprintSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.FingerprintSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnFingerprintSetUpdated(item);
        this.context.FingerprintSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnFingerprintSetCreated(FingerprintSet item);

    [HttpPost]
    public IActionResult Post([FromBody] FingerprintSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnFingerprintSetCreated(item);
        this.context.FingerprintSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/FingerprintSets/{item.Id}", item);
    }
  }
}
