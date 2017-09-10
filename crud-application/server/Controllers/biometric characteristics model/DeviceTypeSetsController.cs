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
  [ODataRoute("odata/BiometricCharacteristicsModel/DeviceTypeSets")]
  public partial class DeviceTypeSetsController : Controller
  {
    private BiometricCharacteristicsModelContext context;

    public DeviceTypeSetsController(BiometricCharacteristicsModelContext context)
    {
      this.context = context;
    }
    // GET /odata/BiometricCharacteristicsModel/DeviceTypeSets
    [HttpGet]
    public IEnumerable<DeviceTypeSet> Get()
    {
      var items = this.context.DeviceTypeSets.AsQueryable<DeviceTypeSet>();

      this.OnDeviceTypeSetsRead(ref items);

      return items;
    }

    partial void OnDeviceTypeSetsRead(ref IQueryable<DeviceTypeSet> items);

    [HttpGet("{Id}")]
    public IActionResult GetDeviceTypeSet(int key)
    {
        var item = this.context.DeviceTypeSets.Where(i=>i.Id == key).SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        return new ObjectResult(item);
    }
    partial void OnDeviceTypeSetDeleted(DeviceTypeSet item);

    [HttpDelete("{Id}")]
    public IActionResult DeleteDeviceTypeSet(int key)
    {
        var item = this.context.DeviceTypeSets
            .Where(i => i.Id == key)
            .Include(i => i.DeviceSets)
            .SingleOrDefault();

        if (item == null)
        {
            return NotFound();
        }

        this.OnDeviceTypeSetDeleted(item);
        this.context.DeviceTypeSets.Remove(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnDeviceTypeSetUpdated(DeviceTypeSet item);

    [HttpPut("{Id}")]
    public IActionResult PutDeviceTypeSet(int key, [FromBody]DeviceTypeSet newItem)
    {
        if (newItem == null || newItem.Id != key)
        {
            return BadRequest();
        }

        this.OnDeviceTypeSetUpdated(newItem);
        this.context.DeviceTypeSets.Update(newItem);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    [HttpPatch("{Id}")]
    public IActionResult PatchDeviceTypeSet(int key, [FromBody]JObject patch)
    {
        var item = this.context.DeviceTypeSets.Where(i=>i.Id == key).FirstOrDefault();

        if (item == null)
        {
            return BadRequest();
        }

        EntityPatch.Apply(item, patch);

        this.OnDeviceTypeSetUpdated(item);
        this.context.DeviceTypeSets.Update(item);
        this.context.SaveChanges();

        return new NoContentResult();
    }

    partial void OnDeviceTypeSetCreated(DeviceTypeSet item);

    [HttpPost]
    public IActionResult Post([FromBody] DeviceTypeSet item)
    {
        if (item == null)
        {
            return BadRequest();
        }

        this.OnDeviceTypeSetCreated(item);
        this.context.DeviceTypeSets.Add(item);
        this.context.SaveChanges();

        return Created($"odata/BiometricCharacteristicsModel/DeviceTypeSets/{item.Id}", item);
    }
  }
}
