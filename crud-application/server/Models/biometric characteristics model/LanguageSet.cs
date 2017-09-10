using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("LanguageSet", Schema = "dbo")]
  public class LanguageSet
  {
    public string Code
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


    [InverseProperty("LanguageSet")]
    public ICollection<TextSet> TextSets { get; set; }
    public string Name
    {
      get;
      set;
    }
  }
}
