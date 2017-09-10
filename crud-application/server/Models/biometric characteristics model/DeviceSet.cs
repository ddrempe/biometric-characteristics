using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("DeviceSet", Schema = "dbo")]
  public class DeviceSet
  {
    public string Description
    {
      get;
      set;
    }
    public int? DeviceTypeId
    {
      get;
      set;
    }

    [ForeignKey("DeviceTypeId")]
    public DeviceTypeSet DeviceTypeSet { get; set; }
    [Key]
    public int Id
    {
      get;
      set;
    }


    [InverseProperty("DeviceSet")]
    public ICollection<SampleSet> SampleSets { get; set; }
    public string Manufacturer
    {
      get;
      set;
    }
    public string Name
    {
      get;
      set;
    }
  }
}
