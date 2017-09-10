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
  [ODataRoute("odata/BiometricCharacteristicsModel/SignatureSets")]
  public partial class SignatureSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public SignatureSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/SignatureSets
    [HttpGet]
    public IEnumerable<SignatureSet> Get()
    {
      var items = this.context.SignatureSets.AsQueryable<SignatureSet>();

      this.OnSignatureSetsRead(ref items);

      return items;
    }

    partial void OnSignatureSetsRead(ref IQueryable<SignatureSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetSignatureSet(int key)
    {
        var item = this.context.SignatureSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnSignatureSetDeleted(SignatureSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeleteSignatureSet(int key)
    {
        var item = this.context.SignatureSets
            .Where(i => i.Id == key)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnSignatureSetDeleted(item);
        this.context.SignatureSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnSignatureSetUpdated(SignatureSet item);

    [HttpPut("{Id}")]
    public IActionResult PutSignatureSet(int key, [FromBody]SignatureSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnSignatureSetUpdated(newItem);
        this.context.SignatureSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchSignatureSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.SignatureSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnSignatureSetUpdated(item);
        this.context.SignatureSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnSignatureSetCreated(SignatureSet item);

    [HttpPost]
    public IActionResult Post([FromBody] SignatureSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnSignatureSetCreated(item);
        this.context.SignatureSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/SignatureSets/{item.Id}", item);
    }
  }
}
