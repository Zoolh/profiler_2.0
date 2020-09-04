--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4 (Ubuntu 12.4-1.pgdg16.04+1)
-- Dumped by pg_dump version 12.2

-- Started on 2020-09-04 17:04:42

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 5598080)
-- Name: TL_actif_produit; Type: TABLE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE TABLE public."TL_actif_produit" (
    produit_id integer NOT NULL,
    actif_id integer NOT NULL
);


ALTER TABLE public."TL_actif_produit" OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 221 (class 1259 OID 5703062)
-- Name: TL_profil_actif; Type: TABLE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE TABLE public."TL_profil_actif" (
    profil_id integer NOT NULL,
    actif_id integer NOT NULL
);


ALTER TABLE public."TL_profil_actif" OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 222 (class 1259 OID 5703077)
-- Name: TL_profil_conseil; Type: TABLE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE TABLE public."TL_profil_conseil" (
    profil_id integer NOT NULL,
    conseil_id integer NOT NULL
);


ALTER TABLE public."TL_profil_conseil" OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 223 (class 1259 OID 5703596)
-- Name: TL_proposition_support; Type: TABLE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE TABLE public."TL_proposition_support" (
    proposition_id integer NOT NULL,
    "supportInv_id" integer
);


ALTER TABLE public."TL_proposition_support" OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 211 (class 1259 OID 5598012)
-- Name: actif; Type: TABLE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE TABLE public.actif (
    id integer NOT NULL,
    libelle character varying(255),
    ponderation character varying(255)
);


ALTER TABLE public.actif OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 210 (class 1259 OID 5598010)
-- Name: actif_id_seq; Type: SEQUENCE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE SEQUENCE public.actif_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.actif_id_seq OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 3970 (class 0 OID 0)
-- Dependencies: 210
-- Name: actif_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER SEQUENCE public.actif_id_seq OWNED BY public.actif.id;


--
-- TOC entry 215 (class 1259 OID 5598031)
-- Name: conseil; Type: TABLE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE TABLE public.conseil (
    id integer NOT NULL,
    libelle character varying(255),
    description text
);


ALTER TABLE public.conseil OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 214 (class 1259 OID 5598029)
-- Name: conseil_id_seq; Type: SEQUENCE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE SEQUENCE public.conseil_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.conseil_id_seq OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 3971 (class 0 OID 0)
-- Dependencies: 214
-- Name: conseil_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER SEQUENCE public.conseil_id_seq OWNED BY public.conseil.id;


--
-- TOC entry 213 (class 1259 OID 5598023)
-- Name: produit; Type: TABLE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE TABLE public.produit (
    id integer NOT NULL,
    libelle character varying(255)
);


ALTER TABLE public.produit OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 212 (class 1259 OID 5598021)
-- Name: produit_id_seq; Type: SEQUENCE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE SEQUENCE public.produit_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.produit_id_seq OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 3972 (class 0 OID 0)
-- Dependencies: 212
-- Name: produit_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER SEQUENCE public.produit_id_seq OWNED BY public.produit.id;


--
-- TOC entry 203 (class 1259 OID 1544672)
-- Name: profil; Type: TABLE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE TABLE public.profil (
    id integer NOT NULL,
    libelle character varying(255),
    description text,
    variation character varying(255),
    temps character varying(255)
);


ALTER TABLE public.profil OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 202 (class 1259 OID 1544670)
-- Name: profil_id_seq; Type: SEQUENCE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE SEQUENCE public.profil_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.profil_id_seq OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 3973 (class 0 OID 0)
-- Dependencies: 202
-- Name: profil_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER SEQUENCE public.profil_id_seq OWNED BY public.profil.id;


--
-- TOC entry 209 (class 1259 OID 1544766)
-- Name: proposition; Type: TABLE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE TABLE public.proposition (
    id integer NOT NULL,
    libelle character varying(255),
    "questionId" integer,
    "pointsProfil" integer,
    "pointsTypeGestion" integer
);


ALTER TABLE public.proposition OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 208 (class 1259 OID 1544764)
-- Name: proposition_id_seq; Type: SEQUENCE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE SEQUENCE public.proposition_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.proposition_id_seq OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 3974 (class 0 OID 0)
-- Dependencies: 208
-- Name: proposition_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER SEQUENCE public.proposition_id_seq OWNED BY public.proposition.id;


--
-- TOC entry 207 (class 1259 OID 1544747)
-- Name: question; Type: TABLE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE TABLE public.question (
    id integer NOT NULL,
    libelle character varying(255),
    "sectionId" integer,
    numero integer
);


ALTER TABLE public.question OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 206 (class 1259 OID 1544745)
-- Name: question_id_seq; Type: SEQUENCE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE SEQUENCE public.question_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.question_id_seq OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 3975 (class 0 OID 0)
-- Dependencies: 206
-- Name: question_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER SEQUENCE public.question_id_seq OWNED BY public.question.id;


