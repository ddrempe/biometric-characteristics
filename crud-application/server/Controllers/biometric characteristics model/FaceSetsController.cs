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
  [ODataRoute("odata/BiometricCharacteristicsModel/FaceSets")]
  public partial class FaceSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public FaceSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/FaceSets
    [HttpGet]
    public IEnumerable<FaceSet> Get()
    {
      var items = this.context.FaceSets.AsQueryable<FaceSet>();

      this.OnFaceSetsRead(ref items);

      return items;
    }

    partial void OnFaceSetsRead(ref IQueryable<FaceSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetFaceSet(int key)
    {
        var item = this.context.FaceSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnFaceSetDeleted(FaceSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeleteFaceSet(int key)
    {
        var item = this.context.FaceSets
            .Where(i => i.Id == key)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnFaceSetDeleted(item);
        this.context.FaceSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnFaceSetUpdated(FaceSet item);

    [HttpPut("{Id}")]
    public IActionResult PutFaceSet(int key, [FromBody]FaceSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnFaceSetUpdated(newItem);
        this.context.FaceSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchFaceSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.FaceSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnFaceSetUpdated(item);
        this.context.FaceSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnFaceSetCreated(FaceSet item);

    [HttpPost]
    public IActionResult Post([FromBody] FaceSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnFaceSetCreated(item);
        this.context.FaceSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/FaceSets/{item.Id}", item);
    }
  }
}
