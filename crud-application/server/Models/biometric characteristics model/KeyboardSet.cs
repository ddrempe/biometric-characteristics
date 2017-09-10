using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("KeyboardSet", Schema = "dbo")]
  public class KeyboardSet
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


    [InverseProperty("KeyboardSet")]
    public ICollection<KeystrokeSet> KeystrokeSets { get; set; }
    public string Name
    {
      get;
      set;
    }
    public string Type
    {
      get;
      set;
    }
  }
}