--
-- TOC entry 205 (class 1259 OID 1544739)
-- Name: section; Type: TABLE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE TABLE public.section (
    id integer NOT NULL,
    libelle character varying(255)
);


ALTER TABLE public.section OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 204 (class 1259 OID 1544737)
-- Name: section_id_seq; Type: SEQUENCE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE SEQUENCE public.section_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.section_id_seq OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 3976 (class 0 OID 0)
-- Dependencies: 204
-- Name: section_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER SEQUENCE public.section_id_seq OWNED BY public.section.id;


--
-- TOC entry 220 (class 1259 OID 5703053)
-- Name: supportInv; Type: TABLE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE TABLE public."supportInv" (
    id integer NOT NULL,
    libelle character varying(255),
    description text
);


ALTER TABLE public."supportInv" OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 219 (class 1259 OID 5703051)
-- Name: supportInv_id_seq; Type: SEQUENCE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE SEQUENCE public."supportInv_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."supportInv_id_seq" OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 3977 (class 0 OID 0)
-- Dependencies: 219
-- Name: supportInv_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER SEQUENCE public."supportInv_id_seq" OWNED BY public."supportInv".id;


--
-- TOC entry 218 (class 1259 OID 5703042)
-- Name: typeGestion; Type: TABLE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE TABLE public."typeGestion" (
    id integer NOT NULL,
    libelle character varying(255),
    description text
);


ALTER TABLE public."typeGestion" OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 217 (class 1259 OID 5703040)
-- Name: typeGestion_id_seq; Type: SEQUENCE; Schema: public; Owner: xbxnmtxjmysczr
--

CREATE SEQUENCE public."typeGestion_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."typeGestion_id_seq" OWNER TO xbxnmtxjmysczr;

--
-- TOC entry 3978 (class 0 OID 0)
-- Dependencies: 217
-- Name: typeGestion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER SEQUENCE public."typeGestion_id_seq" OWNED BY public."typeGestion".id;


--
-- TOC entry 3776 (class 2604 OID 5598015)
-- Name: actif id; Type: DEFAULT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public.actif ALTER COLUMN id SET DEFAULT nextval('public.actif_id_seq'::regclass);


--
-- TOC entry 3778 (class 2604 OID 5598034)
-- Name: conseil id; Type: DEFAULT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public.conseil ALTER COLUMN id SET DEFAULT nextval('public.conseil_id_seq'::regclass);


--
-- TOC entry 3777 (class 2604 OID 5598026)
-- Name: produit id; Type: DEFAULT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public.produit ALTER COLUMN id SET DEFAULT nextval('public.produit_id_seq'::regclass);


--
-- TOC entry 3772 (class 2604 OID 1544675)
-- Name: profil id; Type: DEFAULT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public.profil ALTER COLUMN id SET DEFAULT nextval('public.profil_id_seq'::regclass);


--
-- TOC entry 3775 (class 2604 OID 1544769)
-- Name: proposition id; Type: DEFAULT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public.proposition ALTER COLUMN id SET DEFAULT nextval('public.proposition_id_seq'::regclass);


--
-- TOC entry 3774 (class 2604 OID 1544750)
-- Name: question id; Type: DEFAULT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public.question ALTER COLUMN id SET DEFAULT nextval('public.question_id_seq'::regclass);


--
-- TOC entry 3773 (class 2604 OID 1544742)
-- Name: section id; Type: DEFAULT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public.section ALTER COLUMN id SET DEFAULT nextval('public.section_id_seq'::regclass);


--
-- TOC entry 3780 (class 2604 OID 5703056)
-- Name: supportInv id; Type: DEFAULT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public."supportInv" ALTER COLUMN id SET DEFAULT nextval('public."supportInv_id_seq"'::regclass);


--
-- TOC entry 3779 (class 2604 OID 5703045)
-- Name: typeGestion id; Type: DEFAULT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public."typeGestion" ALTER COLUMN id SET DEFAULT nextval('public."typeGestion_id_seq"'::regclass);


--
-- TOC entry 3955 (class 0 OID 5598080)
-- Dependencies: 216
-- Data for Name: TL_actif_produit; Type: TABLE DATA; Schema: public; Owner: xbxnmtxjmysczr
--

COPY public."TL_actif_produit" (produit_id, actif_id) FROM stdin;
1	1
2	1
3	2
1	2
4	2
5	4
6	4
1	4
7	4
8	3
1	3
7	3
9	5
6	5
1	5
7	5
10	5
10	6
9	7
6	7
1	7
7	7
11	7
12	7
13	7
14	8
15	8
16	8
17	9
18	10
19	11
20	11
21	11
22	11
21	12
22	12
9	13
6	13
1	13
7	13
11	13
23	13
13	13
24	14
25	14
26	14
22	14
27	15
22	15
26	16
22	16
1	17
26	17
28	18
6	18
1	18
7	18
11	18
23	18
13	18
26	19
\.


