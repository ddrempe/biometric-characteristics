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
  [ODataRoute("odata/BiometricCharacteristicsModel/GaitSets")]
  public partial class GaitSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public GaitSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/GaitSets
    [HttpGet]
    public IEnumerable<GaitSet> Get()
    {
      var items = this.context.GaitSets.AsQueryable<GaitSet>();

      this.OnGaitSetsRead(ref items);

      return items;
    }

    partial void OnGaitSetsRead(ref IQueryable<GaitSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetGaitSet(int key)
    {
        var item = this.context.GaitSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnGaitSetDeleted(GaitSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeleteGaitSet(int key)
    {
        var item = this.context.GaitSets
            .Where(i => i.Id == key)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnGaitSetDeleted(item);
        this.context.GaitSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnGaitSetUpdated(GaitSet item);

    [HttpPut("{Id}")]
    public IActionResult PutGaitSet(int key, [FromBody]GaitSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnGaitSetUpdated(newItem);
        this.context.GaitSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchGaitSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.GaitSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnGaitSetUpdated(item);
        this.context.GaitSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnGaitSetCreated(GaitSet item);

    [HttpPost]
    public IActionResult Post([FromBody] GaitSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnGaitSetCreated(item);
        this.context.GaitSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/GaitSets/{item.Id}", item);
    }
  }
}
