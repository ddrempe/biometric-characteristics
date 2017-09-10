using System;
using System.IO;
using System.Text;
using System.Runtime.CompilerServices;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.OData.Extensions;
using Microsoft.AspNetCore.OData;
using Microsoft.AspNetCore.OData.Builder;
using Microsoft.IdentityModel.Tokens;

using BiometricCharacteristicsApp.Data;

namespace BiometricCharacteristicsApp
{
  public class Startup
  {
    private static void DotEnv([CallerFilePath] string path = "")
    {
      var dotEnv = Path.Combine(Path.GetDirectoryName(path), "..", ".env");

      if (File.Exists(dotEnv))
      {
        var dotenv = File.ReadAllText(dotEnv).Trim();
        var lines = dotenv.Split('\n');

        foreach (var line in lines)
        {
          var index = line.IndexOf("=");

          var key = line.Substring(0, index);

          var value = line.Substring(index + 1);

          Environment.SetEnvironmentVariable(key, value.TrimStart('"').TrimEnd('"'));
        }
      }
    }

    public Startup(IHostingEnvironment env)
    {
      Startup.DotEnv();

      var builder = new ConfigurationBuilder()
        .SetBasePath(env.ContentRootPath)
        .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
        .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
        .AddEnvironmentVariables();

      Configuration = builder.Build();
    }

    public IConfigurationRoot Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
      services.AddOptions();
      services.AddCors();

      services.AddMvcCore()
              .AddJsonFormatters();

      services.AddOData();


      services.AddDbContext<BiometricCharacteristicsModelContext>(options =>
      {
        options.UseSqlServer(Configuration.GetConnectionString("BiometricCharacteristicsModelConnection"),
                             sqlOptions => sqlOptions.UseRowNumberForPaging());
      });
    }

    public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
    {
      loggerFactory.AddConsole(Configuration.GetSection("Logging"));
      loggerFactory.AddDebug();

      var provider = app.ApplicationServices.GetRequiredService<IAssemblyProvider>();

      app.UseCors(builder =>
        builder.WithOrigins("*")
               .AllowAnyHeader()
               .AllowAnyMethod()
               .AllowCredentials()
               .AllowAnyOrigin()
      );


      app.Use(async (context, next) => {
          try
          {
              await next();
          }
#pragma warning disable 0168
          catch (Microsoft.AspNetCore.Mvc.Internal.AmbiguousActionException ex) {
#pragma warning restore 0168
              if (!Path.HasExtension(context.Request.Path.Value)) {
                  context.Request.Path = "/index.html";
                  await next();
              }
          }

          if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value)) {
              context.Request.Path = "/index.html";
              await next();
          }
      });

      app.UseDefaultFiles();
      app.UseStaticFiles();

      app.UseDeveloperExceptionPage();

      app.UseMvc(builder =>
      {
        var biometricCharacteristicsModelBuilder = new ODataConventionModelBuilder(provider);
        biometricCharacteristicsModelBuilder.ContainerName = "BiometricCharacteristicsModelContext";

        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.DeviceSet>("DeviceSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.DeviceTypeSet>("DeviceTypeSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.FaceSet>("FaceSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.FingerprintSet>("FingerprintSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.GaitSet>("GaitSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.HandwritingSet>("HandwritingSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.IrisSet>("IrisSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.KeyboardSet>("KeyboardSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.KeystrokeDatasetSet>("KeystrokeDatasetSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.KeystrokeSet>("KeystrokeSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.LanguageSet>("LanguageSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.PalmprintSet>("PalmprintSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.PersonSet>("PersonSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.SampleDatasetSet>("SampleDatasetSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.SampleSet>("SampleSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.SampleTypeSet>("SampleTypeSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.SignatureSet>("SignatureSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.SpeechSet>("SpeechSets");
        biometricCharacteristicsModelBuilder.EntitySet<BiometricCharacteristicsApp.Models.BiometricCharacteristicsModel.TextSet>("TextSets");

        builder.MapODataRoute("odata/BiometricCharacteristicsModel", biometricCharacteristicsModelBuilder.GetEdmModel());
      });

    }
  }
}
