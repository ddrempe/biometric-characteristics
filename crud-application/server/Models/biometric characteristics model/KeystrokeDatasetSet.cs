using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("KeystrokeDatasetSet", Schema = "dbo")]
  public class KeystrokeDatasetSet
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


    [InverseProperty("KeystrokeDatasetSet")]
    public ICollection<KeystrokeSet> KeystrokeSets { get; set; }
    public string Name
    {
      get;
      set;
    }
  }
}
