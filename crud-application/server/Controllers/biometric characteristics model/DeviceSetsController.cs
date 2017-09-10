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
  [ODataRoute("odata/BiometricCharacteristicsModel/DeviceSets")]
  public partial class DeviceSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public DeviceSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/DeviceSets
    [HttpGet]
    public IEnumerable<DeviceSet> Get()
    {
      var items = this.context.DeviceSets.AsQueryable<DeviceSet>();

      this.OnDeviceSetsRead(ref items);

      return items;
    }

    partial void OnDeviceSetsRead(ref IQueryable<DeviceSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetDeviceSet(int key)
    {
        var item = this.context.DeviceSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnDeviceSetDeleted(DeviceSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeleteDeviceSet(int key)
    {
        var item = this.context.DeviceSets
            .Where(i => i.Id == key)
            .Include(i => i.SampleSets)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnDeviceSetDeleted(item);
        this.context.DeviceSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnDeviceSetUpdated(DeviceSet item);

    [HttpPut("{Id}")]
    public IActionResult PutDeviceSet(int key, [FromBody]DeviceSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnDeviceSetUpdated(newItem);
        this.context.DeviceSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchDeviceSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.DeviceSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnDeviceSetUpdated(item);
        this.context.DeviceSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnDeviceSetCreated(DeviceSet item);

    [HttpPost]
    public IActionResult Post([FromBody] DeviceSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnDeviceSetCreated(item);
        this.context.DeviceSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/DeviceSets/{item.Id}", item);
    }
  }
}
