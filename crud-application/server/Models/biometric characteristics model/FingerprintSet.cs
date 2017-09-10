using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("FingerprintSet", Schema = "dbo")]
  public class FingerprintSet
  {
    public string Finger
    {
      get;
      set;
    }
    public string Hand
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
    public int Sample_Id
    {
      get;
      set;
    }

    [ForeignKey("Sample_Id")]
    public SampleSet SampleSet { get; set; }
  }
}
