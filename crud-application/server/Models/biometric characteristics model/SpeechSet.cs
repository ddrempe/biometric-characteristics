using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("SpeechSet", Schema = "dbo")]
  public class SpeechSet
  {
    [Key]
    public int Id
    {
      get;
      set;
    }
    public string Quality
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
