--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5 (Ubuntu 11.5-3.pgdg18.04+1)
-- Dumped by pg_dump version 11.5 (Ubuntu 11.5-3.pgdg18.04+1)

-- Started on 2020-01-13 08:35:16 +0330

SET statement_timeout
= 0;
SET lock_timeout
= 0;
SET idle_in_transaction_session_timeout
= 0;
SET client_encoding
= 'UTF8';
SET standard_conforming_strings
= on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies
= false;
SET xmloption
= content;
SET client_min_messages
= warning;
SET row_security
= off;

--
-- TOC entry 8 (class 2615 OID 32779)
-- Name: PayanakDB; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA PayanakDB;


ALTER SCHEMA PayanakDB OWNER TO postgres;

--
-- TOC entry 9 (class 2615 OID 16385)
-- Name: um; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA um;


ALTER SCHEMA um OWNER TO postgres;

--
-- TOC entry 3241 (class 0 OID 0)
-- Dependencies: 9
-- Name: SCHEMA um; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA um IS 'User Management  Scheme';


SET default_tablespace
= '';

SET default_with_oids
= false;

--
-- TOC entry 228 (class 1259 OID 32891)
-- Name: BusinessCard; Type: TABLE; Schema: PayanakDB; Owner: postgres
--

CREATE TABLE PayanakDB."BusinessCard"
(
    id bigint NOT NULL,
    "userId" bigint,
    "createDate" timestamp
    without time zone,
    "groupId" bigint,
    "isBlocked" boolean,
    status smallint,
    "templateId" bigint,
    "numberId" bigint,
    key character varying
    (500)
);


    ALTER TABLE PayanakDB."BusinessCard" OWNER TO postgres;

--
-- TOC entry 3242 (class 0 OID 0)
-- Dependencies: 228
-- Name: TABLE "BusinessCard"; Type: COMMENT; Schema: PayanakDB; Owner: postgres
--

