



CREATE TABLE [RequestType] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] VARCHAR(255)  NULL,

	 [Code] INT  NULL,

	 [Active] BIT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [RequestFromUser] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Number] INT  NULL,

	 [Status] VARCHAR(12)  NULL,

	 [Applicant] VARCHAR(255)  NULL,

	 [DateOpen] DATETIME  NULL,

	 [DateClose] DATETIME  NULL,

	 [Responsible_m0] UNIQUEIDENTIFIER  NULL,

	 [SecondaryRequest_m0] UNIQUEIDENTIFIER  NULL,

	 [RequestType_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [RequestKind_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Operator_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [RequestCause_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [RequestCause] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] VARCHAR(255)  NULL,

	 [Code] INT  NULL,

	 [Active] BIT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Employee] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [FIO] VARCHAR(255)  NULL,

	 [email] VARCHAR(255)  NULL,

	 [Active] BIT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Dictionary] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Active] BIT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [RequestKind] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] VARCHAR(255)  NULL,

	 [Code] INT  NULL,

	 [Active] BIT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




 ALTER TABLE [RequestFromUser] ADD CONSTRAINT [RequestFromUser_FEmployee_0] FOREIGN KEY ([Responsible_m0]) REFERENCES [Employee]
CREATE INDEX RequestFromUser_IResponsible_m0 on [RequestFromUser] ([Responsible_m0])

 ALTER TABLE [RequestFromUser] ADD CONSTRAINT [RequestFromUser_FRequestFromUser_0] FOREIGN KEY ([SecondaryRequest_m0]) REFERENCES [RequestFromUser]
CREATE INDEX RequestFromUser_ISecondaryRequest_m0 on [RequestFromUser] ([SecondaryRequest_m0])

 ALTER TABLE [RequestFromUser] ADD CONSTRAINT [RequestFromUser_FRequestType_0] FOREIGN KEY ([RequestType_m0]) REFERENCES [RequestType]
CREATE INDEX RequestFromUser_IRequestType_m0 on [RequestFromUser] ([RequestType_m0])

 ALTER TABLE [RequestFromUser] ADD CONSTRAINT [RequestFromUser_FRequestKind_0] FOREIGN KEY ([RequestKind_m0]) REFERENCES [RequestKind]
CREATE INDEX RequestFromUser_IRequestKind_m0 on [RequestFromUser] ([RequestKind_m0])

 ALTER TABLE [RequestFromUser] ADD CONSTRAINT [RequestFromUser_FEmployee_1] FOREIGN KEY ([Operator_m0]) REFERENCES [Employee]
CREATE INDEX RequestFromUser_IOperator_m0 on [RequestFromUser] ([Operator_m0])

 ALTER TABLE [RequestFromUser] ADD CONSTRAINT [RequestFromUser_FRequestCause_0] FOREIGN KEY ([RequestCause_m0]) REFERENCES [RequestCause]
CREATE INDEX RequestFromUser_IRequestCause_m0 on [RequestFromUser] ([RequestCause_m0])

 ALTER TABLE [STORMWEBSEARCH] ADD CONSTRAINT [STORMWEBSEARCH_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERDETAIL] ADD CONSTRAINT [STORMFILTERDETAIL_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERLOOKUP] ADD CONSTRAINT [STORMFILTERLOOKUP_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

