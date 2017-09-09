
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 09/09/2017 23:10:52
-- Generated from EDMX file: C:\Users\ddrempetic\Documents\SourceTree\biometric-characteristics\biometric-characteristics\Models\Model1.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [biometric-characteristics];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_PersonSample]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[SampleSet] DROP CONSTRAINT [FK_PersonSample];
GO
IF OBJECT_ID(N'[dbo].[FK_SampleTypeSample]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[SampleSet] DROP CONSTRAINT [FK_SampleTypeSample];
GO
IF OBJECT_ID(N'[dbo].[FK_DeviceSample]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[SampleSet] DROP CONSTRAINT [FK_DeviceSample];
GO
IF OBJECT_ID(N'[dbo].[FK_DeviceTypeDevice]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[DeviceSet] DROP CONSTRAINT [FK_DeviceTypeDevice];
GO
IF OBJECT_ID(N'[dbo].[FK_SampleFingerprint]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[FingerprintSet] DROP CONSTRAINT [FK_SampleFingerprint];
GO
IF OBJECT_ID(N'[dbo].[FK_SamplePalmprint]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PalmprintSet] DROP CONSTRAINT [FK_SamplePalmprint];
GO
IF OBJECT_ID(N'[dbo].[FK_SampleFace]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[FaceSet] DROP CONSTRAINT [FK_SampleFace];
GO
IF OBJECT_ID(N'[dbo].[FK_SampleIris]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[IrisSet] DROP CONSTRAINT [FK_SampleIris];
GO
IF OBJECT_ID(N'[dbo].[FK_SampleGait]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[GaitSet] DROP CONSTRAINT [FK_SampleGait];
GO
IF OBJECT_ID(N'[dbo].[FK_SampleSpeech]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[SpeechSet] DROP CONSTRAINT [FK_SampleSpeech];
GO
IF OBJECT_ID(N'[dbo].[FK_SampleHandwriting]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HandwritingSet] DROP CONSTRAINT [FK_SampleHandwriting];
GO
IF OBJECT_ID(N'[dbo].[FK_TextHandwriting]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HandwritingSet] DROP CONSTRAINT [FK_TextHandwriting];
GO
IF OBJECT_ID(N'[dbo].[FK_SignatureSample]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[SignatureSet] DROP CONSTRAINT [FK_SignatureSample];
GO
IF OBJECT_ID(N'[dbo].[FK_LanguageText]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TextSet] DROP CONSTRAINT [FK_LanguageText];
GO
IF OBJECT_ID(N'[dbo].[FK_PersonKeystroke]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[KeystrokeSet] DROP CONSTRAINT [FK_PersonKeystroke];
GO
IF OBJECT_ID(N'[dbo].[FK_SampleDatasetSample]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[SampleSet] DROP CONSTRAINT [FK_SampleDatasetSample];
GO
IF OBJECT_ID(N'[dbo].[FK_KeystrokeDatasetKeystroke]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[KeystrokeSet] DROP CONSTRAINT [FK_KeystrokeDatasetKeystroke];
GO
IF OBJECT_ID(N'[dbo].[FK_KeyboardKeystroke]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[KeystrokeSet] DROP CONSTRAINT [FK_KeyboardKeystroke];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[PersonSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PersonSet];
GO
IF OBJECT_ID(N'[dbo].[DeviceSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[DeviceSet];
GO
IF OBJECT_ID(N'[dbo].[SampleSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[SampleSet];
GO
IF OBJECT_ID(N'[dbo].[KeystrokeSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[KeystrokeSet];
GO
IF OBJECT_ID(N'[dbo].[KeyboardSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[KeyboardSet];
GO
IF OBJECT_ID(N'[dbo].[SignatureSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[SignatureSet];
GO
IF OBJECT_ID(N'[dbo].[FingerprintSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[FingerprintSet];
GO
IF OBJECT_ID(N'[dbo].[PalmprintSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PalmprintSet];
GO
IF OBJECT_ID(N'[dbo].[FaceSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[FaceSet];
GO
IF OBJECT_ID(N'[dbo].[SpeechSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[SpeechSet];
GO
IF OBJECT_ID(N'[dbo].[IrisSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[IrisSet];
GO
IF OBJECT_ID(N'[dbo].[HandwritingSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[HandwritingSet];
GO
IF OBJECT_ID(N'[dbo].[TextSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TextSet];
GO
IF OBJECT_ID(N'[dbo].[LanguageSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[LanguageSet];
GO
IF OBJECT_ID(N'[dbo].[GaitSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[GaitSet];
GO
IF OBJECT_ID(N'[dbo].[DeviceTypeSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[DeviceTypeSet];
GO
IF OBJECT_ID(N'[dbo].[SampleTypeSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[SampleTypeSet];
GO
IF OBJECT_ID(N'[dbo].[SampleDatasetSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[SampleDatasetSet];
GO
IF OBJECT_ID(N'[dbo].[KeystrokeDatasetSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[KeystrokeDatasetSet];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'PersonSet'
CREATE TABLE [dbo].[PersonSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [FirstName] nvarchar(50)  NULL,
    [LastName] nvarchar(50)  NULL,
    [Address] nvarchar(200)  NULL,
    [DateOfBirth] datetime  NULL,
    [Gender] nvarchar(20)  NULL
);
GO

-- Creating table 'DeviceSet'
CREATE TABLE [dbo].[DeviceSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(50)  NOT NULL,
    [Manufacturer] nvarchar(50)  NULL,
    [Description] nvarchar(200)  NULL,
    [DeviceTypeId] int  NULL
);
GO

-- Creating table 'SampleSet'
CREATE TABLE [dbo].[SampleSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [FilePath] nvarchar(max)  NOT NULL,
    [FileName] nvarchar(200)  NOT NULL,
    [FileType] nvarchar(5)  NOT NULL,
    [DateCreated] datetime  NULL,
    [PersonId] int  NOT NULL,
    [SampleTypeId] int  NOT NULL,
    [DeviceId] int  NULL,
    [SampleDatasetId] int  NULL,
    [FullFilePath] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'KeystrokeSet'
CREATE TABLE [dbo].[KeystrokeSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Success] bit  NOT NULL,
    [Password] nvarchar(max)  NOT NULL,
    [PpTime] nvarchar(max)  NOT NULL,
    [RrTime] nvarchar(max)  NOT NULL,
    [PrTime] nvarchar(max)  NOT NULL,
    [RpTime] nvarchar(max)  NOT NULL,
    [Vector] nvarchar(max)  NOT NULL,
    [TimeToType] nvarchar(max)  NOT NULL,
    [RawPress] nvarchar(max)  NOT NULL,
    [RawRelease] nvarchar(max)  NOT NULL,
    [PersonId] int  NOT NULL,
    [KeystrokeDatasetId] int  NULL,
    [KeyboardId] int  NULL
);
GO

-- Creating table 'KeyboardSet'
CREATE TABLE [dbo].[KeyboardSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(50)  NOT NULL,
    [Type] nvarchar(50)  NULL,
    [Description] nvarchar(max)  NULL
);
GO

-- Creating table 'SignatureSet'
CREATE TABLE [dbo].[SignatureSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [XCoordinate] int  NULL,
    [YCoordinate] int  NULL,
    [SyntheticTimestamp] int  NULL,
    [Penups] bit  NULL,
    [Pressure] int  NULL,
    [Sample_Id] int  NOT NULL
);
GO

-- Creating table 'FingerprintSet'
CREATE TABLE [dbo].[FingerprintSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Hand] nvarchar(10)  NULL,
    [Finger] nvarchar(20)  NULL,
    [Sample_Id] int  NOT NULL
);
GO

-- Creating table 'PalmprintSet'
CREATE TABLE [dbo].[PalmprintSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Hand] nvarchar(10)  NULL,
    [Position] nvarchar(20)  NULL,
    [Sample_Id] int  NOT NULL
);
GO

-- Creating table 'FaceSet'
CREATE TABLE [dbo].[FaceSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Position] nvarchar(20)  NULL,
    [Sample_Id] int  NOT NULL
);
GO

-- Creating table 'SpeechSet'
CREATE TABLE [dbo].[SpeechSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Quality] nvarchar(50)  NULL,
    [Sample_Id] int  NOT NULL
);
GO

-- Creating table 'IrisSet'
CREATE TABLE [dbo].[IrisSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Eye] nvarchar(10)  NULL,
    [Sample_Id] int  NOT NULL
);
GO

-- Creating table 'HandwritingSet'
CREATE TABLE [dbo].[HandwritingSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [TextId] int  NULL,
    [Sample_Id] int  NOT NULL
);
GO

-- Creating table 'TextSet'
CREATE TABLE [dbo].[TextSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [LanguageId] int  NULL,
    [Content] nvarchar(max)  NULL
);
GO

-- Creating table 'LanguageSet'
CREATE TABLE [dbo].[LanguageSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(50)  NOT NULL,
    [Code] nvarchar(20)  NULL
);
GO

-- Creating table 'GaitSet'
CREATE TABLE [dbo].[GaitSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Direction] nvarchar(20)  NULL,
    [FrameNumber] int  NULL,
    [Sample_Id] int  NOT NULL
);
GO

-- Creating table 'DeviceTypeSet'
CREATE TABLE [dbo].[DeviceTypeSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(50)  NOT NULL,
    [Description] nvarchar(200)  NULL
);
GO

-- Creating table 'SampleTypeSet'
CREATE TABLE [dbo].[SampleTypeSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(50)  NOT NULL,
    [Description] nvarchar(200)  NULL
);
GO

-- Creating table 'SampleDatasetSet'
CREATE TABLE [dbo].[SampleDatasetSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(50)  NOT NULL,
    [Description] nvarchar(200)  NULL
);
GO

-- Creating table 'KeystrokeDatasetSet'
CREATE TABLE [dbo].[KeystrokeDatasetSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(50)  NOT NULL,
    [Description] nvarchar(200)  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'PersonSet'
ALTER TABLE [dbo].[PersonSet]
ADD CONSTRAINT [PK_PersonSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'DeviceSet'
ALTER TABLE [dbo].[DeviceSet]
ADD CONSTRAINT [PK_DeviceSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'SampleSet'
ALTER TABLE [dbo].[SampleSet]
ADD CONSTRAINT [PK_SampleSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'KeystrokeSet'
ALTER TABLE [dbo].[KeystrokeSet]
ADD CONSTRAINT [PK_KeystrokeSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'KeyboardSet'
ALTER TABLE [dbo].[KeyboardSet]
ADD CONSTRAINT [PK_KeyboardSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'SignatureSet'
ALTER TABLE [dbo].[SignatureSet]
ADD CONSTRAINT [PK_SignatureSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'FingerprintSet'
ALTER TABLE [dbo].[FingerprintSet]
ADD CONSTRAINT [PK_FingerprintSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'PalmprintSet'
ALTER TABLE [dbo].[PalmprintSet]
ADD CONSTRAINT [PK_PalmprintSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'FaceSet'
ALTER TABLE [dbo].[FaceSet]
ADD CONSTRAINT [PK_FaceSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'SpeechSet'
ALTER TABLE [dbo].[SpeechSet]
ADD CONSTRAINT [PK_SpeechSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'IrisSet'
ALTER TABLE [dbo].[IrisSet]
ADD CONSTRAINT [PK_IrisSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'HandwritingSet'
ALTER TABLE [dbo].[HandwritingSet]
ADD CONSTRAINT [PK_HandwritingSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'TextSet'
ALTER TABLE [dbo].[TextSet]
ADD CONSTRAINT [PK_TextSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'LanguageSet'
ALTER TABLE [dbo].[LanguageSet]
ADD CONSTRAINT [PK_LanguageSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'GaitSet'
ALTER TABLE [dbo].[GaitSet]
ADD CONSTRAINT [PK_GaitSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'DeviceTypeSet'
ALTER TABLE [dbo].[DeviceTypeSet]
ADD CONSTRAINT [PK_DeviceTypeSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'SampleTypeSet'
ALTER TABLE [dbo].[SampleTypeSet]
ADD CONSTRAINT [PK_SampleTypeSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'SampleDatasetSet'
ALTER TABLE [dbo].[SampleDatasetSet]
ADD CONSTRAINT [PK_SampleDatasetSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'KeystrokeDatasetSet'
ALTER TABLE [dbo].[KeystrokeDatasetSet]
ADD CONSTRAINT [PK_KeystrokeDatasetSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [PersonId] in table 'SampleSet'
ALTER TABLE [dbo].[SampleSet]
ADD CONSTRAINT [FK_PersonSample]
    FOREIGN KEY ([PersonId])
    REFERENCES [dbo].[PersonSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PersonSample'
CREATE INDEX [IX_FK_PersonSample]
ON [dbo].[SampleSet]
    ([PersonId]);
GO

-- Creating foreign key on [SampleTypeId] in table 'SampleSet'
ALTER TABLE [dbo].[SampleSet]
ADD CONSTRAINT [FK_SampleTypeSample]
    FOREIGN KEY ([SampleTypeId])
    REFERENCES [dbo].[SampleTypeSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SampleTypeSample'
CREATE INDEX [IX_FK_SampleTypeSample]
ON [dbo].[SampleSet]
    ([SampleTypeId]);
GO

-- Creating foreign key on [DeviceId] in table 'SampleSet'
ALTER TABLE [dbo].[SampleSet]
ADD CONSTRAINT [FK_DeviceSample]
    FOREIGN KEY ([DeviceId])
    REFERENCES [dbo].[DeviceSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_DeviceSample'
CREATE INDEX [IX_FK_DeviceSample]
ON [dbo].[SampleSet]
    ([DeviceId]);
GO

-- Creating foreign key on [DeviceTypeId] in table 'DeviceSet'
ALTER TABLE [dbo].[DeviceSet]
ADD CONSTRAINT [FK_DeviceTypeDevice]
    FOREIGN KEY ([DeviceTypeId])
    REFERENCES [dbo].[DeviceTypeSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_DeviceTypeDevice'
CREATE INDEX [IX_FK_DeviceTypeDevice]
ON [dbo].[DeviceSet]
    ([DeviceTypeId]);
GO

-- Creating foreign key on [Sample_Id] in table 'FingerprintSet'
ALTER TABLE [dbo].[FingerprintSet]
ADD CONSTRAINT [FK_SampleFingerprint]
    FOREIGN KEY ([Sample_Id])
    REFERENCES [dbo].[SampleSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SampleFingerprint'
CREATE INDEX [IX_FK_SampleFingerprint]
ON [dbo].[FingerprintSet]
    ([Sample_Id]);
GO

-- Creating foreign key on [Sample_Id] in table 'PalmprintSet'
ALTER TABLE [dbo].[PalmprintSet]
ADD CONSTRAINT [FK_SamplePalmprint]
    FOREIGN KEY ([Sample_Id])
    REFERENCES [dbo].[SampleSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SamplePalmprint'
CREATE INDEX [IX_FK_SamplePalmprint]
ON [dbo].[PalmprintSet]
    ([Sample_Id]);
GO

-- Creating foreign key on [Sample_Id] in table 'FaceSet'
ALTER TABLE [dbo].[FaceSet]
ADD CONSTRAINT [FK_SampleFace]
    FOREIGN KEY ([Sample_Id])
    REFERENCES [dbo].[SampleSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SampleFace'
CREATE INDEX [IX_FK_SampleFace]
ON [dbo].[FaceSet]
    ([Sample_Id]);
GO

-- Creating foreign key on [Sample_Id] in table 'IrisSet'
ALTER TABLE [dbo].[IrisSet]
ADD CONSTRAINT [FK_SampleIris]
    FOREIGN KEY ([Sample_Id])
    REFERENCES [dbo].[SampleSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SampleIris'
CREATE INDEX [IX_FK_SampleIris]
ON [dbo].[IrisSet]
    ([Sample_Id]);
GO

-- Creating foreign key on [Sample_Id] in table 'GaitSet'
ALTER TABLE [dbo].[GaitSet]
ADD CONSTRAINT [FK_SampleGait]
    FOREIGN KEY ([Sample_Id])
    REFERENCES [dbo].[SampleSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SampleGait'
CREATE INDEX [IX_FK_SampleGait]
ON [dbo].[GaitSet]
    ([Sample_Id]);
GO

-- Creating foreign key on [Sample_Id] in table 'SpeechSet'
ALTER TABLE [dbo].[SpeechSet]
ADD CONSTRAINT [FK_SampleSpeech]
    FOREIGN KEY ([Sample_Id])
    REFERENCES [dbo].[SampleSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SampleSpeech'
CREATE INDEX [IX_FK_SampleSpeech]
ON [dbo].[SpeechSet]
    ([Sample_Id]);
GO

-- Creating foreign key on [Sample_Id] in table 'HandwritingSet'
ALTER TABLE [dbo].[HandwritingSet]
ADD CONSTRAINT [FK_SampleHandwriting]
    FOREIGN KEY ([Sample_Id])
    REFERENCES [dbo].[SampleSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SampleHandwriting'
CREATE INDEX [IX_FK_SampleHandwriting]
ON [dbo].[HandwritingSet]
    ([Sample_Id]);
GO

-- Creating foreign key on [TextId] in table 'HandwritingSet'
ALTER TABLE [dbo].[HandwritingSet]
ADD CONSTRAINT [FK_TextHandwriting]
    FOREIGN KEY ([TextId])
    REFERENCES [dbo].[TextSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TextHandwriting'
CREATE INDEX [IX_FK_TextHandwriting]
ON [dbo].[HandwritingSet]
    ([TextId]);
GO

-- Creating foreign key on [Sample_Id] in table 'SignatureSet'
ALTER TABLE [dbo].[SignatureSet]
ADD CONSTRAINT [FK_SignatureSample]
    FOREIGN KEY ([Sample_Id])
    REFERENCES [dbo].[SampleSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SignatureSample'
CREATE INDEX [IX_FK_SignatureSample]
ON [dbo].[SignatureSet]
    ([Sample_Id]);
GO

-- Creating foreign key on [LanguageId] in table 'TextSet'
ALTER TABLE [dbo].[TextSet]
ADD CONSTRAINT [FK_LanguageText]
    FOREIGN KEY ([LanguageId])
    REFERENCES [dbo].[LanguageSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_LanguageText'
CREATE INDEX [IX_FK_LanguageText]
ON [dbo].[TextSet]
    ([LanguageId]);
GO

-- Creating foreign key on [PersonId] in table 'KeystrokeSet'
ALTER TABLE [dbo].[KeystrokeSet]
ADD CONSTRAINT [FK_PersonKeystroke]
    FOREIGN KEY ([PersonId])
    REFERENCES [dbo].[PersonSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PersonKeystroke'
CREATE INDEX [IX_FK_PersonKeystroke]
ON [dbo].[KeystrokeSet]
    ([PersonId]);
GO

-- Creating foreign key on [SampleDatasetId] in table 'SampleSet'
ALTER TABLE [dbo].[SampleSet]
ADD CONSTRAINT [FK_SampleDatasetSample]
    FOREIGN KEY ([SampleDatasetId])
    REFERENCES [dbo].[SampleDatasetSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SampleDatasetSample'
CREATE INDEX [IX_FK_SampleDatasetSample]
ON [dbo].[SampleSet]
    ([SampleDatasetId]);
GO

-- Creating foreign key on [KeystrokeDatasetId] in table 'KeystrokeSet'
ALTER TABLE [dbo].[KeystrokeSet]
ADD CONSTRAINT [FK_KeystrokeDatasetKeystroke]
    FOREIGN KEY ([KeystrokeDatasetId])
    REFERENCES [dbo].[KeystrokeDatasetSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_KeystrokeDatasetKeystroke'
CREATE INDEX [IX_FK_KeystrokeDatasetKeystroke]
ON [dbo].[KeystrokeSet]
    ([KeystrokeDatasetId]);
GO

-- Creating foreign key on [KeyboardId] in table 'KeystrokeSet'
ALTER TABLE [dbo].[KeystrokeSet]
ADD CONSTRAINT [FK_KeyboardKeystroke]
    FOREIGN KEY ([KeyboardId])
    REFERENCES [dbo].[KeyboardSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_KeyboardKeystroke'
CREATE INDEX [IX_FK_KeyboardKeystroke]
ON [dbo].[KeystrokeSet]
    ([KeyboardId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------