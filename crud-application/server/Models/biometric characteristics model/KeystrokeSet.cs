using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("KeystrokeSet", Schema = "dbo")]
  public class KeystrokeSet
  {
    [Key]
    public int Id
    {
      get;
      set;
    }
    public int? KeyboardId
    {
      get;
      set;
    }

    [ForeignKey("KeyboardId")]
    public KeyboardSet KeyboardSet { get; set; }
    public int? KeystrokeDatasetId
    {
      get;
      set;
    }

    [ForeignKey("KeystrokeDatasetId")]
    public KeystrokeDatasetSet KeystrokeDatasetSet { get; set; }
    public string Password
    {
      get;
      set;
    }
    public int PersonId
    {
      get;
      set;
    }

    [ForeignKey("PersonId")]
    public PersonSet PersonSet { get; set; }
    public string PpTime
    {
      get;
      set;
    }
    public string PrTime
    {
      get;
      set;
    }
    public string RawPress
    {
      get;
      set;
    }
    public string RawRelease
    {
      get;
      set;
    }
    public string RpTime
    {
      get;
      set;
    }
    public string RrTime
    {
      get;
      set;
    }
    public bool Success
    {
      get;
      set;
    }
    public string TimeToType
    {
      get;
      set;
    }
    public string Vector
    {
      get;
      set;
    }
  }
}
