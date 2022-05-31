



CREATE TABLE "RequestType"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	"Code" NUMBER(10) NULL,

	"Active" NUMBER(1) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "RequestFromUser"
(

	"primaryKey" RAW(16) NOT NULL,

	"Number" NUMBER(10) NULL,

	"Status" NVARCHAR2(12) NULL,

	"Applicant" NVARCHAR2(255) NULL,

	"DateOpen" DATE NULL,

	"DateClose" DATE NULL,

	"Responsible_m0" RAW(16) NULL,

	"SecondaryRequest_m0" RAW(16) NULL,

	"RequestType_m0" RAW(16) NOT NULL,

	"RequestKind_m0" RAW(16) NOT NULL,

	"Operator_m0" RAW(16) NOT NULL,

	"RequestCause_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "RequestCause"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	"Code" NUMBER(10) NULL,

	"Active" NUMBER(1) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Employee"
(

	"primaryKey" RAW(16) NOT NULL,

	"FIO" NVARCHAR2(255) NULL,

	"email" NVARCHAR2(255) NULL,

	"Active" NUMBER(1) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Dictionary"
(

	"primaryKey" RAW(16) NOT NULL,

	"Active" NUMBER(1) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "RequestKind"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	"Code" NUMBER(10) NULL,

	"Active" NUMBER(1) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "RequestFromUser"
	ADD CONSTRAINT "RequestFromUser_FEmployee_0" FOREIGN KEY ("Responsible_m0") REFERENCES "Employee" ("primaryKey");

CREATE INDEX "RequestFromUser_IResponsi_8996" on "RequestFromUser" ("Responsible_m0");

ALTER TABLE "RequestFromUser"
	ADD CONSTRAINT "RequestFromUser_FRequestF_9100" FOREIGN KEY ("SecondaryRequest_m0") REFERENCES "RequestFromUser" ("primaryKey");

CREATE INDEX "RequestFromUser_ISecondar_3239" on "RequestFromUser" ("SecondaryRequest_m0");

ALTER TABLE "RequestFromUser"
	ADD CONSTRAINT "RequestFromUser_FRequestType_0" FOREIGN KEY ("RequestType_m0") REFERENCES "RequestType" ("primaryKey");

CREATE INDEX "RequestFromUser_IRequestT_6034" on "RequestFromUser" ("RequestType_m0");

ALTER TABLE "RequestFromUser"
	ADD CONSTRAINT "RequestFromUser_FRequestKind_0" FOREIGN KEY ("RequestKind_m0") REFERENCES "RequestKind" ("primaryKey");

CREATE INDEX "RequestFromUser_IRequestK_4145" on "RequestFromUser" ("RequestKind_m0");

ALTER TABLE "RequestFromUser"
	ADD CONSTRAINT "RequestFromUser_FEmployee_1" FOREIGN KEY ("Operator_m0") REFERENCES "Employee" ("primaryKey");

CREATE INDEX "RequestFromUser_IOperator_m0" on "RequestFromUser" ("Operator_m0");

ALTER TABLE "RequestFromUser"
	ADD CONSTRAINT "RequestFromUser_FRequestC_4728" FOREIGN KEY ("RequestCause_m0") REFERENCES "RequestCause" ("primaryKey");

CREATE INDEX "RequestFromUser_IRequestC_9187" on "RequestFromUser" ("RequestCause_m0");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


