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
  [ODataRoute("odata/BiometricCharacteristicsModel/LanguageSets")]
  public partial class LanguageSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public LanguageSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/LanguageSets
    [HttpGet]
    public IEnumerable<LanguageSet> Get()
    {
      var items = this.context.LanguageSets.AsQueryable<LanguageSet>();

      this.OnLanguageSetsRead(ref items);

      return items;
    }

    partial void OnLanguageSetsRead(ref IQueryable<LanguageSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetLanguageSet(int key)
    {
        var item = this.context.LanguageSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnLanguageSetDeleted(LanguageSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeleteLanguageSet(int key)
    {
        var item = this.context.LanguageSets
            .Where(i => i.Id == key)
            .Include(i => i.TextSets)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnLanguageSetDeleted(item);
        this.context.LanguageSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnLanguageSetUpdated(LanguageSet item);

    [HttpPut("{Id}")]
    public IActionResult PutLanguageSet(int key, [FromBody]LanguageSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnLanguageSetUpdated(newItem);
        this.context.LanguageSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchLanguageSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.LanguageSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnLanguageSetUpdated(item);
        this.context.LanguageSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnLanguageSetCreated(LanguageSet item);

    [HttpPost]
    public IActionResult Post([FromBody] LanguageSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnLanguageSetCreated(item);
        this.context.LanguageSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/LanguageSets/{item.Id}", item);
    }
  }
}