--
-- TOC entry 3960 (class 0 OID 5703062)
-- Dependencies: 221
-- Data for Name: TL_profil_actif; Type: TABLE DATA; Schema: public; Owner: xbxnmtxjmysczr
--

COPY public."TL_profil_actif" (profil_id, actif_id) FROM stdin;
1	1
1	2
1	4
2	1
2	3
2	5
2	6
3	1
3	3
3	7
3	8
3	9
3	10
3	11
3	12
4	1
4	3
4	13
4	8
4	9
4	10
4	14
4	15
4	16
4	17
5	18
5	14
5	15
5	16
5	19
\.


--
-- TOC entry 3961 (class 0 OID 5703077)
-- Dependencies: 222
-- Data for Name: TL_profil_conseil; Type: TABLE DATA; Schema: public; Owner: xbxnmtxjmysczr
--

COPY public."TL_profil_conseil" (profil_id, conseil_id) FROM stdin;
5	9
5	10
5	11
5	12
5	13
5	14
\.


--
-- TOC entry 3962 (class 0 OID 5703596)
-- Dependencies: 223
-- Data for Name: TL_proposition_support; Type: TABLE DATA; Schema: public; Owner: xbxnmtxjmysczr
--

COPY public."TL_proposition_support" (proposition_id, "supportInv_id") FROM stdin;
38	1
38	5
39	1
39	2
39	5
40	1
40	2
40	3
40	4
41	2
41	3
\.


--
-- TOC entry 3950 (class 0 OID 5598012)
-- Dependencies: 211
-- Data for Name: actif; Type: TABLE DATA; Schema: public; Owner: xbxnmtxjmysczr
--

COPY public.actif (id, libelle, ponderation) FROM stdin;
1	Monetaire	
2	Obligations & Prudent	
3	Obligations	
4	Actions & Prudent	Maximum 10%
5	Actions & Equilibre	Maximum 30%
6	Or	
7	Actions & Dynamique	Jusqu'à 70%
8	Gestion Alternative	
9	Produits de défiscalisation	
10	Pierre papier	
11	Produits Dérivés & Dynamique	
12	Matières premières (restreint)	
13	Actions & Offensif	Jusqu'à 90%
14	Produits Dérivés	
15	Matières premières	
16	FOREX	
17	Crypto-monnaies & Offensif	
18	Actions & Trader	Jusqu'à 70%
19	Crypto-monnaies & Trader	
\.


--
-- TOC entry 3954 (class 0 OID 5598031)
-- Dependencies: 215
-- Data for Name: conseil; Type: TABLE DATA; Schema: public; Owner: xbxnmtxjmysczr
--

