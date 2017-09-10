using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("SampleTypeSet", Schema = "dbo")]
  public class SampleTypeSet
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


    [InverseProperty("SampleTypeSet")]
    public ICollection<SampleSet> SampleSets { get; set; }
    public string Name
    {
      get;
      set;
    }
  }
}
