using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("SignatureSet", Schema = "dbo")]
  public class SignatureSet
  {
    [Key]
    public int Id
    {
      get;
      set;
    }
    public bool? Penups
    {
      get;
      set;
    }
    public int? Pressure
    {
      get;
      set;
    }
    public int Sample_Id
    {
      get;
      set;
    }

    [ForeignKey("Sample_Id")]
    public SampleSet SampleSet { get; set; }
    public int? SyntheticTimestamp
    {
      get;
      set;
    }
    public int? XCoordinate
    {
      get;
      set;
    }
    public int? YCoordinate
    {
      get;
      set;
    }
  }
}
