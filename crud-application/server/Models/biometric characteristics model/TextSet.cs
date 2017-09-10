using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("TextSet", Schema = "dbo")]
  public class TextSet
  {
    public string Content
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


    [InverseProperty("TextSet")]
    public ICollection<HandwritingSet> HandwritingSets { get; set; }
    public int? LanguageId
    {
      get;
      set;
    }

    [ForeignKey("LanguageId")]
    public LanguageSet LanguageSet { get; set; }
  }
}
