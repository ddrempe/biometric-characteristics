using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("DeviceTypeSet", Schema = "dbo")]
  public class DeviceTypeSet
  {
    public string Description
    {
      get;
      set;
    }
    [Key]
    public int Id
    {
      get;
      set;
    }


    [InverseProperty("DeviceTypeSet")]
    public ICollection<DeviceSet> DeviceSets { get; set; }
    public string Name
    {
      get;
      set;
    }
  }
}