COPY public.conseil (id, libelle, description) FROM stdin;
1	Formez-vous	La bourse, comme tous les domaines, recquiert un apprentissage, variable en fonction du niveau de compréhension et des performances que l'on souhaite obtenir. Commencez à investir et montez en compétence progressivement en comprenenant les mécanismes, les marchés, les produits. Commencez à travailler sans effet de levier. Il ne vous viendrait pas à l'esprit de  commencer la compétition automobile par la Formule 1 !
2	Informez-vous	Suivez, même rapidement, l’actualité économique au travers de la presse financière, ou consultez les chaines de TV, les radios économiques, ou encore les sites spécialisés, des news letters, des analyses, etc. Si vous désirez être plus actifs, informez-vous sur le calendrier économique (Saison des résultats, publications macro et microéconomiques, réunions des Banques Centrales, etc.)
3	Investissez exclusivement de l’argent dont vous n’avez pas besoin immédiatement	Les marchés financiers évoluent en fonction de très nombreux facteurs et sont imprévisibles.  Il ne faut donc pas avoir à retirer les sommes investies subitement au risque de devoir le faire au pire moment. Vos investissements devront donc dépendre de vos disponibilités et besoins, à la fois immédiats et ultérieurs.
4	Laissez courir les profits et coupez les pertes rapidement	La grande majorité des investisseurs fait l’inverse. Notre nature nous pousse à ne pas vouloir reconnaître ses erreurs et à conserver des postions perdantes. C’est la première cause d’échec des investisseurs qui prennent rapidement leurs bénéfices et conservent des positions perdantes. La finance comportementale explique très bien ce biais naturel de l’humain (dit effet de disposition) qui fait l'échec principal des investisseurs. Saviez-vous qu'en moyenne un gain de 100 € procure autant d'émotions qu'une perte de 200 € ?
5	Ne renforcez jamais une position perdante	Même si on n’achète jamais au plus bas, le fait de pouvoir acheter plus bas est déjà signe que le point d’entrée choisi n’a pas été optimal. Renforcer une postion perdante équivaut à augmenter son risque. On ne renforce que des positions gagnantes en diminuant la taille à chaque fois (pyramidage). On respectera tout de même les règles de diversification afin qu’une ligne renforcée ne représente pas à elle seule une part trop significative du portefeuille.  
6	Mettez des ordres de protection et ne les éloignez pas	Le fait d’utiliser ou non des ordres stop (ou à seuil de déclenchement) est parfois controversé. Cela dépend aussi de l’horizon d’investissement. Si l’on décide de conserver une position quelques soient les circonstances, on risque de perdre tout son capital (Cf. Alcatel, Eurotunnel, etc.). Solder une position perdante permet de mieux se replacer sur un autre titre, voire sur le même,  ou de placer son capital sur un autre actif. Monopoliser des liquidités fait perdre des opportunités. Eloigner un ordre de protection modifie votre exposition au risque et témoigne  d’une défaillance de la stratégie. 
7	Diversifiez	C'est le principe de "ne pas mettre tous ses œufs dans le même panier". Plus on répartit ses investissements, moins on sera exposé à des accidents de marché. Il convient donc d'investir dans différents types d'actifs  (actions, obligations, matières premières, changes ou forex, etc.), différentes zones géographiques et différents secteurs. L'analyse intermarchés permet de mieux appréhender ce sujet. Comme dans tous les domaines l'excès est nuisible. Un portefeuille trop diversifé risque de ne pas progresser.
8	Méfiez-vous d'un trop fort consensus, du tuyau d'un ami, des interventions précédant les publications de résultats. Pensez à faire simple.	Si la grande majorité des investisseurs est d’accord c’est qu’il y a consensus, il n'y a donc plus de nouveaux entrants pour prolonger la tendance, qu'elle soit haussière ou baissière. Schématiquement, plus les investisseurs sont nombreux à penser que le marché va monter, plus ils ont acheté des titres. Il reste donc peu de liquidités ou de nouveaux acheteurs pour alimenter le mouvement. Le marché risque donc de stagner ou de baisser. Si vous savez qu’une société va réaliser un très bon exercice, soit vous avez une information privilégiée et il est interdit de s’en servir (délit d’initié) soit d’autres le savent et il est trop tard pour acheter. Après une grosse tempête, les actions d'une société qui vend des tuiles vont probablement monter.
9	Investissez dans le sens de la tendance	Prenez du recul en regardant des graphiques en unité de temps supérieure à votre unité de temps favorite. Par exemple pour travailler en 3 mn vérifiez la tendance en 15 mn. 
10	Ayez un scénario et respectez-le	L’être humain, par nature, n’est pas adapté à l’investissement boursier, il n'aime pas le risque et réagit donc de façon émotionelle quant il investit son argent. Le seul moyen de ne pas être le jeu de ses émotions est donc d’avoir un plan avant d'investir et de s’y tenir faute de quoi on multipliera les erreurs. 
11	Respectez les règles du Money Management	Au moment de prendre vos décisions d'investissement, envisagez la possibilité d'une évolution défavorable et de ses conséquences sur votre capital. Ayez un objectif de gain mais aussi de perte maximale. Le money management consiste à limiter l’exposition de son capital sur un actif ou une opération, en définissant le rapport entre  probabilité de succès et risque. 
12	Préservez votre capital 	Cela semble évident mais c'est une des principales causes d'échec en trading. Appliquez par exemple, la règle de "6 % de perte maximale du capital en un mois". Ou encore celle de "2% de perte du capital par opération". Ces règles sont propres à chaque trader et peuvent être ajustées en fonction de votre profil, de votre capital ou d'autres critères.
13	Appliquez un ratio risque / rendement de 1 pour 3 au minimum	Au moment d’investir, sans être pessimiste, il est indispensable d’être réaliste et d’envisager le cas de figure le plus défavorable. Cela permet de déterminer la probabilité de gain d’une opération par rapport à son risque. Le ratio idéal minimal est d’1 pour 3. C’est-à-dire que le gain potentiel d’une opération doit représenter au moins 3 fois la perte potentielle. Evidemment un ratio supérieur est d'autant plus favorable. Un ratio d’1 pour 2 est toléré dans certains cas ou sur certains marchés. Si le ratio est inférieur on ne prend pas position. 
14	Constituez un journal de trading	Conservez une trace de vos opérations, dans un ficher excel ou un journal de trading, avec un maximum d'informations, pour identifier les opérations profitables et les perdantes, dans le but de vous améliorer.
\.


--
-- TOC entry 3952 (class 0 OID 5598023)
-- Dependencies: 213
-- Data for Name: produit; Type: TABLE DATA; Schema: public; Owner: xbxnmtxjmysczr
--

