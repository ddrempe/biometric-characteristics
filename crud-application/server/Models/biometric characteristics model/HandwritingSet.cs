using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("HandwritingSet", Schema = "dbo")]
  public class HandwritingSet
  {
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
    public int? TextId
    {
      get;
      set;
    }

    [ForeignKey("TextId")]
    public TextSet TextSet { get; set; }
  }
}
