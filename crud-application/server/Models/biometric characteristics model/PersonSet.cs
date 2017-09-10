using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("PersonSet", Schema = "dbo")]
  public class PersonSet
  {
    public string Address
    {
      get;
      set;
    }
    public DateTime? DateOfBirth
    {
      get;
      set;
    }
    public string FirstName
    {
      get;
      set;
    }
    public string Gender
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


    [InverseProperty("PersonSet")]
    public ICollection<SampleSet> SampleSets { get; set; }

    [InverseProperty("PersonSet")]
    public ICollection<KeystrokeSet> KeystrokeSets { get; set; }
    public string LastName
    {
      get;
      set;
    }
  }
}