COPY public.produit (id, libelle) FROM stdin;
1	OPCVM
2	Fonds Euro
3	Obligations d'Etat
4	Trackers / ETF
5	Actions : Grandes capitalisations
6	Fonds à formule (fonds garantis, fonds à promesse)
7	Trackers / ETF
8	Obligations d'Etat et privées
9	Actions : Grandes, moyennes et petites capitalisations
10	Certificats sans levier
11	Certificats avec et sans levier 
12	Levier < 2
13	Très petites capitalisations : Valeurs spéculatives type biotechnologies, Alternext, Growth, etc. 
14	Fonds Aria
15	FCIMT
16	OPCVM contractuels
17	FIP, FCPI
18	SCPI
19	Futures sans levier ou pour couverture
20	Options sans levier ou pour couverture
21	CFD sans Levier
22	Dérivés emetteurs
23	Levier < 4
24	Futures
25	Options 
26	CFD 
27	CFD levier < 4 
28	Actions  : Grandes, moyennes et petites capitalisations
\.


--
-- TOC entry 3942 (class 0 OID 1544672)
-- Dependencies: 203
-- Data for Name: profil; Type: TABLE DATA; Schema: public; Owner: xbxnmtxjmysczr
--

COPY public.profil (id, libelle, description, variation, temps) FROM stdin;
1	Prudent		+/-5 %	4 fois par an ou moins
2	Equilibré		+/- 10 %	1 fois par semaine
3	Dynamique		+/- 25 %	3 fois par semaine
4	Offensif		+/- 35 %	Tous les jours
5	Trader		+/- > 35 %	Plus d'1 Heure par jour
\.


--
-- TOC entry 3948 (class 0 OID 1544766)
-- Dependencies: 209
-- Data for Name: proposition; Type: TABLE DATA; Schema: public; Owner: xbxnmtxjmysczr
--

COPY public.proposition (id, libelle, "questionId", "pointsProfil", "pointsTypeGestion") FROM stdin;
66	J'ai peur, je la vends	18	1	1
67	Cela fait partie du risque et c'est intégré à mon scénario de départ.  Cela n'influence pas ma décision de gestion	18	4	3
68	Gagner 1000 € à coup sur	19	1	\N
69	Avoir 50 % de chances de gagner 5 000 €	19	2	\N
70	Avoir 10 % de chances de gagner 50 000 €	19	4	\N
71	Je ne joue pas	20	1	\N
72	70 % de chances de gagner 100 €	20	2	\N
73	Avoir 50 % de chances de gagner 150 €	20	3	\N
74	Avoir 30 % de chances de gagner 200 €	20	4	\N
75	Quelle chance d'avoir trouvé 50 € !	21	4	\N
76	Quel dommage…	21	2	\N
77	C'est une journée neutre	21	3	\N
78	+/- 5%	13	1	\N
1	Moins de 16 ans	1	0	\N
2	De 16 à 60 ans	1	4	\N
3	De 60 à 80 ans	1	3	\N
4	Plus de 80 ans	1	2	\N
5	Non	2	4	\N
6	1	2	4	\N
7	2	2	3	\N
8	3 ou plus	2	3	\N
9	Moins d'1 an	3	1	\N
10	De 1 à 3 ans	3	2	\N
11	De 3 à 5 ans	3	3	\N
12	Au-delà de 5 ans	3	4	\N
13	4 fois par an ou moins	4	1	\N
14	1 fois par semaine	4	2	\N
15	3 fois par semaine	4	3	\N
16	Tous les jours	4	4	\N
17	Plus de 2 heures par jour	4	5	\N
18	Moins de 10 000 €	5	3	\N
19	10 000 à 50 000 €	5	4	\N
20	50 000 à 100 000 €	5	4	\N
21	100 000 à 500 000 €	5	4	\N
22	> 500 000 €	5	4	\N
28	Oui	7	4	3
29	Non	7	2	2
30	Oui	8	4	3
31	Non	8	2	2
32	Oui	9	4	3
33	Non	9	2	1
34	Je ne sais pas	9	0	2
35	Un gros lézard	10	\N	1
36	Un produit avec un effet de levier et un risque important de perdre la totalité du capital investi	10	\N	3
37	Un produit structuré avec un risque de perte faible	10	\N	2
38	Générer un complément de revenu	11	3	\N
39	Etre autonome financièrement	11	4	\N
40	Constituer un capital pour votre retraite	11	2	\N
41	Transmettre mon capital	11	2	\N
42	Environ 5 %	12	1	\N
43	Environ 10 %	12	2	\N
44	Environ 15 %	12	3	\N
45	Environ 25 %	12	4	\N
46	> 35 %	12	5	\N
47	+/- 10%	13	2	\N
48	+/-20%	13	3	\N
49	+/-30%	13	4	\N
50	+/-50%	13	5	\N
51	8%	14	1	\N
52	12%	14	2	\N
53	20%	14	3	\N
54	30%	14	4	\N
55	Oui	15	4	\N
56	Non	15	2	\N
57	Je ne sais pas	15	3	\N
58	Dans des sociétés bien connues	16	2	2
59	Dans des sociétés au centre de l'actualité	16	3	1
60	Dans des sociétés ou des produits que j'ai analysés en détail	16	4	3
61	En fonction d'un média spécialisé ou des recommandations d'un professionnel	17	3	2
62	J'investis pour le long terme, dans plusieurs sociétés dont le parcours boursier est solide	17	3	3
63	Je ne connais pas l'évolution des marchés financiers donc j'ai une stratégie et je n'y déroge pas	17	4	3
64	C'est une opportunité, j'en rachète le double	18	3	2
65	Tant que je n'ai pas vendu je n'ai pas perdu	18	2	2
\.


