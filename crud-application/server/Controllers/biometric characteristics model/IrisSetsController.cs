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
  [ODataRoute("odata/BiometricCharacteristicsModel/IrisSets")]
  public partial class IrisSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public IrisSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/IrisSets
    [HttpGet]
    public IEnumerable<IrisSet> Get()
    {
      var items = this.context.IrisSets.AsQueryable<IrisSet>();

      this.OnIrisSetsRead(ref items);

      return items;
    }

    partial void OnIrisSetsRead(ref IQueryable<IrisSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetIrisSet(int key)
    {
        var item = this.context.IrisSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnIrisSetDeleted(IrisSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeleteIrisSet(int key)
    {
        var item = this.context.IrisSets
            .Where(i => i.Id == key)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnIrisSetDeleted(item);
        this.context.IrisSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnIrisSetUpdated(IrisSet item);

    [HttpPut("{Id}")]
    public IActionResult PutIrisSet(int key, [FromBody]IrisSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnIrisSetUpdated(newItem);
        this.context.IrisSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchIrisSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.IrisSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnIrisSetUpdated(item);
        this.context.IrisSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnIrisSetCreated(IrisSet item);

    [HttpPost]
    public IActionResult Post([FromBody] IrisSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnIrisSetCreated(item);
        this.context.IrisSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/IrisSets/{item.Id}", item);
    }
  }
}
