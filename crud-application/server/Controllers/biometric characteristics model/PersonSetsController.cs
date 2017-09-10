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
  [ODataRoute("odata/BiometricCharacteristicsModel/PersonSets")]
  public partial class PersonSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public PersonSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/PersonSets
    [HttpGet]
    public IEnumerable<PersonSet> Get()
    {
      var items = this.context.PersonSets.AsQueryable<PersonSet>();

      this.OnPersonSetsRead(ref items);

      return items;
    }

    partial void OnPersonSetsRead(ref IQueryable<PersonSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetPersonSet(int key)
    {
        var item = this.context.PersonSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnPersonSetDeleted(PersonSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeletePersonSet(int key)
    {
        var item = this.context.PersonSets
            .Where(i => i.Id == key)
            .Include(i => i.SampleSets)
            .Include(i => i.KeystrokeSets)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnPersonSetDeleted(item);
        this.context.PersonSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnPersonSetUpdated(PersonSet item);

    [HttpPut("{Id}")]
    public IActionResult PutPersonSet(int key, [FromBody]PersonSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnPersonSetUpdated(newItem);
        this.context.PersonSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchPersonSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.PersonSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnPersonSetUpdated(item);
        this.context.PersonSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnPersonSetCreated(PersonSet item);

    [HttpPost]
    public IActionResult Post([FromBody] PersonSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnPersonSetCreated(item);
        this.context.PersonSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/PersonSets/{item.Id}", item);
    }
  }
}