--
-- TOC entry 3946 (class 0 OID 1544747)
-- Dependencies: 207
-- Data for Name: question; Type: TABLE DATA; Schema: public; Owner: xbxnmtxjmysczr
--

COPY public.question (id, libelle, "sectionId", numero) FROM stdin;
1	Quel âge avez-vous ?	1	1
2	Avez-vous des enfants à charge ?	1	2
3	Quel est votre horizon d’investissement ?	2	3
4	De combien de temps environ disposez-vous pour gérer vos investissements ?	2	4
5	Quel est approximativement votre patrimoine global : immobilier, placements, liquidités, autres, etc. ?	3	5
7	Avez-vous fait des études financières ou assimilées ?	4	7
8	Avez-vous suivi des formations ou lu des livres sur l'investissement financier ?	4	8
9	Une perspective de performance élévée implique un risque de perte  important	4	9
10	Un Warrant est 	4	10
11	Quel est votre objectif d'investissement ?	5	11
12	Quel niveau de performance annuelle envisagez-vous ?	5	12
13	Pour un investissement de 10 000 € quel rapport gain / perte choisissez vous ?	5	13
14	Qu'est ce qu'une perte significative selon vous ?	5	14
15	Pensez-vous mieux conduire que 70% des conducteurs ?	6	15
16	Préférez-vous investir  	6	16
17	Comment prenez-vous vos décisions d'investissement ? 	6	17
18	Vous choisissez avec soin une action sur laquelle vous décidez d'investir. Quelques jours après elle perd 20 %. Quelle est votre réaction ?	6	18
19	Vous jouez gratuitement à un jeu. Que choisissez vous ?	6	19
20	On vous propose un autre jeu mais cette fois vous devez investir 50 € pour participer. Que choisissez vous ?	6	20
21	Vous marchez dans la rue et trouvez 50 € mais en arrivant chez vous vous constatez que votre portefeuille boursier baisse de 50 €. Quelle est votre première réaction ?	6	21
\.


--
-- TOC entry 3944 (class 0 OID 1544739)
-- Dependencies: 205
-- Data for Name: section; Type: TABLE DATA; Schema: public; Owner: xbxnmtxjmysczr
--

COPY public.section (id, libelle) FROM stdin;
1	Votre Situation Familiale
2	Rapport Au Temps
3	Votre Situation Patrimoniale
4	Formation / Expérience
5	Aversion au risque
6	Comportements
\.


--
-- TOC entry 3959 (class 0 OID 5703053)
-- Dependencies: 220
-- Data for Name: supportInv; Type: TABLE DATA; Schema: public; Owner: xbxnmtxjmysczr
--

COPY public."supportInv" (id, libelle, description) FROM stdin;
1	Compte Titre Ordinaire	https://www.amf-france.org/fr/espace-epargnants/comprendre-les-produits-financiers/supports-dinvestissement/compte-titres#:~:text=Le%20compte%2Dtitres%20ordinaire%20permet,passer%20des%20ordres%20de%20bourse.
2	Compte PEA & Compte PEA-PME	https://www.amf-france.org/fr/espace-epargnants/comprendre-les-produits-financiers/supports-dinvestissement/pea-tout-savoir-sur-le-plan-depargne-en-actions-0#:~:text=PEA%20%3A%20tout%20savoir%20sur%20le%20plan%20d'%C3%A9pargne%20en%20actions,profitant%20de%20conditions%20fiscales%20avantageuses. & https://www.amf-france.org/fr/espace-epargnants/comprendre-les-produits-financiers/supports-dinvestissement/investir-en-actions-avec-le-pea-et-le-pea-pme-eti-0
3	Assurance Vie	https://www.amf-france.org/fr/espace-epargnants/comprendre-les-produits-financiers/supports-dinvestissement/assurance-vie
4	SCPI	https://www.amf-france.org/fr/espace-epargnants/comprendre-les-produits-financiers/placements-collectifs/immobilier-scpi-opci/scpi-un-autre-moyen-dinvestir-dans-limmobilier#:~:text=L'AMF%20exerce%20son%20r%C3%B4le,au%20long%20de%20leur%20vie.&text=Elle%20s'assure%20de%20l,informations%20d%C3%A9livr%C3%A9es%20%C3%A0%20l'investisseur.
5	CFD	https://www.amf-france.org/fr/espace-epargnants/comprendre-les-produits-financiers/produits-complexes/cfd#:~:text=Les%20CFD%20(contracts%20for%20difference)%20sont%20des%20instruments%20financiers%20sp%C3%A9culatifs,que%20vous%20ne%20d%C3%A9tenez%20pas.
\.


