using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel
{
  [Table("SampleSet", Schema = "dbo")]
  public class SampleSet
  {
    public DateTime? DateCreated
    {
      get;
      set;
    }
    public int? DeviceId
    {
      get;
      set;
    }

    [ForeignKey("DeviceId")]
    public DeviceSet DeviceSet { get; set; }
    public string FileName
    {
      get;
      set;
    }
    public string FilePath
    {
      get;
      set;
    }
    public string FileType
    {
      get;
      set;
    }
    public string FullFilePath
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


    [InverseProperty("SampleSet")]
    public ICollection<HandwritingSet> HandwritingSets { get; set; }

    [InverseProperty("SampleSet")]
    public ICollection<FingerprintSet> FingerprintSets { get; set; }

    [InverseProperty("SampleSet")]
    public ICollection<PalmprintSet> PalmprintSets { get; set; }

    [InverseProperty("SampleSet")]
    public ICollection<FaceSet> FaceSets { get; set; }

    [InverseProperty("SampleSet")]
    public ICollection<IrisSet> IrisSets { get; set; }

    [InverseProperty("SampleSet")]
    public ICollection<GaitSet> GaitSets { get; set; }

    [InverseProperty("SampleSet")]
    public ICollection<SpeechSet> SpeechSets { get; set; }

    [InverseProperty("SampleSet")]
    public ICollection<SignatureSet> SignatureSets { get; set; }
    public int PersonId
    {
      get;
      set;
    }

    [ForeignKey("PersonId")]
    public PersonSet PersonSet { get; set; }
    public int? SampleDatasetId
    {
      get;
      set;
    }

    [ForeignKey("SampleDatasetId")]
    public SampleDatasetSet SampleDatasetSet { get; set; }
    public int SampleTypeId
    {
      get;
      set;
    }

    [ForeignKey("SampleTypeId")]
    public SampleTypeSet SampleTypeSet { get; set; }
  }
}
