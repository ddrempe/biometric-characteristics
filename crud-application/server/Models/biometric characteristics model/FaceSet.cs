using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("FaceSet", Schema = "dbo")]
  public class FaceSet
  {
    [Key]
    public int Id
    {
      get;
      set;
    }
    public string Position
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