--
-- TOC entry 3957 (class 0 OID 5703042)
-- Dependencies: 218
-- Data for Name: typeGestion; Type: TABLE DATA; Schema: public; Owner: xbxnmtxjmysczr
--

COPY public."typeGestion" (id, libelle, description) FROM stdin;
1	Déléguée	Vous déterminez des objectifs d'investissements avec un professionnel qui se charge de l'exécution de la stratégie. Vous êtes régulièrement informé de la performance mais n'intervenez pas dans la prise de décision.
2	Assistée / Conseillée 	Vous déterminez des objectifs d'investissements avec un professionnel qui vous guide mais vous restez décisionnaire et exécutez vous-même les opérations.
3	Autonome	Vous déterminez vos objectifs d'investissements et exécutez vous-même les opérations.
\.


--
-- TOC entry 3979 (class 0 OID 0)
-- Dependencies: 210
-- Name: actif_id_seq; Type: SEQUENCE SET; Schema: public; Owner: xbxnmtxjmysczr
--

SELECT pg_catalog.setval('public.actif_id_seq', 19, true);


--
-- TOC entry 3980 (class 0 OID 0)
-- Dependencies: 214
-- Name: conseil_id_seq; Type: SEQUENCE SET; Schema: public; Owner: xbxnmtxjmysczr
--

SELECT pg_catalog.setval('public.conseil_id_seq', 1, false);


--
-- TOC entry 3981 (class 0 OID 0)
-- Dependencies: 212
-- Name: produit_id_seq; Type: SEQUENCE SET; Schema: public; Owner: xbxnmtxjmysczr
--

SELECT pg_catalog.setval('public.produit_id_seq', 28, true);


--
-- TOC entry 3982 (class 0 OID 0)
-- Dependencies: 202
-- Name: profil_id_seq; Type: SEQUENCE SET; Schema: public; Owner: xbxnmtxjmysczr
--

SELECT pg_catalog.setval('public.profil_id_seq', 1, false);


--
-- TOC entry 3983 (class 0 OID 0)
-- Dependencies: 208
-- Name: proposition_id_seq; Type: SEQUENCE SET; Schema: public; Owner: xbxnmtxjmysczr
--

SELECT pg_catalog.setval('public.proposition_id_seq', 154, true);


--
-- TOC entry 3984 (class 0 OID 0)
-- Dependencies: 206
-- Name: question_id_seq; Type: SEQUENCE SET; Schema: public; Owner: xbxnmtxjmysczr
--

SELECT pg_catalog.setval('public.question_id_seq', 21, true);


--
-- TOC entry 3985 (class 0 OID 0)
-- Dependencies: 204
-- Name: section_id_seq; Type: SEQUENCE SET; Schema: public; Owner: xbxnmtxjmysczr
--

SELECT pg_catalog.setval('public.section_id_seq', 6, true);


--
-- TOC entry 3986 (class 0 OID 0)
-- Dependencies: 219
-- Name: supportInv_id_seq; Type: SEQUENCE SET; Schema: public; Owner: xbxnmtxjmysczr
--

SELECT pg_catalog.setval('public."supportInv_id_seq"', 1, false);


--
-- TOC entry 3987 (class 0 OID 0)
-- Dependencies: 217
-- Name: typeGestion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: xbxnmtxjmysczr
--

SELECT pg_catalog.setval('public."typeGestion_id_seq"', 1, false);


--
-- TOC entry 3796 (class 2606 OID 5598084)
-- Name: TL_actif_produit TL_actif_produit_pkey; Type: CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public."TL_actif_produit"
    ADD CONSTRAINT "TL_actif_produit_pkey" PRIMARY KEY (produit_id, actif_id);


--
-- TOC entry 3802 (class 2606 OID 5703066)
-- Name: TL_profil_actif TL_profil_actif_pkey; Type: CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public."TL_profil_actif"
    ADD CONSTRAINT "TL_profil_actif_pkey" PRIMARY KEY (profil_id, actif_id);


--
-- TOC entry 3804 (class 2606 OID 5703081)
-- Name: TL_profil_conseil TL_profil_conseil_pkey; Type: CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public."TL_profil_conseil"
    ADD CONSTRAINT "TL_profil_conseil_pkey" PRIMARY KEY (profil_id, conseil_id);


