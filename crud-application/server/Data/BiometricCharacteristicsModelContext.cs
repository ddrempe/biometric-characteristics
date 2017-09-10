using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

using BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel;

namespace BiometricCharacteristicsApp.Data
{
  public partial class BiometricCharacteristicsModelContext : DbContext
  {
    public BiometricCharacteristicsModelContext(DbContextOptions<BiometricCharacteristicsModelContext> options):base(options)
    {
    }

    public BiometricCharacteristicsModelContext()
    {
    }



    public DbSet<DeviceSet> DeviceSets
    {
      get;
      set;
    }

    public DbSet<DeviceTypeSet> DeviceTypeSets
    {
      get;
      set;
    }

    public DbSet<FaceSet> FaceSets
    {
      get;
      set;
    }

    public DbSet<FingerprintSet> FingerprintSets
    {
      get;
      set;
    }

    public DbSet<GaitSet> GaitSets
    {
      get;
      set;
    }

    public DbSet<HandwritingSet> HandwritingSets
    {
      get;
      set;
    }

    public DbSet<IrisSet> IrisSets
    {
      get;
      set;
    }

    public DbSet<KeyboardSet> KeyboardSets
    {
      get;
      set;
    }

    public DbSet<KeystrokeDatasetSet> KeystrokeDatasetSets
    {
      get;
      set;
    }

    public DbSet<KeystrokeSet> KeystrokeSets
    {
      get;
      set;
    }

    public DbSet<LanguageSet> LanguageSets
    {
      get;
      set;
    }

    public DbSet<PalmprintSet> PalmprintSets
    {
      get;
      set;
    }

    public DbSet<PersonSet> PersonSets
    {
      get;
      set;
    }

    public DbSet<SampleDatasetSet> SampleDatasetSets
    {
      get;
      set;
    }

    public DbSet<SampleSet> SampleSets
    {
      get;
      set;
    }

    public DbSet<SampleTypeSet> SampleTypeSets
    {
      get;
      set;
    }

    public DbSet<SignatureSet> SignatureSets
    {
      get;
      set;
    }

    public DbSet<SpeechSet> SpeechSets
    {
      get;
      set;
    }

    public DbSet<TextSet> TextSets
    {
      get;
      set;
    }
  }
}
