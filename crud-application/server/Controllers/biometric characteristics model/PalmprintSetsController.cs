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
  [ODataRoute("odata/BiometricCharacteristicsModel/PalmprintSets")]
  public partial class PalmprintSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public PalmprintSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/PalmprintSets
    [HttpGet]
    public IEnumerable<PalmprintSet> Get()
    {
      var items = this.context.PalmprintSets.AsQueryable<PalmprintSet>();

      this.OnPalmprintSetsRead(ref items);

      return items;
    }

    partial void OnPalmprintSetsRead(ref IQueryable<PalmprintSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetPalmprintSet(int key)
    {
        var item = this.context.PalmprintSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnPalmprintSetDeleted(PalmprintSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeletePalmprintSet(int key)
    {
        var item = this.context.PalmprintSets
            .Where(i => i.Id == key)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnPalmprintSetDeleted(item);
        this.context.PalmprintSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnPalmprintSetUpdated(PalmprintSet item);

    [HttpPut("{Id}")]
    public IActionResult PutPalmprintSet(int key, [FromBody]PalmprintSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnPalmprintSetUpdated(newItem);
        this.context.PalmprintSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchPalmprintSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.PalmprintSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnPalmprintSetUpdated(item);
        this.context.PalmprintSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnPalmprintSetCreated(PalmprintSet item);

    [HttpPost]
    public IActionResult Post([FromBody] PalmprintSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnPalmprintSetCreated(item);
        this.context.PalmprintSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/PalmprintSets/{item.Id}", item);
    }
  }
}