COMMENT ON TABLE PayanakDB."BusinessCard" IS 'اطلاعات مربوط به کارت ویزیت';


    --
    -- TOC entry 227 (class 1259 OID 32889)
    -- Name: BusinessCard_id_seq; Type: SEQUENCE; Schema: PayanakDB; Owner: postgres
    --

    ALTER TABLE PayanakDB."BusinessCard" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
    (
    SEQUENCE NAME PayanakDB."BusinessCard_id_seq"
    START
    WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


    --
    -- TOC entry 213 (class 1259 OID 32780)
    -- Name: CreditInfo; Type: TABLE; Schema: PayanakDB; Owner: postgres
    --

    CREATE TABLE PayanakDB."CreditInfo"
    (
        "userId" bigint NOT NULL,
        discount smallint DEFAULT 0,
        credit numeric(20,2) DEFAULT 0
    );


    ALTER TABLE PayanakDB."CreditInfo" OWNER TO postgres;

    --
    -- TOC entry 217 (class 1259 OID 32803)
    -- Name: NumberInfo; Type: TABLE; Schema: PayanakDB; Owner: postgres
    --

    CREATE TABLE PayanakDB."NumberInfo"
    (
        id bigint NOT NULL,
        number character varying(50),
        "isShared" boolean,
        "isBlocked" boolean,
        owner bigint,
        type smallint,
        username character varying(100),
        password character varying(100),
        "createDate" timestamp
        without time zone,
    "lastReceivedId" bigint
);


        ALTER TABLE PayanakDB."NumberInfo" OWNER TO postgres;

--
-- TOC entry 3243 (class 0 OID 0)
-- Dependencies: 217
-- Name: TABLE "NumberInfo"; Type: COMMENT; Schema: PayanakDB; Owner: postgres
--

COMMENT ON TABLE PayanakDB."NumberInfo" IS 'اطلاعات مربوط به شماره های خدماتی و  پیام انبوه';


        --
        -- TOC entry 216 (class 1259 OID 32801)
        -- Name: NumberInfo_id_seq; Type: SEQUENCE; Schema: PayanakDB; Owner: postgres
        --

        ALTER TABLE PayanakDB."NumberInfo" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
        (
    SEQUENCE NAME PayanakDB."NumberInfo_id_seq"
    START
        WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


        --
        -- TOC entry 224 (class 1259 OID 32858)
        -- Name: PanelInfo; Type: TABLE; Schema: PayanakDB; Owner: postgres
        --

        CREATE TABLE PayanakDB."PanelInfo"
        (
            id bigint NOT NULL,
            "userId" bigint,
            "createDate" timestamp
            without time zone,
    "lastActivity" timestamp without time zone,
    version character varying
            (100),
    number character varying
            (100),
    serial character varying
            (200),
    "hashId" character varying
            (200),
    name character varying
            (500),
    "groupId" bigint,
    "isBlocked" boolean,
    status smallint,
    "templateId" bigint,
    "numberId" bigint,
    "hasForm" boolean
);


            ALTER TABLE PayanakDB."PanelInfo" OWNER TO postgres;

--
-- TOC entry 3244 (class 0 OID 0)
-- Dependencies: 224
-- Name: TABLE "PanelInfo"; Type: COMMENT; Schema: PayanakDB; Owner: postgres
--

COMMENT ON TABLE PayanakDB."PanelInfo" IS 'اطلاعات مربوط به پنل های پایانک';


            --
            -- TOC entry 223 (class 1259 OID 32856)
            -- Name: PanelInfo_id_seq; Type: SEQUENCE; Schema: PayanakDB; Owner: postgres
            --

            ALTER TABLE PayanakDB."PanelInfo" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
            (
    SEQUENCE NAME PayanakDB."PanelInfo_id_seq"
    START
            WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


            --
            -- TOC entry 234 (class 1259 OID 32935)
            -- Name: PanelVersionInfo; Type: TABLE; Schema: PayanakDB; Owner: postgres
            --

            CREATE TABLE PayanakDB."PanelVersionInfo"
            (
                id bigint NOT NULL,
                "createDate" timestamp
                without time zone,
    "nickName" character varying
                (200),
    path text,
    "minVersion" numeric
                (20,2),
    "maxVersion" numeric
                (20,2)
);


                ALTER TABLE PayanakDB."PanelVersionInfo" OWNER TO postgres;

--
-- TOC entry 3245 (class 0 OID 0)
-- Dependencies: 234
-- Name: TABLE "PanelVersionInfo"; Type: COMMENT; Schema: PayanakDB; Owner: postgres
--

COMMENT ON TABLE PayanakDB."PanelVersionInfo" IS 'اطلاعات ورژن پنل ها';


                --
                -- TOC entry 233 (class 1259 OID 32933)
                -- Name: PanelVersionInfo_id_seq; Type: SEQUENCE; Schema: PayanakDB; Owner: postgres
                --

                ALTER TABLE PayanakDB."PanelVersionInfo" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
                (
    SEQUENCE NAME PayanakDB."PanelVersionInfo_id_seq"
    START
                WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


                --
                -- TOC entry 222 (class 1259 OID 32843)
                -- Name: PersonalTemplate; Type: TABLE; Schema: PayanakDB; Owner: postgres
                --

                CREATE TABLE PayanakDB."PersonalTemplate"
                (
                    id bigint NOT NULL,
                    "userId" bigint,
                    name character varying(200),
                    body text
                );


                ALTER TABLE PayanakDB."PersonalTemplate" OWNER TO postgres;

--
-- TOC entry 3246 (class 0 OID 0)
-- Dependencies: 222
-- Name: TABLE "PersonalTemplate"; Type: COMMENT; Schema: PayanakDB; Owner: postgres
--

COMMENT ON TABLE PayanakDB."PersonalTemplate" IS 'تمپلیت های ساخته شده توسط کاربر برای ارسال پیام';


                --
                -- TOC entry 221 (class 1259 OID 32841)
                -- Name: PersonalTemplate_id_seq; Type: SEQUENCE; Schema: PayanakDB; Owner: postgres
                --

                ALTER TABLE PayanakDB."PersonalTemplate" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
                (
    SEQUENCE NAME PayanakDB."PersonalTemplate_id_seq"
    START
                WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


                --
                -- TOC entry 231 (class 1259 OID 32907)
                -- Name: ReceiveInfo; Type: TABLE; Schema: PayanakDB; Owner: postgres
                --

                CREATE TABLE PayanakDB."ReceiveInfo"
                (
                    id bigint NOT NULL,
                    sender character varying(20),
                    receiver character varying(20),
                    date timestamp
                    without time zone,
    "msgId" character varying
                    (20),
    body text,
    count bigint
);


                    ALTER TABLE PayanakDB."ReceiveInfo" OWNER TO postgres;

--
-- TOC entry 3247 (class 0 OID 0)
-- Dependencies: 231
-- Name: TABLE "ReceiveInfo"; Type: COMMENT; Schema: PayanakDB; Owner: postgres
--

COMMENT ON TABLE PayanakDB."ReceiveInfo" IS 'لیست پیام های دریافتی';


                    --
                    -- TOC entry 230 (class 1259 OID 32905)
                    -- Name: ReciveInfo_id_seq; Type: SEQUENCE; Schema: PayanakDB; Owner: postgres
                    --

                    ALTER TABLE PayanakDB."ReceiveInfo" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
                    (
    SEQUENCE NAME PayanakDB."ReciveInfo_id_seq"
    START
                    WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


                    --
                    -- TOC entry 244 (class 1259 OID 32986)
                    -- Name: SchedulePayanakDBDetail; Type: TABLE; Schema: PayanakDB; Owner: postgres
                    --

                    CREATE TABLE PayanakDB."SchedulePayanakDBDetail"
                    (
                        id bigint NOT NULL,
                        "parentId" bigint,
                        "userId" bigint,
                        date timestamp
                        without time zone,
    "updatedDate" timestamp without time zone,
    counter bigint
);


                        ALTER TABLE PayanakDB."SchedulePayanakDBDetail" OWNER TO postgres;

--
-- TOC entry 3248 (class 0 OID 0)
-- Dependencies: 244
-- Name: TABLE "SchedulePayanakDBDetail"; Type: COMMENT; Schema: PayanakDB; Owner: postgres
--

COMMENT ON TABLE PayanakDB."SchedulePayanakDBDetail" IS 'اطلاعات کاربران یک ارسال زماندار';


                        --
                        -- TOC entry 243 (class 1259 OID 32984)
                        -- Name: SchedulePayanakDBDetail_id_seq; Type: SEQUENCE; Schema: PayanakDB; Owner: postgres
                        --

                        ALTER TABLE PayanakDB."SchedulePayanakDBDetail" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
                        (
    SEQUENCE NAME PayanakDB."SchedulePayanakDBDetail_id_seq"
    START
                        WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


                        --
                        -- TOC entry 242 (class 1259 OID 32976)
                        -- Name: SchedulePayanakDBInfo; Type: TABLE; Schema: PayanakDB; Owner: postgres
                        --

                        CREATE TABLE PayanakDB."SchedulePayanakDBInfo"
                        (
                            id bigint NOT NULL,
                            name character varying(500),
                            code bigint,
                            "userId" bigint,
                            "addedYear" integer,
                            "addedMonth" integer,
                            "addedDay" integer,
                            status smallint,
                            "createDate" timestamp
                            without time zone,
    "templateId" bigint,
    "numberId" bigint
);


                            ALTER TABLE PayanakDB."SchedulePayanakDBInfo" OWNER TO postgres;

--
-- TOC entry 3249 (class 0 OID 0)
-- Dependencies: 242
-- Name: TABLE "SchedulePayanakDBInfo"; Type: COMMENT; Schema: PayanakDB; Owner: postgres
--

COMMENT ON TABLE PayanakDB."SchedulePayanakDBInfo" IS 'اطلاعات پیام زمان دار';


                            --
                            -- TOC entry 241 (class 1259 OID 32974)
                            -- Name: SchedulePayanakDBInfo_id_seq; Type: SEQUENCE; Schema: PayanakDB; Owner: postgres
                            --

                            ALTER TABLE PayanakDB."SchedulePayanakDBInfo" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
                            (
    SEQUENCE NAME PayanakDB."SchedulePayanakDBInfo_id_seq"
    START
                            WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


                            --
                            -- TOC entry 219 (class 1259 OID 32815)
                            -- Name: SentInfo; Type: TABLE; Schema: PayanakDB; Owner: postgres
                            --

                            CREATE TABLE PayanakDB."SentInfo"
                            (
                                id bigint NOT NULL,
                                numbers text,
                                "groupIds" text,
                                kind integer DEFAULT 0,
                                status smallint DEFAULT 0,
                                deliveries text,
                                "sendNumber" character varying(50),
                                "userId" bigint,
                                header character varying(200),
                                body text,
                                "sentDate" timestamp
                                without time zone,
    "rectIds" text,
    count bigint,
    "calculatedCount" bigint,
    price numeric
                                (20,2)
);


                                ALTER TABLE PayanakDB."SentInfo" OWNER TO postgres;

--
-- TOC entry 3250 (class 0 OID 0)
-- Dependencies: 219
-- Name: TABLE "SentInfo"; Type: COMMENT; Schema: PayanakDB; Owner: postgres
--

COMMENT ON TABLE PayanakDB."SentInfo" IS 'برا مشاهده پیام های ارسال شده';


                                --
                                -- TOC entry 218 (class 1259 OID 32813)
                                -- Name: SentInfo_id_seq; Type: SEQUENCE; Schema: PayanakDB; Owner: postgres
                                --

                                ALTER TABLE PayanakDB."SentInfo" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
                                (
    SEQUENCE NAME PayanakDB."SentInfo_id_seq"
    START
                                WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


                                --
                                -- TOC entry 214 (class 1259 OID 32792)
                                -- Name: Settings; Type: TABLE; Schema: PayanakDB; Owner: postgres
                                --

                                CREATE TABLE PayanakDB."Settings"
                                (
                                    id bigint NOT NULL,
                                    "lastRecivedPayanakDBId" bigint,
                                    "PayanakDBPrice" numeric(20,2),
                                    "PayanakDBDiscount" smallint DEFAULT 0,
                                    "formKey" character varying(50),
                                    "formMessage" text
                                );


                                ALTER TABLE PayanakDB."Settings" OWNER TO postgres;

                                --
                                -- TOC entry 215 (class 1259 OID 32798)
                                -- Name: Settings_id_seq; Type: SEQUENCE; Schema: PayanakDB; Owner: postgres
                                --

                                ALTER TABLE PayanakDB."Settings" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
                                (
    SEQUENCE NAME PayanakDB."Settings_id_seq"
    START
                                WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


                                --
                                -- TOC entry 249 (class 1259 OID 33034)
                                -- Name: TaskInfo; Type: TABLE; Schema: PayanakDB; Owner: postgres
                                --

                                CREATE TABLE PayanakDB."TaskInfo"
                                (
                                    id bigint NOT NULL,
                                    "userId" bigint,
                                    percent integer,
    message text,
    status smallint,
    header text,
    guid character varying
                                    (50)
);


                                    ALTER TABLE PayanakDB."TaskInfo" OWNER TO postgres;

--
-- TOC entry 3251 (class 0 OID 0)
-- Dependencies: 249
-- Name: TABLE "TaskInfo"; Type: COMMENT; Schema: PayanakDB; Owner: postgres
--

COMMENT ON TABLE PayanakDB."TaskInfo" IS 'اطلاعات تسک های کامل شده در سایت';


                                    --
                                    -- TOC entry 248 (class 1259 OID 33032)
                                    -- Name: TaskInfo_id_seq; Type: SEQUENCE; Schema: PayanakDB; Owner: postgres
                                    --

                                    ALTER TABLE PayanakDB."TaskInfo" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
                                    (
    SEQUENCE NAME PayanakDB."TaskInfo_id_seq"
    START
                                    WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


                                    --
                                    -- TOC entry 199 (class 1259 OID 16388)
                                    -- Name: AccountInfo; Type: TABLE; Schema: um; Owner: postgres
                                    --

                                    CREATE TABLE um."AccountInfo"
                                    (
                                        id bigint NOT NULL,
                                        username character varying(100) NOT NULL,
                                        password character varying(500) NOT NULL,
                                        email character varying(500),
                                        "mobilePhone" character varying(15),
                                        "homePhone" character varying(15),
                                        "businessPhone" character varying(15),
                                        "createDate" timestamp
                                        without time zone NOT NULL,
    "lastLogin" timestamp without time zone NOT NULL,
    picture character varying
                                        (1000),
    "formGuid" text,
    "formDate" timestamp without time zone
);


                                        ALTER TABLE um."AccountInfo" OWNER TO postgres;

--
-- TOC entry 3252 (class 0 OID 0)
-- Dependencies: 199
-- Name: TABLE "AccountInfo"; Type: COMMENT; Schema: um; Owner: postgres
--

COMMENT ON TABLE um."AccountInfo" IS 'Default Table For User Login Info';


                                        --
                                        -- TOC entry 200 (class 1259 OID 16396)
                                        -- Name: AdditionalInfo; Type: TABLE; Schema: um; Owner: postgres
                                        --

                                        CREATE TABLE um."AdditionalInfo"
                                        (
                                            "userId" bigint NOT NULL,
                                            "specialDate" timestamp
                                            without time zone,
    "SpecialDateCounter" smallint,
    "instagramLink" text,
    "telegramLink" text,
    "isSpecialDateChanged" boolean
);


                                            ALTER TABLE um."AdditionalInfo" OWNER TO postgres;

--
-- TOC entry 3253 (class 0 OID 0)
-- Dependencies: 200
-- Name: TABLE "AdditionalInfo"; Type: COMMENT; Schema: um; Owner: postgres
--

COMMENT ON TABLE um."AdditionalInfo" IS 'User Additional Information';


                                            --
                                            -- TOC entry 201 (class 1259 OID 16404)
                                            -- Name: AddressInfo; Type: TABLE; Schema: um; Owner: postgres
                                            --

                                            CREATE TABLE um."AddressInfo"
                                            (
                                                "userId" bigint NOT NULL,
                                                region character varying(50),
                                                city character varying(50),
                                                address character varying(500),
                                                latitude double precision,
                                                longitude double precision
                                            );


                                            ALTER TABLE um."AddressInfo" OWNER TO postgres;

--
-- TOC entry 3254 (class 0 OID 0)
-- Dependencies: 201
-- Name: TABLE "AddressInfo"; Type: COMMENT; Schema: um; Owner: postgres
--

COMMENT ON TABLE um."AddressInfo" IS 'User Address Info';


                                            --
                                            -- TOC entry 209 (class 1259 OID 24576)
                                            -- Name: Group; Type: TABLE; Schema: um; Owner: postgres
                                            --

                                            CREATE TABLE um."Group"
                                            (
                                                id bigint NOT NULL,
                                                name character varying(100),
                                                title character varying(500),
                                                owner bigint NOT NULL,
                                                descriptions text,
                                                status smallint,
                                                picture text
                                            );


                                            ALTER TABLE um."Group" OWNER TO postgres;

--
-- TOC entry 3255 (class 0 OID 0)
-- Dependencies: 209
-- Name: TABLE "Group"; Type: COMMENT; Schema: um; Owner: postgres
--

COMMENT ON TABLE um."Group" IS 'table for users group';


                                            --
                                            -- TOC entry 203 (class 1259 OID 16417)
                                            -- Name: PersonalInfo; Type: TABLE; Schema: um; Owner: postgres
                                            --

                                            CREATE TABLE um."PersonalInfo"
                                            (
                                                "userId" bigint NOT NULL,
                                                "firstName" character varying(50),
                                                "lastName" character varying(100),
                                                "nickName" character varying(100),
                                                birthday timestamp
                                                without time zone,
    gender smallint,
    "birthdayChangeCounter" smallint,
    "nationalCode" character varying
                                                (10),
    "isBirthdayChanged" boolean
);


                                                ALTER TABLE um."PersonalInfo" OWNER TO postgres;

--
-- TOC entry 3256 (class 0 OID 0)
-- Dependencies: 203
-- Name: TABLE "PersonalInfo"; Type: COMMENT; Schema: um; Owner: postgres
--

COMMENT ON TABLE um."PersonalInfo" IS 'User Personal Information';


                                                --
                                                -- TOC entry 220 (class 1259 OID 32836)
                                                -- Name: vwContact; Type: VIEW; Schema: um; Owner: postgres
                                                --

                                                CREATE VIEW um."vwContact" WITH
                                                (security_barrier='false') AS
                                                SELECT ai.id,
                                                    ai.username,
                                                    ai.email,
                                                    ai."mobilePhone",
                                                    addi."specialDate",
                                                    addi."instagramLink",
                                                    addi."telegramLink",
                                                    pi."firstName",
                                                    pi."lastName",
                                                    pi."nickName",
                                                    pi.birthday,
                                                    pi.gender,
                                                    adrsi.latitude,
                                                    adrsi.longitude,
                                                    adrsi.address,
                                                    ci.discount,
                                                    ci.credit,
                                                    ai."formGuid",
                                                    CASE
            WHEN ((now() - (ai."formDate")::timestamp
                                                with time zone) > '1 day'::interval) THEN 0
            ELSE 1
                                                END AS "isFormValid",
    ai.picture
   FROM
                                                ((((um."AccountInfo" ai
     LEFT JOIN um."PersonalInfo" pi ON
                                                ((pi."userId" = ai.id)))
     LEFT JOIN um."AdditionalInfo" addi ON
                                                ((addi."userId" = ai.id)))
     LEFT JOIN um."AddressInfo" adrsi ON
                                                ((adrsi."userId" = ai.id)))
     LEFT JOIN PayanakDB."CreditInfo" ci ON
                                                ((ci."userId" = ai.id)));


                                                ALTER TABLE um."vwContact" OWNER TO postgres;

                                                --
                                                -- TOC entry 229 (class 1259 OID 32896)
                                                -- Name: vwBusinessCard; Type: VIEW; Schema: PayanakDB; Owner: postgres
                                                --

                                                CREATE VIEW PayanakDB."vwBusinessCard" WITH
                                                (security_barrier='false') AS
                                                SELECT bc.id,
                                                    bc."createDate",
                                                    bc."isBlocked",
                                                    bc.status,
                                                    vwc.id AS "userId",
                                                    vwc.username,
                                                    vwc.email,
                                                    vwc."mobilePhone",
                                                    vwc."firstName",
                                                    vwc."lastName",
                                                    vwc."nickName",
                                                    vwc.birthday,
                                                    vwc.gender,
                                                    vwc.discount,
                                                    vwc.credit,
                                                    gp.id AS "groupId",
                                                    gp.name AS "groupName",
                                                    gp.title AS "groupTitle",
                                                    gp.status AS "groupStatus",
                                                    gp.picture AS "groupPicture",
                                                    pt.id AS "templateId",
                                                    pt.name AS "templateName",
                                                    pt.body AS "templateBody",
                                                    ni.id AS "numberId",
                                                    ni.number AS "numberSend",
                                                    ni."isShared" AS "numberIsShared",
                                                    ni."isBlocked" AS "numberIsBlocked",
                                                    ni.owner AS "numberOwner",
                                                    ni.type AS "numberType",
                                                    ni.username AS "numberUsername",
                                                    ni.password AS "numberPassword",
                                                    bc.key,
                                                    vwc."formGuid",
                                                    vwc."isFormValid"
                                                FROM ((((PayanakDB."BusinessCard" bc
                                                    LEFT JOIN um."vwContact" vwc ON ((vwc.id = bc."userId")))
                                                    LEFT JOIN um."Group" gp ON ((gp.id = bc."groupId")))
                                                    LEFT JOIN PayanakDB."PersonalTemplate" pt ON ((pt.id = bc."templateId")))
                                                    LEFT JOIN PayanakDB."NumberInfo" ni ON ((ni.id = bc."numberId")));


                                                ALTER TABLE PayanakDB."vwBusinessCard" OWNER TO postgres;

--
-- TOC entry 3257 (class 0 OID 0)
-- Dependencies: 229
-- Name: VIEW "vwBusinessCard"; Type: COMMENT; Schema: PayanakDB; Owner: postgres
--

COMMENT ON VIEW PayanakDB."vwBusinessCard" IS 'اطلاعات کامل کارت ویزیت';


                                                --
                                                -- TOC entry 225 (class 1259 OID 32882)
                                                -- Name: vwNumber; Type: VIEW; Schema: PayanakDB; Owner: postgres
                                                --

                                                CREATE VIEW PayanakDB."vwNumber" WITH
                                                (security_barrier='false') AS
                                                SELECT ni.id,
                                                    ni.number,
                                                    ni."isShared",
                                                    ni."isBlocked",
                                                    ni.owner,
                                                    ni.type,
                                                    ni.username,
                                                    ni.password,
                                                    ni."createDate",
                                                    vwc.username AS "ownerUsername",
                                                    vwc.email,
                                                    vwc."mobilePhone",
                                                    vwc."firstName",
                                                    vwc."lastName",
                                                    vwc.gender,
                                                    vwc.address,
                                                    vwc."formGuid",
                                                    vwc."isFormValid"
                                                FROM (PayanakDB."NumberInfo" ni
                                                    LEFT JOIN um."vwContact" vwc ON ((vwc.id = ni.owner)));


                                                ALTER TABLE PayanakDB."vwNumber" OWNER TO postgres;

--
-- TOC entry 3258 (class 0 OID 0)
-- Dependencies: 225
-- Name: VIEW "vwNumber"; Type: COMMENT; Schema: PayanakDB; Owner: postgres
--

COMMENT ON VIEW PayanakDB."vwNumber" IS 'اطلاعات شماره به همراه مالک';


                                                --
                                                -- TOC entry 232 (class 1259 OID 32923)
                                                -- Name: vwPanel; Type: VIEW; Schema: PayanakDB; Owner: postgres
                                                --

                                                CREATE VIEW PayanakDB."vwPanel"
                                                AS
                                                    SELECT pi.id,
                                                        pi."createDate",
                                                        pi."lastActivity",
                                                        pi.version,
                                                        pi.number,
                                                        pi.serial,
                                                        pi.name,
                                                        vwc.id AS "userId",
                                                        vwc.username,
                                                        vwc.email,
                                                        vwc."mobilePhone",
                                                        vwc."firstName",
                                                        vwc."lastName",
                                                        vwc.gender,
                                                        vwc.birthday,
                                                        vwc.longitude,
                                                        vwc.latitude,
                                                        umg.name AS "groupName",
                                                        umg.title AS "groupTitle",
                                                        umg.descriptions AS "groupDescription",
                                                        umg.id AS "groupId",
                                                        umg.picture AS "groupPicture",
                                                        pi."hashId",
                                                        pi."isBlocked",
                                                        pi.status,
                                                        pi."templateId",
                                                        pt.name AS "templateName",
                                                        pt.body AS "templateBody",
                                                        pi."numberId",
                                                        ni.number AS "sendNumber",
                                                        ni."isShared" AS "sendIsShared",
                                                        ni."isBlocked" AS "sendIsBlocked",
                                                        ni.type AS "sendType",
                                                        ni.username AS "sendUsername",
                                                        ni.password AS "sendPassword",
                                                        vwc."formGuid",
                                                        vwc."isFormValid"
                                                    FROM ((((PayanakDB."PanelInfo" pi
                                                        LEFT JOIN um."vwContact" vwc ON ((pi."userId" = vwc.id)))
                                                        LEFT JOIN um."Group" umg ON ((pi."groupId" = umg.id)))
                                                        LEFT JOIN PayanakDB."PersonalTemplate" pt ON ((pt.id = pi."templateId")))
                                                        LEFT JOIN PayanakDB."NumberInfo" ni ON ((ni.id = pi."numberId")));


                                                ALTER TABLE PayanakDB."vwPanel" OWNER TO postgres;

--
-- TOC entry 3259 (class 0 OID 0)
-- Dependencies: 232
-- Name: VIEW "vwPanel"; Type: COMMENT; Schema: PayanakDB; Owner: postgres
--

COMMENT ON VIEW PayanakDB."vwPanel" IS 'اطلاعات کامل پنل ها';


                                                --
                                                -- TOC entry 245 (class 1259 OID 32991)
                                                -- Name: vwSchedulePayanakDB; Type: VIEW; Schema: PayanakDB; Owner: postgres
                                                --

                                                CREATE VIEW PayanakDB."vwSchedulePayanakDB" WITH
                                                (security_barrier='false') AS
                                                SELECT ssd.id,
                                                    ssd."parentId",
                                                    ssd."userId",
                                                    ssd.date,
                                                    ssd."updatedDate",
                                                    ssd.counter,
                                                    ssi.name AS "parentName",
                                                    ssi.code AS "parentCode",
                                                    ssi."addedYear",
                                                    ssi."addedMonth",
                                                    ssi."addedDay",
                                                    vwc.username AS "ownerUsername",
                                                    vwc.email AS "ownerEmail",
                                                    vwc."mobilePhone" AS "ownerMobilePhone",
                                                    vwc."firstName" AS "ownerFirstName",
                                                    vwc."lastName" AS "ownerLastName",
                                                    vwc.gender AS "ownerGender",
                                                    vwc2.username,
                                                    vwc2.email,
                                                    vwc2."mobilePhone",
                                                    vwc2."firstName",
                                                    vwc2."lastName",
                                                    vwc2."nickName",
                                                    vwc2.birthday,
                                                    vwc2."specialDate",
                                                    vwc2.gender,
                                                    vwc2.discount,
                                                    vwc2.credit,
                                                    vwc.id AS "ownerId",
                                                    ssi."templateId",
                                                    ssi."numberId",
                                                    ni.number AS "sendNumber",
                                                    ni."isShared" AS "sendIsShared",
                                                    ni."isBlocked" AS "sendIsBlocked",
                                                    ni.type AS "sendType",
                                                    ni.username AS "sendUsername",
                                                    ni.password AS "sendPassword"
                                                FROM ((((PayanakDB."SchedulePayanakDBDetail" ssd
                                                    LEFT JOIN PayanakDB."SchedulePayanakDBInfo" ssi ON ((ssd."parentId" = ssi.id)))
                                                    LEFT JOIN um."vwContact" vwc ON ((vwc.id = ssi."userId")))
                                                    LEFT JOIN um."vwContact" vwc2 ON ((vwc2.id = ssd."userId")))
                                                    LEFT JOIN PayanakDB."NumberInfo" ni ON ((ni.id = ssi."numberId")));


                                                ALTER TABLE PayanakDB."vwSchedulePayanakDB" OWNER TO postgres;

--
-- TOC entry 3260 (class 0 OID 0)
-- Dependencies: 245
-- Name: VIEW "vwSchedulePayanakDB"; Type: COMMENT; Schema: PayanakDB; Owner: postgres
--

COMMENT ON VIEW PayanakDB."vwSchedulePayanakDB" IS 'اطلاعات کامل ارسال زماندار';


                                                --
                                                -- TOC entry 246 (class 1259 OID 32996)
                                                -- Name: vwSchedulePayanakDBInfo; Type: VIEW; Schema: PayanakDB; Owner: postgres
                                                --

                                                CREATE VIEW PayanakDB."vwSchedulePayanakDBInfo" WITH
                                                (security_barrier='false') AS
                                                SELECT ssi.name AS "Name",
                                                    ssi.code AS "Code",
                                                    ssi."addedYear",
                                                    ssi."addedMonth",
                                                    ssi."addedDay",
                                                    vwc.username AS "ownerUsername",
                                                    vwc.email AS "ownerEmail",
                                                    vwc."mobilePhone" AS "ownerMobilePhone",
                                                    vwc."firstName" AS "ownerFirstName",
                                                    vwc."lastName" AS "ownerLastName",
                                                    vwc.discount,
                                                    vwc.credit,
                                                    ssi.id,
                                                    ssi."userId",
                                                    vwc.gender AS "ownerGender",
                                                    ssi.status,
                                                    ssi."templateId",
                                                    pt.name AS "templateName",
                                                    pt.body AS "templateBody",
                                                    ssi."numberId",
                                                    ni.number AS "sendNumber",
                                                    ni."isShared" AS "sendIsShared",
                                                    ni."isBlocked" AS "sendIsBlocked",
                                                    ni.type AS "sendType",
                                                    ni.username AS "sendUsername",
                                                    ni.password AS "sendPassword"
                                                FROM (((PayanakDB."SchedulePayanakDBInfo" ssi
                                                    LEFT JOIN um."vwContact" vwc ON ((vwc.id = ssi."userId")))
                                                    LEFT JOIN PayanakDB."PersonalTemplate" pt ON ((pt.id = ssi."templateId")))
                                                    LEFT JOIN PayanakDB."NumberInfo" ni ON ((ni.id = ssi."numberId")));


                                                ALTER TABLE PayanakDB."vwSchedulePayanakDBInfo" OWNER TO postgres;

                                                --
                                                -- TOC entry 250 (class 1259 OID 33042)
                                                -- Name: vwTask; Type: VIEW; Schema: PayanakDB; Owner: postgres
                                                --

                                                CREATE VIEW PayanakDB."vwTask"
                                                AS
                                                    SELECT ti.id,
                                                        ti."userId",
                                                        ti.percent,
                                                        ti.message,
                                                        ti.status,
                                                        ti.header,
                                                        vwc.username,
                                                        vwc.email,
                                                        vwc."mobilePhone",
                                                        vwc."firstName",
                                                        vwc."lastName",
                                                        vwc.gender,
                                                        vwc.birthday,
                                                        vwc.longitude,
                                                        vwc.latitude
                                                    FROM (PayanakDB."TaskInfo" ti
                                                        LEFT JOIN um."vwContact" vwc ON ((ti."userId" = vwc.id)));


                                                ALTER TABLE PayanakDB."vwTask" OWNER TO postgres;

                                                --
                                                -- TOC entry 198 (class 1259 OID 16386)
                                                -- Name: AccountInfo_id_seq; Type: SEQUENCE; Schema: um; Owner: postgres
                                                --

                                                ALTER TABLE um."AccountInfo" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
                                                (
    SEQUENCE NAME um."AccountInfo_id_seq"
    START
                                                WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


                                                --
                                                -- TOC entry 202 (class 1259 OID 16412)
                                                -- Name: DeviceInfo; Type: TABLE; Schema: um; Owner: postgres
                                                --

                                                CREATE TABLE um."DeviceInfo"
                                                (
                                                    "userId" bigint NOT NULL,
                                                    os character varying(50),
                                                    platform character varying(50),
                                                    browser character varying(50),
                                                    "lastActivity" timestamp
                                                    without time zone,
    "ipAddress" character varying
                                                    (50)
);


                                                    ALTER TABLE um."DeviceInfo" OWNER TO postgres;

--
-- TOC entry 3261 (class 0 OID 0)
-- Dependencies: 202
-- Name: TABLE "DeviceInfo"; Type: COMMENT; Schema: um; Owner: postgres
--

COMMENT ON TABLE um."DeviceInfo" IS 'User Device Info';


                                                    --
                                                    -- TOC entry 211 (class 1259 OID 24604)
                                                    -- Name: Group_id_seq; Type: SEQUENCE; Schema: um; Owner: postgres
                                                    --

                                                    ALTER TABLE um."Group" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
                                                    (
    SEQUENCE NAME um."Group_id_seq"
    START
                                                    WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


                                                    --
                                                    -- TOC entry 206 (class 1259 OID 16432)
                                                    -- Name: Permissions; Type: TABLE; Schema: um; Owner: postgres
                                                    --

                                                    CREATE TABLE um."Permissions"
                                                    (
                                                        id bigint NOT NULL,
                                                        name character varying(100),
                                                        title character varying(100),
                                                        level smallint,
                                                        parent bigint
                                                    );


                                                    ALTER TABLE um."Permissions" OWNER TO postgres;

--
-- TOC entry 3262 (class 0 OID 0)
-- Dependencies: 206
-- Name: TABLE "Permissions"; Type: COMMENT; Schema: um; Owner: postgres
--

COMMENT ON TABLE um."Permissions" IS 'Site Permissions';


                                                    --
                                                    -- TOC entry 226 (class 1259 OID 32887)
                                                    -- Name: Permissions_id_seq; Type: SEQUENCE; Schema: um; Owner: postgres
                                                    --

                                                    ALTER TABLE um."Permissions" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
                                                    (
    SEQUENCE NAME um."Permissions_id_seq"
    START
                                                    WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


                                                    --
                                                    -- TOC entry 208 (class 1259 OID 16442)
                                                    -- Name: RolePermissions; Type: TABLE; Schema: um; Owner: postgres
                                                    --

                                                    CREATE TABLE um."RolePermissions"
                                                    (
                                                        "roleId" bigint NOT NULL,
                                                        "permissionId" bigint NOT NULL
                                                    );


                                                    ALTER TABLE um."RolePermissions" OWNER TO postgres;

--
-- TOC entry 3263 (class 0 OID 0)
-- Dependencies: 208
-- Name: TABLE "RolePermissions"; Type: COMMENT; Schema: um; Owner: postgres
--

COMMENT ON TABLE um."RolePermissions" IS 'Role Permissions';


                                                    --
                                                    -- TOC entry 205 (class 1259 OID 16424)
                                                    -- Name: Roles; Type: TABLE; Schema: um; Owner: postgres
                                                    --

                                                    CREATE TABLE um."Roles"
                                                    (
                                                        id bigint NOT NULL,
                                                        name character varying(500),
                                                        title character varying(500),
                                                        "canEdit" boolean,
                                                        "canDelete" boolean
                                                    );


                                                    ALTER TABLE um."Roles" OWNER TO postgres;

--
-- TOC entry 3264 (class 0 OID 0)
-- Dependencies: 205
-- Name: TABLE "Roles"; Type: COMMENT; Schema: um; Owner: postgres
--

COMMENT ON TABLE um."Roles" IS 'Site Roles';


                                                    --
                                                    -- TOC entry 204 (class 1259 OID 16422)
                                                    -- Name: Roles_id_seq; Type: SEQUENCE; Schema: um; Owner: postgres
                                                    --

                                                    ALTER TABLE um."Roles" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
                                                    (
    SEQUENCE NAME um."Roles_id_seq"
    START
                                                    WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


                                                    --
                                                    -- TOC entry 236 (class 1259 OID 32945)
                                                    -- Name: Ticket; Type: TABLE; Schema: um; Owner: postgres
                                                    --

                                                    CREATE TABLE um."Ticket"
                                                    (
                                                        id bigint NOT NULL,
                                                        "createDate" timestamp
                                                        without time zone NOT NULL,
    "userId" bigint NOT NULL,
    responder bigint,
    status smallint DEFAULT 0 NOT NULL,
    header character varying
                                                        (500)
);


                                                        ALTER TABLE um."Ticket" OWNER TO postgres;

--
-- TOC entry 3265 (class 0 OID 0)
-- Dependencies: 236
-- Name: TABLE "Ticket"; Type: COMMENT; Schema: um; Owner: postgres
--

COMMENT ON TABLE um."Ticket" IS 'لیست تیکت های ساخته شده';


                                                        --
                                                        -- TOC entry 238 (class 1259 OID 32953)
                                                        -- Name: TicketDetail; Type: TABLE; Schema: um; Owner: postgres
                                                        --

                                                        CREATE TABLE um."TicketDetail"
                                                        (
                                                            id bigint NOT NULL,
                                                            "senderId" bigint NOT NULL,
                                                            "ticketId" bigint NOT NULL,
                                                            body text NOT NULL,
                                                            "sendDate" timestamp
                                                            without time zone NOT NULL,
    status smallint DEFAULT 0 NOT NULL
);


                                                            ALTER TABLE um."TicketDetail" OWNER TO postgres;

--
-- TOC entry 3266 (class 0 OID 0)
-- Dependencies: 238
-- Name: TABLE "TicketDetail"; Type: COMMENT; Schema: um; Owner: postgres
--

COMMENT ON TABLE um."TicketDetail" IS 'پیام های ارسال شده در تیکت';


                                                            --
                                                            -- TOC entry 237 (class 1259 OID 32951)
                                                            -- Name: TicketDetail_id_seq; Type: SEQUENCE; Schema: um; Owner: postgres
                                                            --

                                                            ALTER TABLE um."TicketDetail" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
                                                            (
    SEQUENCE NAME um."TicketDetail_id_seq"
    START
                                                            WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


                                                            --
                                                            -- TOC entry 235 (class 1259 OID 32943)
                                                            -- Name: Ticket_id_seq; Type: SEQUENCE; Schema: um; Owner: postgres
                                                            --

                                                            ALTER TABLE um."Ticket" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
                                                            (
    SEQUENCE NAME um."Ticket_id_seq"
    START
                                                            WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


                                                            --
                                                            -- TOC entry 210 (class 1259 OID 24589)
                                                            -- Name: UserGroups; Type: TABLE; Schema: um; Owner: postgres
                                                            --

                                                            CREATE TABLE um."UserGroups"
                                                            (
                                                                "userId" bigint NOT NULL,
                                                                "groupId" bigint NOT NULL,
                                                                "CreateDate" timestamp
                                                                without time zone NOT NULL
);


                                                                ALTER TABLE um."UserGroups" OWNER TO postgres;

--
-- TOC entry 3267 (class 0 OID 0)
-- Dependencies: 210
-- Name: TABLE "UserGroups"; Type: COMMENT; Schema: um; Owner: postgres
--

COMMENT ON TABLE um."UserGroups" IS 'Assigned groups to user';


                                                                --
                                                                -- TOC entry 207 (class 1259 OID 16437)
                                                                -- Name: UserRoles; Type: TABLE; Schema: um; Owner: postgres
                                                                --

                                                                CREATE TABLE um."UserRoles"
                                                                (
                                                                    "userId" bigint NOT NULL,
                                                                    "roleId" bigint NOT NULL
                                                                );


                                                                ALTER TABLE um."UserRoles" OWNER TO postgres;

--
-- TOC entry 3268 (class 0 OID 0)
-- Dependencies: 207
-- Name: TABLE "UserRoles"; Type: COMMENT; Schema: um; Owner: postgres
--

COMMENT ON TABLE um."UserRoles" IS 'User Roles';


                                                                --
                                                                -- TOC entry 212 (class 1259 OID 32773)
                                                                -- Name: vwContactGroups; Type: VIEW; Schema: um; Owner: postgres
                                                                --

                                                                CREATE VIEW um."vwContactGroups" WITH
                                                                (security_barrier='false') AS
                                                                SELECT ai.id,
                                                                    ai.username,
                                                                    ai.email,
                                                                    ai."mobilePhone",
                                                                    addi."specialDate",
                                                                    addi."instagramLink",
                                                                    addi."telegramLink",
                                                                    pi."firstName",
                                                                    pi."lastName",
                                                                    pi."nickName",
                                                                    pi.birthday,
                                                                    pi.gender,
                                                                    adrsi.latitude,
                                                                    adrsi.longitude,
                                                                    adrsi.address,
                                                                    gg.name,
                                                                    gg.title,
                                                                    gg.descriptions,
                                                                    gg.owner,
                                                                    gg.status,
                                                                    gg.id AS "groupId",
                                                                    ai."formGuid",
                                                                    CASE
            WHEN ((now() - (ai."formDate")::timestamp
                                                                with time zone) > '1 day'::interval) THEN 0
            ELSE 1
                                                                END AS "isFormValid"
   FROM
                                                                (((((um."UserGroups" ug
     LEFT JOIN um."AccountInfo" ai ON
                                                                ((ug."userId" = ai.id)))
     LEFT JOIN um."PersonalInfo" pi ON
                                                                ((pi."userId" = ai.id)))
     LEFT JOIN um."AdditionalInfo" addi ON
                                                                ((addi."userId" = ai.id)))
     LEFT JOIN um."AddressInfo" adrsi ON
                                                                ((adrsi."userId" = ai.id)))
     LEFT JOIN um."Group" gg ON
                                                                ((gg.id = ug."groupId")));


                                                                ALTER TABLE um."vwContactGroups" OWNER TO postgres;

                                                                --
                                                                -- TOC entry 240 (class 1259 OID 32968)
                                                                -- Name: vwTicket; Type: VIEW; Schema: um; Owner: postgres
                                                                --

                                                                CREATE VIEW um."vwTicket" WITH
                                                                (security_barrier='false') AS
                                                                SELECT tik.id,
                                                                    tik.responder,
                                                                    tik."userId",
                                                                    tik."createDate",
                                                                    tik.status,
                                                                    vwc.username AS "responderUsername",
                                                                    vwc.email AS "responderEmail",
                                                                    vwc."mobilePhone" AS "responderMobilePhone",
                                                                    vwc."firstName" AS "responderFirstName",
                                                                    vwc."lastName" AS "responderLastName",
                                                                    vwc.gender AS "responderGender",
                                                                    vwc.picture AS "responderPicture",
                                                                    vwc2.username AS "ownerUsername",
                                                                    vwc2.email AS "ownerEmail",
                                                                    vwc2."mobilePhone" AS "ownerMobilePhone",
                                                                    vwc2."firstName" AS "ownerFirstName",
                                                                    vwc2."lastName" AS "ownerLastName",
                                                                    vwc2.gender AS "ownerGender",
                                                                    vwc2.picture AS "ownerPicture",
                                                                    tik.header
                                                                FROM ((um."Ticket" tik
                                                                    LEFT JOIN um."vwContact" vwc ON ((vwc.id = tik.responder)))
                                                                    LEFT JOIN um."vwContact" vwc2 ON ((vwc2.id = tik."userId")));


                                                                ALTER TABLE um."vwTicket" OWNER TO postgres;

--
-- TOC entry 3269 (class 0 OID 0)
-- Dependencies: 240
-- Name: VIEW "vwTicket"; Type: COMMENT; Schema: um; Owner: postgres
--

COMMENT ON VIEW um."vwTicket" IS 'اطلاعات کامل تیکت';


                                                                --
                                                                -- TOC entry 239 (class 1259 OID 32962)
                                                                -- Name: vwTicketDetail; Type: VIEW; Schema: um; Owner: postgres
                                                                --

                                                                CREATE VIEW um."vwTicketDetail" WITH
                                                                (security_barrier='false') AS
                                                                SELECT td.id,
                                                                    td."senderId",
                                                                    td."ticketId",
                                                                    td.body,
                                                                    td."sendDate",
                                                                    td.status,
                                                                    vwc.username AS "senderUsername",
                                                                    vwc.email AS "senderEmail",
                                                                    vwc."mobilePhone" AS "senderMobilePhone",
                                                                    vwc."firstName" AS "senderFirstName",
                                                                    vwc."lastName" AS "senderLastName",
                                                                    vwc.gender AS "senderGender",
                                                                    tik."userId",
                                                                    tik.status AS "ticketStatus",
                                                                    vwc2.username AS "ownerUsername",
                                                                    vwc2.email AS "ownerEmail",
                                                                    vwc2."mobilePhone" AS "ownerMobilePhone",
                                                                    vwc2."firstName" AS "ownerFirstName",
                                                                    vwc2."lastName" AS "ownerLastName",
                                                                    vwc2.gender AS "ownerGender",
                                                                    vwc.picture AS "ownerPicture",
                                                                    tik.header,
                                                                    vwc2.picture AS "senderPicture"
                                                                FROM (((um."TicketDetail" td
                                                                    LEFT JOIN um."vwContact" vwc ON ((vwc.id = td."senderId")))
                                                                    LEFT JOIN um."Ticket" tik ON ((tik.id = td."ticketId")))
                                                                    LEFT JOIN um."vwContact" vwc2 ON ((vwc2.id = tik."userId")));


                                                                ALTER TABLE um."vwTicketDetail" OWNER TO postgres;

--
-- TOC entry 3270 (class 0 OID 0)
-- Dependencies: 239
-- Name: VIEW "vwTicketDetail"; Type: COMMENT; Schema: um; Owner: postgres
--

COMMENT ON VIEW um."vwTicketDetail" IS 'اطلاعات کامل پیام تیکت';


                                                                --
                                                                -- TOC entry 247 (class 1259 OID 33026)
                                                                -- Name: vwTicketLastMessage; Type: VIEW; Schema: um; Owner: postgres
                                                                --

                                                                CREATE VIEW um."vwTicketLastMessage" WITH
                                                                (security_barrier='false') AS
                                                                SELECT tid.id,
                                                                    tid."senderId",
                                                                    tik.id AS "ticketId",
                                                                    tid.body,
                                                                    tid."sendDate",
                                                                    tid.status AS "messageStatus",
                                                                    tik."createDate",
                                                                    tik."userId",
                                                                    tik.responder,
                                                                    tik.status,
                                                                    tik.header,
                                                                    vwc2.username AS "ownerUsername",
                                                                    vwc2.email AS "ownerEmail",
                                                                    vwc2."mobilePhone" AS "ownerMobilePhone",
                                                                    vwc2."firstName" AS "ownerFirstName",
                                                                    vwc2."lastName" AS "ownerLastName",
                                                                    vwc2.gender AS "ownerGender",
                                                                    vwc2.picture AS "ownerPicture",
                                                                    vwc.username AS "responderUsername",
                                                                    vwc.email AS "responderEmail",
                                                                    vwc."mobilePhone" AS "responderMobilePhone",
                                                                    vwc."firstName" AS "responderFirstName",
                                                                    vwc."lastName" AS "responderLastName",
                                                                    vwc.gender AS "responderGender",
                                                                    vwc.picture AS "responderPicture",
                                                                    sumstatus.sumstat AS unread
                                                                FROM (((((um."Ticket" tik
                                                                    LEFT JOIN ( SELECT max("TicketDetail".id) AS maxid,
                                                                        "TicketDetail"."ticketId" AS "tmpId"
                                                                    FROM um."TicketDetail"
                                                                    GROUP BY "TicketDetail"."ticketId") maxtable ON ((maxtable."tmpId" = tik.id)))
                                                                    LEFT JOIN ( SELECT count("TicketDetail".id) AS sumstat,
                                                                        "TicketDetail"."ticketId" AS "tmpId2"
                                                                    FROM um."TicketDetail"
                                                                    WHERE ("TicketDetail".status = 1)
                                                                    GROUP BY "TicketDetail"."ticketId") sumstatus ON ((maxtable."tmpId" = sumstatus."tmpId2")))
                                                                    LEFT JOIN um."TicketDetail" tid ON ((maxtable.maxid = tid.id)))
                                                                    LEFT JOIN um."vwContact" vwc2 ON ((vwc2.id = tik."userId")))
                                                                    LEFT JOIN um."vwContact" vwc ON ((vwc.id = tik.responder)));


                                                                ALTER TABLE um."vwTicketLastMessage" OWNER TO postgres;


                                                                --
                                                                -- TOC entry 3271 (class 0 OID 0)
                                                                -- Dependencies: 227
                                                                -- Name: BusinessCard_id_seq; Type: SEQUENCE SET; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                SELECT pg_catalog.setval('PayanakDB."BusinessCard_id_seq"', 4, true);


                                                                --
                                                                -- TOC entry 3272 (class 0 OID 0)
                                                                -- Dependencies: 216
                                                                -- Name: NumberInfo_id_seq; Type: SEQUENCE SET; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                SELECT pg_catalog.setval('PayanakDB."NumberInfo_id_seq"', 9, true);


                                                                --
                                                                -- TOC entry 3273 (class 0 OID 0)
                                                                -- Dependencies: 223
                                                                -- Name: PanelInfo_id_seq; Type: SEQUENCE SET; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                SELECT pg_catalog.setval('PayanakDB."PanelInfo_id_seq"', 10, true);


                                                                --
                                                                -- TOC entry 3274 (class 0 OID 0)
                                                                -- Dependencies: 233
                                                                -- Name: PanelVersionInfo_id_seq; Type: SEQUENCE SET; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                SELECT pg_catalog.setval('PayanakDB."PanelVersionInfo_id_seq"', 3, true);


                                                                --
                                                                -- TOC entry 3275 (class 0 OID 0)
                                                                -- Dependencies: 221
                                                                -- Name: PersonalTemplate_id_seq; Type: SEQUENCE SET; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                SELECT pg_catalog.setval('PayanakDB."PersonalTemplate_id_seq"', 9, true);


                                                                --
                                                                -- TOC entry 3276 (class 0 OID 0)
                                                                -- Dependencies: 230
                                                                -- Name: ReciveInfo_id_seq; Type: SEQUENCE SET; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                SELECT pg_catalog.setval('PayanakDB."ReciveInfo_id_seq"', 68, true);


                                                                --
                                                                -- TOC entry 3277 (class 0 OID 0)
                                                                -- Dependencies: 243
                                                                -- Name: SchedulePayanakDBDetail_id_seq; Type: SEQUENCE SET; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                SELECT pg_catalog.setval('PayanakDB."SchedulePayanakDBDetail_id_seq"', 4, true);


                                                                --
                                                                -- TOC entry 3278 (class 0 OID 0)
                                                                -- Dependencies: 241
                                                                -- Name: SchedulePayanakDBInfo_id_seq; Type: SEQUENCE SET; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                SELECT pg_catalog.setval('PayanakDB."SchedulePayanakDBInfo_id_seq"', 4, true);


                                                                --
                                                                -- TOC entry 3279 (class 0 OID 0)
                                                                -- Dependencies: 218
                                                                -- Name: SentInfo_id_seq; Type: SEQUENCE SET; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                SELECT pg_catalog.setval('PayanakDB."SentInfo_id_seq"', 59, true);


                                                                --
                                                                -- TOC entry 3280 (class 0 OID 0)
                                                                -- Dependencies: 215
                                                                -- Name: Settings_id_seq; Type: SEQUENCE SET; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                SELECT pg_catalog.setval('PayanakDB."Settings_id_seq"', 1, true);


                                                                --
                                                                -- TOC entry 3281 (class 0 OID 0)
                                                                -- Dependencies: 248
                                                                -- Name: TaskInfo_id_seq; Type: SEQUENCE SET; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                SELECT pg_catalog.setval('PayanakDB."TaskInfo_id_seq"', 30, true);


                                                                --
                                                                -- TOC entry 3282 (class 0 OID 0)
                                                                -- Dependencies: 198
                                                                -- Name: AccountInfo_id_seq; Type: SEQUENCE SET; Schema: um; Owner: postgres
                                                                --

                                                                SELECT pg_catalog.setval('um."AccountInfo_id_seq"', 17, true);


                                                                --
                                                                -- TOC entry 3283 (class 0 OID 0)
                                                                -- Dependencies: 211
                                                                -- Name: Group_id_seq; Type: SEQUENCE SET; Schema: um; Owner: postgres
                                                                --

                                                                SELECT pg_catalog.setval('um."Group_id_seq"', 18, true);


                                                                --
                                                                -- TOC entry 3284 (class 0 OID 0)
                                                                -- Dependencies: 226
                                                                -- Name: Permissions_id_seq; Type: SEQUENCE SET; Schema: um; Owner: postgres
                                                                --

                                                                SELECT pg_catalog.setval('um."Permissions_id_seq"', 11, true);


                                                                --
                                                                -- TOC entry 3285 (class 0 OID 0)
                                                                -- Dependencies: 204
                                                                -- Name: Roles_id_seq; Type: SEQUENCE SET; Schema: um; Owner: postgres
                                                                --

                                                                SELECT pg_catalog.setval('um."Roles_id_seq"', 5, true);


                                                                --
                                                                -- TOC entry 3286 (class 0 OID 0)
                                                                -- Dependencies: 237
                                                                -- Name: TicketDetail_id_seq; Type: SEQUENCE SET; Schema: um; Owner: postgres
                                                                --

                                                                SELECT pg_catalog.setval('um."TicketDetail_id_seq"', 44, true);


                                                                --
                                                                -- TOC entry 3287 (class 0 OID 0)
                                                                -- Dependencies: 235
                                                                -- Name: Ticket_id_seq; Type: SEQUENCE SET; Schema: um; Owner: postgres
                                                                --

                                                                SELECT pg_catalog.setval('um."Ticket_id_seq"', 9, true);


                                                                --
                                                                -- TOC entry 3033 (class 2606 OID 32895)
                                                                -- Name: BusinessCard BusinessCard_pkey; Type: CONSTRAINT; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY PayanakDB."BusinessCard"
                                                                ADD CONSTRAINT "BusinessCard_pkey" PRIMARY KEY
                                                                (id);


                                                                --
                                                                -- TOC entry 3021 (class 2606 OID 32786)
                                                                -- Name: CreditInfo CreditInfo_pkey; Type: CONSTRAINT; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY PayanakDB."CreditInfo"
                                                                ADD CONSTRAINT "CreditInfo_pkey" PRIMARY KEY
                                                                ("userId");


                                                                --
                                                                -- TOC entry 3025 (class 2606 OID 32807)
                                                                -- Name: NumberInfo NumberInfo_pkey; Type: CONSTRAINT; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY PayanakDB."NumberInfo"
                                                                ADD CONSTRAINT "NumberInfo_pkey" PRIMARY KEY
                                                                (id);


                                                                --
                                                                -- TOC entry 3031 (class 2606 OID 32865)
                                                                -- Name: PanelInfo PanelInfo_pkey; Type: CONSTRAINT; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY PayanakDB."PanelInfo"
                                                                ADD CONSTRAINT "PanelInfo_pkey" PRIMARY KEY
                                                                (id);


                                                                --
                                                                -- TOC entry 3037 (class 2606 OID 32942)
                                                                -- Name: PanelVersionInfo PanelVersionInfo_pkey; Type: CONSTRAINT; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY PayanakDB."PanelVersionInfo"
                                                                ADD CONSTRAINT "PanelVersionInfo_pkey" PRIMARY KEY
                                                                (id);


                                                                --
                                                                -- TOC entry 3029 (class 2606 OID 32850)
                                                                -- Name: PersonalTemplate PersonalTemplate_pkey; Type: CONSTRAINT; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY PayanakDB."PersonalTemplate"
                                                                ADD CONSTRAINT "PersonalTemplate_pkey" PRIMARY KEY
                                                                (id);


                                                                --
                                                                -- TOC entry 3035 (class 2606 OID 32914)
                                                                -- Name: ReceiveInfo ReciveInfo_pkey; Type: CONSTRAINT; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY PayanakDB."ReceiveInfo"
                                                                ADD CONSTRAINT "ReciveInfo_pkey" PRIMARY KEY
                                                                (id);


                                                                --
                                                                -- TOC entry 3045 (class 2606 OID 32990)
                                                                -- Name: SchedulePayanakDBDetail SchedulePayanakDBDetail_pkey; Type: CONSTRAINT; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY PayanakDB."SchedulePayanakDBDetail"
                                                                ADD CONSTRAINT "SchedulePayanakDBDetail_pkey" PRIMARY KEY
                                                                (id);


                                                                --
                                                                -- TOC entry 3043 (class 2606 OID 32983)
                                                                -- Name: SchedulePayanakDBInfo SchedulePayanakDBInfo_pkey; Type: CONSTRAINT; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY PayanakDB."SchedulePayanakDBInfo"
                                                                ADD CONSTRAINT "SchedulePayanakDBInfo_pkey" PRIMARY KEY
                                                                (id);


                                                                --
                                                                -- TOC entry 3027 (class 2606 OID 32824)
                                                                -- Name: SentInfo SentInfo_pkey; Type: CONSTRAINT; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY PayanakDB."SentInfo"
                                                                ADD CONSTRAINT "SentInfo_pkey" PRIMARY KEY
                                                                (id);


                                                                --
                                                                -- TOC entry 3023 (class 2606 OID 32797)
                                                                -- Name: Settings Settings_pkey; Type: CONSTRAINT; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY PayanakDB."Settings"
                                                                ADD CONSTRAINT "Settings_pkey" PRIMARY KEY
                                                                (id);


                                                                --
                                                                -- TOC entry 3047 (class 2606 OID 33041)
                                                                -- Name: TaskInfo TaskInfo_pkey; Type: CONSTRAINT; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY PayanakDB."TaskInfo"
                                                                ADD CONSTRAINT "TaskInfo_pkey" PRIMARY KEY
                                                                (id);


                                                                --
                                                                -- TOC entry 2999 (class 2606 OID 16395)
                                                                -- Name: AccountInfo AccountInfo_pkey; Type: CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."AccountInfo"
                                                                ADD CONSTRAINT "AccountInfo_pkey" PRIMARY KEY
                                                                (id);


                                                                --
                                                                -- TOC entry 3001 (class 2606 OID 16403)
                                                                -- Name: AdditionalInfo AdditionalInfo_pkey; Type: CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."AdditionalInfo"
                                                                ADD CONSTRAINT "AdditionalInfo_pkey" PRIMARY KEY
                                                                ("userId");


                                                                --
                                                                -- TOC entry 3003 (class 2606 OID 16411)
                                                                -- Name: AddressInfo AddressInfo_pkey; Type: CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."AddressInfo"
                                                                ADD CONSTRAINT "AddressInfo_pkey" PRIMARY KEY
                                                                ("userId");


                                                                --
                                                                -- TOC entry 3005 (class 2606 OID 16416)
                                                                -- Name: DeviceInfo DeviceInfo_pkey; Type: CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."DeviceInfo"
                                                                ADD CONSTRAINT "DeviceInfo_pkey" PRIMARY KEY
                                                                ("userId");


                                                                --
                                                                -- TOC entry 3017 (class 2606 OID 24583)
                                                                -- Name: Group Group_pkey; Type: CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."Group"
                                                                ADD CONSTRAINT "Group_pkey" PRIMARY KEY
                                                                (id);


                                                                --
                                                                -- TOC entry 3011 (class 2606 OID 16436)
                                                                -- Name: Permissions Permissions_pkey; Type: CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."Permissions"
                                                                ADD CONSTRAINT "Permissions_pkey" PRIMARY KEY
                                                                (id);


                                                                --
                                                                -- TOC entry 3007 (class 2606 OID 16421)
                                                                -- Name: PersonalInfo PersonalInfo_pkey; Type: CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."PersonalInfo"
                                                                ADD CONSTRAINT "PersonalInfo_pkey" PRIMARY KEY
                                                                ("userId");


                                                                --
                                                                -- TOC entry 3015 (class 2606 OID 16446)
                                                                -- Name: RolePermissions RolePermissions_pkey; Type: CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."RolePermissions"
                                                                ADD CONSTRAINT "RolePermissions_pkey" PRIMARY KEY
                                                                ("roleId", "permissionId");


                                                                --
                                                                -- TOC entry 3009 (class 2606 OID 16431)
                                                                -- Name: Roles Roles_pkey; Type: CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."Roles"
                                                                ADD CONSTRAINT "Roles_pkey" PRIMARY KEY
                                                                (id);


                                                                --
                                                                -- TOC entry 3041 (class 2606 OID 32961)
                                                                -- Name: TicketDetail TicketDetail_pkey; Type: CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."TicketDetail"
                                                                ADD CONSTRAINT "TicketDetail_pkey" PRIMARY KEY
                                                                (id);


                                                                --
                                                                -- TOC entry 3039 (class 2606 OID 32950)
                                                                -- Name: Ticket Ticket_pkey; Type: CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."Ticket"
                                                                ADD CONSTRAINT "Ticket_pkey" PRIMARY KEY
                                                                (id);


                                                                --
                                                                -- TOC entry 3019 (class 2606 OID 24593)
                                                                -- Name: UserGroups UserGroups_pkey; Type: CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."UserGroups"
                                                                ADD CONSTRAINT "UserGroups_pkey" PRIMARY KEY
                                                                ("userId", "groupId");


                                                                --
                                                                -- TOC entry 3013 (class 2606 OID 16441)
                                                                -- Name: UserRoles UserRoles_pkey; Type: CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."UserRoles"
                                                                ADD CONSTRAINT "UserRoles_pkey" PRIMARY KEY
                                                                ("userId", "roleId");


                                                                --
                                                                -- TOC entry 3059 (class 2606 OID 32787)
                                                                -- Name: CreditInfo fk_user_credit; Type: FK CONSTRAINT; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY PayanakDB."CreditInfo"
                                                                ADD CONSTRAINT fk_user_credit FOREIGN KEY
                                                                ("userId") REFERENCES um."AccountInfo"
                                                                (id);


                                                                --
                                                                -- TOC entry 3060 (class 2606 OID 32808)
                                                                -- Name: NumberInfo fk_user_number; Type: FK CONSTRAINT; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY PayanakDB."NumberInfo"
                                                                ADD CONSTRAINT fk_user_number FOREIGN KEY
                                                                (owner) REFERENCES um."AccountInfo"
                                                                (id);


                                                                --
                                                                -- TOC entry 3061 (class 2606 OID 32851)
                                                                -- Name: PersonalTemplate fk_user_PayanakDB_template; Type: FK CONSTRAINT; Schema: PayanakDB; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY PayanakDB."PersonalTemplate"
                                                                ADD CONSTRAINT fk_user_PayanakDB_template FOREIGN KEY
                                                                ("userId") REFERENCES um."AccountInfo"
                                                                (id);


                                                                --
                                                                -- TOC entry 3056 (class 2606 OID 24584)
                                                                -- Name: Group Group_owner_fkey; Type: FK CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."Group"
                                                                ADD CONSTRAINT "Group_owner_fkey" FOREIGN KEY
                                                                (owner) REFERENCES um."AccountInfo"
                                                                (id);


                                                                --
                                                                -- TOC entry 3055 (class 2606 OID 16482)
                                                                -- Name: RolePermissions PERMISSION_ID_FK_ROLEPERMISSION; Type: FK CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."RolePermissions"
                                                                ADD CONSTRAINT "PERMISSION_ID_FK_ROLEPERMISSION" FOREIGN KEY
                                                                ("permissionId") REFERENCES um."Permissions"
                                                                (id) NOT VALID;


                                                                --
                                                                -- TOC entry 3054 (class 2606 OID 16477)
                                                                -- Name: RolePermissions ROLE_ID_FK_ROLEPERMISSION; Type: FK CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."RolePermissions"
                                                                ADD CONSTRAINT "ROLE_ID_FK_ROLEPERMISSION" FOREIGN KEY
                                                                ("roleId") REFERENCES um."Roles"
                                                                (id) NOT VALID;


                                                                --
                                                                -- TOC entry 3053 (class 2606 OID 16472)
                                                                -- Name: UserRoles ROLE_ID_FK_USERROLE; Type: FK CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."UserRoles"
                                                                ADD CONSTRAINT "ROLE_ID_FK_USERROLE" FOREIGN KEY
                                                                ("roleId") REFERENCES um."Roles"
                                                                (id) NOT VALID;


                                                                --
                                                                -- TOC entry 3048 (class 2606 OID 16447)
                                                                -- Name: AdditionalInfo USER_ID_FK; Type: FK CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."AdditionalInfo"
                                                                ADD CONSTRAINT "USER_ID_FK" FOREIGN KEY
                                                                ("userId") REFERENCES um."AccountInfo"
                                                                (id) NOT VALID;


                                                                --
                                                                -- TOC entry 3049 (class 2606 OID 16452)
                                                                -- Name: AddressInfo USER_ID_FK1; Type: FK CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."AddressInfo"
                                                                ADD CONSTRAINT "USER_ID_FK1" FOREIGN KEY
                                                                ("userId") REFERENCES um."AccountInfo"
                                                                (id) NOT VALID;


                                                                --
                                                                -- TOC entry 3050 (class 2606 OID 16457)
                                                                -- Name: DeviceInfo USER_ID_FK2; Type: FK CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."DeviceInfo"
                                                                ADD CONSTRAINT "USER_ID_FK2" FOREIGN KEY
                                                                ("userId") REFERENCES um."AccountInfo"
                                                                (id) NOT VALID;


                                                                --
                                                                -- TOC entry 3051 (class 2606 OID 16462)
                                                                -- Name: PersonalInfo USER_ID_FK3; Type: FK CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."PersonalInfo"
                                                                ADD CONSTRAINT "USER_ID_FK3" FOREIGN KEY
                                                                ("userId") REFERENCES um."AccountInfo"
                                                                (id) NOT VALID;


                                                                --
                                                                -- TOC entry 3052 (class 2606 OID 16467)
                                                                -- Name: UserRoles USER_ID_FK_USERROLE; Type: FK CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."UserRoles"
                                                                ADD CONSTRAINT "USER_ID_FK_USERROLE" FOREIGN KEY
                                                                ("userId") REFERENCES um."AccountInfo"
                                                                (id) NOT VALID;


                                                                --
                                                                -- TOC entry 3058 (class 2606 OID 24599)
                                                                -- Name: UserGroups UserGroups_groupId_fkey; Type: FK CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."UserGroups"
                                                                ADD CONSTRAINT "UserGroups_groupId_fkey" FOREIGN KEY
                                                                ("groupId") REFERENCES um."Group"
                                                                (id);


                                                                --
                                                                -- TOC entry 3057 (class 2606 OID 24594)
                                                                -- Name: UserGroups UserGroups_userId_fkey; Type: FK CONSTRAINT; Schema: um; Owner: postgres
                                                                --

                                                                ALTER TABLE ONLY um."UserGroups"
                                                                ADD CONSTRAINT "UserGroups_userId_fkey" FOREIGN KEY
                                                                ("userId") REFERENCES um."AccountInfo"
                                                                (id);


-- Completed on 2020-01-13 08:35:16 +0330

--
-- PostgreSQL database dump complete
--