--
-- TOC entry 3790 (class 2606 OID 5598020)
-- Name: actif actif_pkey; Type: CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public.actif
    ADD CONSTRAINT actif_pkey PRIMARY KEY (id);


--
-- TOC entry 3794 (class 2606 OID 5598039)
-- Name: conseil conseil_pkey; Type: CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public.conseil
    ADD CONSTRAINT conseil_pkey PRIMARY KEY (id);


--
-- TOC entry 3792 (class 2606 OID 5598028)
-- Name: produit produit_pkey; Type: CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public.produit
    ADD CONSTRAINT produit_pkey PRIMARY KEY (id);


--
-- TOC entry 3782 (class 2606 OID 1544682)
-- Name: profil profil_pkey; Type: CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public.profil
    ADD CONSTRAINT profil_pkey PRIMARY KEY (id);


--
-- TOC entry 3788 (class 2606 OID 1544771)
-- Name: proposition proposition_pkey; Type: CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public.proposition
    ADD CONSTRAINT proposition_pkey PRIMARY KEY (id);


--
-- TOC entry 3786 (class 2606 OID 1544752)
-- Name: question question_pkey; Type: CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public.question
    ADD CONSTRAINT question_pkey PRIMARY KEY (id);


--
-- TOC entry 3784 (class 2606 OID 1544744)
-- Name: section section_pkey; Type: CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public.section
    ADD CONSTRAINT section_pkey PRIMARY KEY (id);


--
-- TOC entry 3800 (class 2606 OID 5703061)
-- Name: supportInv supportInv_pkey; Type: CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public."supportInv"
    ADD CONSTRAINT "supportInv_pkey" PRIMARY KEY (id);


--
-- TOC entry 3798 (class 2606 OID 5703050)
-- Name: typeGestion typeGestion_pkey; Type: CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public."typeGestion"
    ADD CONSTRAINT "typeGestion_pkey" PRIMARY KEY (id);


--
-- TOC entry 3808 (class 2606 OID 5598090)
-- Name: TL_actif_produit TL_actif_produit_actif_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public."TL_actif_produit"
    ADD CONSTRAINT "TL_actif_produit_actif_id_fkey" FOREIGN KEY (actif_id) REFERENCES public.actif(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3807 (class 2606 OID 5598085)
-- Name: TL_actif_produit TL_actif_produit_produit_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public."TL_actif_produit"
    ADD CONSTRAINT "TL_actif_produit_produit_id_fkey" FOREIGN KEY (produit_id) REFERENCES public.produit(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3810 (class 2606 OID 5703072)
-- Name: TL_profil_actif TL_profil_actif_actif_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public."TL_profil_actif"
    ADD CONSTRAINT "TL_profil_actif_actif_id_fkey" FOREIGN KEY (actif_id) REFERENCES public.actif(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3809 (class 2606 OID 5703067)
-- Name: TL_profil_actif TL_profil_actif_profil_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public."TL_profil_actif"
    ADD CONSTRAINT "TL_profil_actif_profil_id_fkey" FOREIGN KEY (profil_id) REFERENCES public.profil(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3812 (class 2606 OID 5703087)
-- Name: TL_profil_conseil TL_profil_conseil_conseil_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public."TL_profil_conseil"
    ADD CONSTRAINT "TL_profil_conseil_conseil_id_fkey" FOREIGN KEY (conseil_id) REFERENCES public.conseil(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3811 (class 2606 OID 5703082)
-- Name: TL_profil_conseil TL_profil_conseil_profil_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public."TL_profil_conseil"
    ADD CONSTRAINT "TL_profil_conseil_profil_id_fkey" FOREIGN KEY (profil_id) REFERENCES public.profil(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3813 (class 2606 OID 5703601)
-- Name: TL_proposition_support TL_proposition_support_proposition_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public."TL_proposition_support"
    ADD CONSTRAINT "TL_proposition_support_proposition_id_fkey" FOREIGN KEY (proposition_id) REFERENCES public.proposition(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3814 (class 2606 OID 5704037)
-- Name: TL_proposition_support TL_proposition_support_supportInv_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public."TL_proposition_support"
    ADD CONSTRAINT "TL_proposition_support_supportInv_id_fkey" FOREIGN KEY ("supportInv_id") REFERENCES public."supportInv"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3806 (class 2606 OID 5705919)
-- Name: proposition proposition_questionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public.proposition
    ADD CONSTRAINT "proposition_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES public.question(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3805 (class 2606 OID 5705914)
-- Name: question question_sectionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: xbxnmtxjmysczr
--

ALTER TABLE ONLY public.question
    ADD CONSTRAINT "question_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES public.section(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3968 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: xbxnmtxjmysczr
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO xbxnmtxjmysczr;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- TOC entry 3969 (class 0 OID 0)
-- Dependencies: 695
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO xbxnmtxjmysczr;


-- Completed on 2020-09-04 17:04:52

--
-- PostgreSQL database dump complete
--

