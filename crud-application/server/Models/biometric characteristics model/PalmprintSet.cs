using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("PalmprintSet", Schema = "dbo")]
  public class PalmprintSet
  {
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
