using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("SampleDatasetSet", Schema = "dbo")]
  public class SampleDatasetSet
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


    [InverseProperty("SampleDatasetSet")]
    public ICollection<SampleSet> SampleSets { get; set; }
    public string Name
    {
      get;
      set;
    }
  }
}
