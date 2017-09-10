using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("GaitSet", Schema = "dbo")]
  public class GaitSet
  {
    public string Direction
    {
      get;
      set;
    }
    public int? FrameNumber
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
