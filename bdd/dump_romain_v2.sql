INSERT INTO public.section(id, libelle)	VALUES (1, 'Votre Situation Familiale');
INSERT INTO public.section(id, libelle)	VALUES (2,'Rapport Au Temps');
INSERT INTO public.section(id, libelle)	VALUES (3,'Votre Situation Patrimoniale');
INSERT INTO public.section(id, libelle)	VALUES (4,'Formation / Expérience');
INSERT INTO public.section(id, libelle)	VALUES (5,'Aversion au risque');
INSERT INTO public.section(id, libelle)	VALUES (6,'Comportements');

INSERT INTO public.profil(id, libelle, description, variation, temps)VALUES (1, 'Prudent', '', '+/-5 %', '4 fois par an ou moins');
INSERT INTO public.profil(id, libelle, description, variation, temps)VALUES (2, 'Equilibré', '', '+/- 10 %', '1 fois par semaine');
INSERT INTO public.profil(id, libelle, description, variation, temps)VALUES (3, 'Dynamique', '', '+/- 25 %', '3 fois par semaine');
INSERT INTO public.profil(id, libelle, description, variation, temps)VALUES (4, 'Offensif', '', '+/- 35 %', 'Tous les jours');
INSERT INTO public.profil(id, libelle, description, variation, temps)VALUES (5, 'Trader', '', '+/- > 35 %', 'Plus d''1 Heure par jour');

INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (1,'Quel âge avez-vous ?', 1, 1);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (2,'Avez-vous des enfants à charge ?', 1, 2);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (3,'Quel est votre horizon d’investissement ?', 2, 3);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (4,'De combien de temps environ disposez-vous pour gérer vos investissements ?', 2, 4);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (5,'Quel est approximativement votre patrimoine global : immobilier, placements, liquidités, autres, etc. ?', 3, 5);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (6,'Quelle part de votre patrimoine souhaitez-vous investir ?', 3, 6);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (7,'Avez-vous fait des études financières ou assimilées ?', 4, 7);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (8,'Avez-vous suivi des formations ou lu des livres sur l''investissement financier ?', 4, 8);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (9,'Une perspective de performance élévée implique un risque de perte  important', 4, 9);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (10,'Un Warrant est ', 4, 10);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (11,'Quel est votre objectif d''investissement ?', 5, 11);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (12,'Quel niveau de performance annuelle envisagez-vous ?', 5, 12);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (13,'Pour un investissement de 10 000 € quel rapport gain / perte choisissez vous ?', 5, 13);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (14,'Qu''est ce qu''une perte significative selon vous ?', 5, 14);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (15,'Pensez-vous mieux conduire que 70% des conducteurs ?', 6, 15);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (16,'Préférez-vous investir  ', 6, 16);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (17,'Comment prenez-vous vos décisions d''investissement ? ', 6, 17);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (18,'Vous choisissez avec soin une action sur laquelle vos vous décidez à investir. Quelques jours après elle perd 20 %. Quelle est votre réaction ?', 6, 18);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (19,'Vous jouez gratuitement à un jeu. Que choisissez vous ?', 6, 19);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (20,'On vous propose un autre jeu mais cette fois vous devez investir 50 € pour participer. Que choisissez vous ?', 6, 20);
INSERT INTO public.question(id, libelle, "sectionId", numero)VALUES (21,'Vous marchez dans la rue et trouvez 50 € mais en arrivant chez vous vous constatez que votre portefeuille boursier baisse de 50 €. Quelle est votre première réaction ?', 6, 21);

INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (1,'Moins de 16 ans', 1,0,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (2,'De 16 à 60 ans', 1,4,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (3,'De 60 à 80 ans', 1,3,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (4,'Plus de 80 ans', 1,2,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (5,'Non', 2,4,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (6,'1', 2,4,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (7,'2', 2,3,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (8,'3 ou plus', 2,3,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (9,'Moins d''1 an', 3,1,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (10,'De 1 à 3 ans', 3,2,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (11,'De 3 à 5 ans', 3,3,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (12,'Au-delà de 5 ans', 3,4,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (13,'4 fois par an ou moins', 4,1,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (14,'1 fois par semaine', 4,2,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (15,'3 fois par semaine', 4,3,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (16,'Tous les jours', 4,4,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (17,'Plus de 2 heures par jour', 4,5,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (18,'Moins de 10 000 €', 5,3,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (19,'10 000 à 50 000 €', 5,4,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (20,'50 000 à 100 000 €', 5,4,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (21,'100 000 à 500 000 €', 5,4,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (22,'> 500 000 €', 5,4,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (23,'Moins de  10%', 6,4,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (24,'Environ 20 %', 6,3,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (25,'Environ 30 %', 6,2,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (26,'Environ 50 %', 6,2,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (27,'Plus de 50 % ', 6,1,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (28,'Oui', 7,4,3);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (29,'Non', 7,2,2);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (30,'Oui', 8,4,3);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (31,'Non', 8,2,2);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (32,'Oui', 9,4,3);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (33,'Non', 9,2,1);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (34,'Je ne sais pas', 9,0,2);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (35,'Un gros lézard', 10,null,1);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (36,'Un produit avec un effet de levier et un risque important de perdre la totalité du capital investi', 10,null,3);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (37,'Un produit structuré avec un risque de perte faible', 10,null,2);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (38,'Générer un complément de revenu', 11,3,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (39,'Etre autonome financièrement', 11,4 ,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (40,'Constituer un capital pour votre retraite', 11,2,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (41,'Transmettre mon capital', 11,2,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (42,'Environ 5 %', 12,1,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (43,'Environ 10 %', 12,2,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (44,'Environ 15 %', 12,3,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (45,'Environ 25 %', 12,4,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (46,'> 35 %', 12,5,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (47,'+/- 10%', 13,2,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (48,'+/-20%', 13,3,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (49,'+/-30%', 13,4,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (50,'+/-50%', 13,5,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (51,'8%', 14,1,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (52,'12%', 14,2,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (53,'20%', 14,3,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (54,'30%', 14,4,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (55,'Oui', 15,4,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (56,'Non', 15,2,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (57,'Je ne sais pas', 15,3,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (58,'Dans des sociétés bien connues', 16,2,2);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (59,'Dans des sociétés au centre de l''actualité', 16,3,1);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (60,'Dans des sociétés ou des produits que j''ai analysés en détail', 16,4,3);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (61,'En fonction d''un média spécialisé ou des recommandations d''un professionnel', 17,3,2);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (62,'J''investis pour le long terme, dans plusieurs sociétés dont le parcours boursier est solide', 17,3,3);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (63,'Je ne connais pas l''évolution des marchés financiers donc j''ai une stratégie et je n''y déroge pas', 17,4,3);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (64,'C''est une opportunité, j''en rachète le double', 18,3,2);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (65,'Tant que je n''ai pas vendu je n''ai pas perdu', 18,2,2);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (66,'J''ai peur, je la vends', 18,1,1);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (67,'Cela fait partie du risque et c''est intégré à mon scénario de départ.  Cela n''influence pas ma décision de gestion', 18,4,3);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (68,'Gagner 1000 € à coup sur', 19,1,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (69,'Avoir 50 % de chances de gagner 5 000 €', 19,2,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (70,'Avoir 10 % de chances de gagner 50 000 €', 19,4,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (71,'Je ne joue pas', 20,1,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (72,'70 % de chances de gagner 100 €', 20,2,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (73,'Avoir 50 % de chances de gagner 150 €', 20,3,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (74,'Avoir 30 % de chances de gagner 200 €', 20,4,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (75,'Quelle chance d''avoir trouvé 50 € !', 21,4,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (76,'Quel dommage…', 21,2,null);
INSERT INTO public.proposition(id,libelle, "questionId", "pointsProfil", "pointsTypeGestion") VALUES (77,'C''est une journée neutre', 21,3,null);


INSERT INTO public."supportInv"(id, libelle, description)VALUES (1, 'Compte Titre Ordinaire', 'https://www.amf-france.org/fr/espace-epargnants/comprendre-les-produits-financiers/supports-dinvestissement/compte-titres#:~:text=Le%20compte%2Dtitres%20ordinaire%20permet,passer%20des%20ordres%20de%20bourse.');
INSERT INTO public."supportInv"(id, libelle, description)VALUES (2, 'Compte PEA & Compte PEA-PME', 'https://www.amf-france.org/fr/espace-epargnants/comprendre-les-produits-financiers/supports-dinvestissement/pea-tout-savoir-sur-le-plan-depargne-en-actions-0#:~:text=PEA%20%3A%20tout%20savoir%20sur%20le%20plan%20d''%C3%A9pargne%20en%20actions,profitant%20de%20conditions%20fiscales%20avantageuses. & https://www.amf-france.org/fr/espace-epargnants/comprendre-les-produits-financiers/supports-dinvestissement/investir-en-actions-avec-le-pea-et-le-pea-pme-eti-0');
INSERT INTO public."supportInv"(id, libelle, description)VALUES (3, 'Assurance Vie', 'https://www.amf-france.org/fr/espace-epargnants/comprendre-les-produits-financiers/supports-dinvestissement/assurance-vie');
INSERT INTO public."supportInv"(id, libelle, description)VALUES (4, 'SCPI', 'https://www.amf-france.org/fr/espace-epargnants/comprendre-les-produits-financiers/placements-collectifs/immobilier-scpi-opci/scpi-un-autre-moyen-dinvestir-dans-limmobilier#:~:text=L''AMF%20exerce%20son%20r%C3%B4le,au%20long%20de%20leur%20vie.&text=Elle%20s''assure%20de%20l,informations%20d%C3%A9livr%C3%A9es%20%C3%A0%20l''investisseur.');
INSERT INTO public."supportInv"(id, libelle, description)VALUES (5, 'CFD', 'https://www.amf-france.org/fr/espace-epargnants/comprendre-les-produits-financiers/produits-complexes/cfd#:~:text=Les%20CFD%20(contracts%20for%20difference)%20sont%20des%20instruments%20financiers%20sp%C3%A9culatifs,que%20vous%20ne%20d%C3%A9tenez%20pas.');

INSERT INTO public."TL_proposition_support"(proposition_id, "supportInv_id")	VALUES (38, 1);
INSERT INTO public."TL_proposition_support"(proposition_id, "supportInv_id")	VALUES (38, 5);
INSERT INTO public."TL_proposition_support"(proposition_id, "supportInv_id")	VALUES (39, 5);
INSERT INTO public."TL_proposition_support"(proposition_id, "supportInv_id")	VALUES (39, 5);
INSERT INTO public."TL_proposition_support"(proposition_id, "supportInv_id")	VALUES (40, 2);
INSERT INTO public."TL_proposition_support"(proposition_id, "supportInv_id")	VALUES (40, 3);
INSERT INTO public."TL_proposition_support"(proposition_id, "supportInv_id")	VALUES (40, 4);
INSERT INTO public."TL_proposition_support"(proposition_id, "supportInv_id")	VALUES (41, 2);
INSERT INTO public."TL_proposition_support"(proposition_id, "supportInv_id")	VALUES (41, 3);


INSERT INTO public.produit(id, libelle)	VALUES (1,'OPCVM');
INSERT INTO public.produit(id,libelle)	VALUES (2,'Fonds Euro');
INSERT INTO public.produit(id,libelle)	VALUES (3,'Obligations d''Etat');
INSERT INTO public.produit(id,libelle)	VALUES (4,'Trackers / ETF');
INSERT INTO public.produit(id,libelle)	VALUES (5,'Actions : Grandes capitalisations');
INSERT INTO public.produit(id,libelle)	VALUES (6,'Fonds à formule (fonds garantis, fonds à promesse)');
INSERT INTO public.produit(id,libelle)	VALUES (7,'Trackers / ETF');
INSERT INTO public.produit(id,libelle)	VALUES (8,'Obligations d''Etat et privées');
INSERT INTO public.produit(id,libelle)	VALUES (9,'Actions : Grandes, moyennes et petites capitalisations');
INSERT INTO public.produit(id,libelle)	VALUES (10,'Certificats sans levier');
INSERT INTO public.produit(id,libelle)	VALUES (11,'Certificats avec et sans levier ');
INSERT INTO public.produit(id,libelle)	VALUES (12,'Levier < 2');
INSERT INTO public.produit(id,libelle)	VALUES (13,'Très petites capitalisations : Valeurs spéculatives type biotechnologies, Alternext, Growth, etc. ');
INSERT INTO public.produit(id,libelle)	VALUES (14,'Fonds Aria');
INSERT INTO public.produit(id,libelle)	VALUES (15,'FCIMT');
INSERT INTO public.produit(id,libelle)	VALUES (16,'OPCVM contractuels');
INSERT INTO public.produit(id,libelle)	VALUES (17,'FIP, FCPI');
INSERT INTO public.produit(id,libelle)	VALUES (18,'SCPI');
INSERT INTO public.produit(id,libelle)	VALUES (19,'Futures sans levier ou pour couverture');
INSERT INTO public.produit(id,libelle)	VALUES (20,'Options sans levier ou pour couverture');
INSERT INTO public.produit(id,libelle)	VALUES (21,'CFD sans Levier');
INSERT INTO public.produit(id,libelle)	VALUES (22,'Dérivés emetteurs');
INSERT INTO public.produit(id,libelle)	VALUES (23,'Levier < 4');
INSERT INTO public.produit(id,libelle)	VALUES (24,'Futures');
INSERT INTO public.produit(id,libelle)	VALUES (25,'Options ');
INSERT INTO public.produit(id,libelle)	VALUES (26,'CFD ');
INSERT INTO public.produit(id,libelle)	VALUES (27,'CFD levier < 4 ');
INSERT INTO public.produit(id,libelle)	VALUES (28,'Actions  : Grandes, moyennes et petites capitalisations');

INSERT INTO public.actif(id,libelle, ponderation)VALUES (1,'Monetaire', '');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (2,'Obligations & Prudent', '');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (3,'Obligations', '');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (4,'Actions & Prudent', 'Maximum 10%');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (5,'Actions & Equilibre', 'Maximum 30%');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (6,'Or', '');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (7,'Actions & Dynamique', 'Jusqu''à 70%');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (8,'Gestion Alternative', '');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (9,'Produits de défiscalisation', '');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (10,'Pierre papier', '');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (11,'Produits Dérivés & Dynamique', '');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (12,'Matières premières (restreint)', '');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (13,'Actions & Offensif', 'Jusqu''à 90%');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (14,'Produits Dérivés', '');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (15,'Matières premières', '');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (16,'FOREX', '');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (17,'Crypto-monnaies & Offensif', '');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (18,'Actions & Trader', 'Jusqu''à 70%');
INSERT INTO public.actif(id,libelle, ponderation)VALUES (19,'Crypto-monnaies & Trader', '');

INSERT INTO public.conseil(id, libelle, description)VALUES (1, 'Formez-vous','La bourse, comme tous les domaines, recquiert un apprentissage, variable en fonction du niveau de compréhension et des performances que l''on souhaite obtenir. Commencez à investir et montez en compétence progressivement en comprenenant les mécanismes, les marchés, les produits. Commencez à travailler sans effet de levier. Il ne vous viendrait pas à l''esprit de  commencer la compétition automobile par la Formule 1 !');
INSERT INTO public.conseil(id, libelle, description)VALUES (2, 'Informez-vous','Suivez, même rapidement, l’actualité économique au travers de la presse financière, ou consultez les chaines de TV, les radios économiques, ou encore les sites spécialisés, des news letters, des analyses, etc. Si vous désirez être plus actifs, informez-vous sur le calendrier économique (Saison des résultats, publications macro et microéconomiques, réunions des Banques Centrales, etc.)');
INSERT INTO public.conseil(id, libelle, description)VALUES (3, 'Investissez exclusivement de l’argent dont vous n’avez pas besoin immédiatement','Les marchés financiers évoluent en fonction de très nombreux facteurs et sont imprévisibles.  Il ne faut donc pas avoir à retirer les sommes investies subitement au risque de devoir le faire au pire moment. Vos investissements devront donc dépendre de vos disponibilités et besoins, à la fois immédiats et ultérieurs.');
INSERT INTO public.conseil(id, libelle, description)VALUES (4, 'Laissez courir les profits et coupez les pertes rapidement','La grande majorité des investisseurs fait l’inverse. Notre nature nous pousse à ne pas vouloir reconnaître ses erreurs et à conserver des postions perdantes. C’est la première cause d’échec des investisseurs qui prennent rapidement leurs bénéfices et conservent des positions perdantes. La finance comportementale explique très bien ce biais naturel de l’humain (dit effet de disposition) qui fait l''échec principal des investisseurs. Saviez-vous qu''en moyenne un gain de 100 € procure autant d''émotions qu''une perte de 200 € ?');
INSERT INTO public.conseil(id, libelle, description)VALUES (5, 'Ne renforcez jamais une position perdante','Même si on n’achète jamais au plus bas, le fait de pouvoir acheter plus bas est déjà signe que le point d’entrée choisi n’a pas été optimal. Renforcer une postion perdante équivaut à augmenter son risque. On ne renforce que des positions gagnantes en diminuant la taille à chaque fois (pyramidage). On respectera tout de même les règles de diversification afin qu’une ligne renforcée ne représente pas à elle seule une part trop significative du portefeuille.  ');
INSERT INTO public.conseil(id, libelle, description)VALUES (6, 'Mettez des ordres de protection et ne les éloignez pas','Le fait d’utiliser ou non des ordres stop (ou à seuil de déclenchement) est parfois controversé. Cela dépend aussi de l’horizon d’investissement. Si l’on décide de conserver une position quelques soient les circonstances, on risque de perdre tout son capital (Cf. Alcatel, Eurotunnel, etc.). Solder une position perdante permet de mieux se replacer sur un autre titre, voire sur le même,  ou de placer son capital sur un autre actif. Monopoliser des liquidités fait perdre des opportunités. Eloigner un ordre de protection modifie votre exposition au risque et témoigne  d’une défaillance de la stratégie. ');
INSERT INTO public.conseil(id, libelle, description)VALUES (7, 'Diversifiez','C''est le principe de "ne pas mettre tous ses œufs dans le même panier". Plus on répartit ses investissements, moins on sera exposé à des accidents de marché. Il convient donc d''investir dans différents types d''actifs  (actions, obligations, matières premières, changes ou forex, etc.), différentes zones géographiques et différents secteurs. L''analyse intermarchés permet de mieux appréhender ce sujet. Comme dans tous les domaines l''excès est nuisible. Un portefeuille trop diversifé risque de ne pas progresser.');
INSERT INTO public.conseil(id, libelle, description)VALUES (8, 'Méfiez-vous d''un trop fort consensus, du tuyau d''un ami, des interventions précédant les publications de résultats. Pensez à faire simple.','Si la grande majorité des investisseurs est d’accord c’est qu’il y a consensus, il n''y a donc plus de nouveaux entrants pour prolonger la tendance, qu''elle soit haussière ou baissière. Schématiquement, plus les investisseurs sont nombreux à penser que le marché va monter, plus ils ont acheté des titres. Il reste donc peu de liquidités ou de nouveaux acheteurs pour alimenter le mouvement. Le marché risque donc de stagner ou de baisser. Si vous savez qu’une société va réaliser un très bon exercice, soit vous avez une information privilégiée et il est interdit de s’en servir (délit d’initié) soit d’autres le savent et il est trop tard pour acheter. Après une grosse tempête, les actions d''une société qui vend des tuiles vont probablement monter.');
INSERT INTO public.conseil(id, libelle, description)VALUES (9, 'Investissez dans le sens de la tendance','Prenez du recul en regardant des graphiques en unité de temps supérieure à votre unité de temps favorite. Par exemple pour travailler en 3 mn vérifiez la tendance en 15 mn. ');
INSERT INTO public.conseil(id, libelle, description)VALUES (10, 'Ayez un scénario et respectez-le','L’être humain, par nature, n’est pas adapté à l’investissement boursier, il n''aime pas le risque et réagit donc de façon émotionelle quant il investit son argent. Le seul moyen de ne pas être le jeu de ses émotions est donc d’avoir un plan avant d''investir et de s’y tenir faute de quoi on multipliera les erreurs. ');
INSERT INTO public.conseil(id, libelle, description)VALUES (11, 'Respectez les règles du Money Management','Au moment de prendre vos décisions d''investissement, envisagez la possibilité d''une évolution défavorable et de ses conséquences sur votre capital. Ayez un objectif de gain mais aussi de perte maximale. Le money management consiste à limiter l’exposition de son capital sur un actif ou une opération, en définissant le rapport entre  probabilité de succès et risque. ');
INSERT INTO public.conseil(id, libelle, description)VALUES (12, 'Préservez votre capital ','Cela semble évident mais c''est une des principales causes d''échec en trading. Appliquez par exemple, la règle de "6 % de perte maximale du capital en un mois". Ou encore celle de "2% de perte du capital par opération". Ces règles sont propres à chaque trader et peuvent être ajustées en fonction de votre profil, de votre capital ou d''autres critères.');
INSERT INTO public.conseil(id, libelle, description)VALUES (13, 'Appliquez un ratio risque / rendement de 1 pour 3 au minimum','Au moment d’investir, sans être pessimiste, il est indispensable d’être réaliste et d’envisager le cas de figure le plus défavorable. Cela permet de déterminer la probabilité de gain d’une opération par rapport à son risque. Le ratio idéal minimal est d’1 pour 3. C’est-à-dire que le gain potentiel d’une opération doit représenter au moins 3 fois la perte potentielle. Evidemment un ratio supérieur est d''autant plus favorable. Un ratio d’1 pour 2 est toléré dans certains cas ou sur certains marchés. Si le ratio est inférieur on ne prend pas position. ');
INSERT INTO public.conseil(id, libelle, description)VALUES (14, 'Constituez un journal de trading','Conservez une trace de vos opérations, dans un ficher excel ou un journal de trading, avec un maximum d''informations, pour identifier les opérations profitables et les perdantes, dans le but de vous améliorer.');

INSERT INTO public."typeGestion"(id, libelle, description)VALUES (1, 'Déléguée', 'Vous déterminez des objectifs d''investissements avec un professionnel qui se charge de l''exécution de la stratégie. Vous êtes régulièrement informé de la performance mais n''intervenez pas dans la prise de décision.');
INSERT INTO public."typeGestion"(id, libelle, description)VALUES (2, 'Assistée / Conseillée ', 'Vous déterminez des objectifs d''investissements avec un professionnel qui vous guide mais vous restez décisionnaire et exécutez vous-même les opérations.');
INSERT INTO public."typeGestion"(id, libelle, description)VALUES (3, 'Autonome', 'Vous déterminez vos objectifs d''investissements et exécutez vous-même les opérations.');

INSERT INTO public."TL_profil_conseil"(profil_id, conseil_id)VALUES (5, 9);
INSERT INTO public."TL_profil_conseil"(profil_id, conseil_id)VALUES (5, 10);
INSERT INTO public."TL_profil_conseil"(profil_id, conseil_id)VALUES (5, 11);
INSERT INTO public."TL_profil_conseil"(profil_id, conseil_id)VALUES (5, 12);
INSERT INTO public."TL_profil_conseil"(profil_id, conseil_id)VALUES (5, 13);
INSERT INTO public."TL_profil_conseil"(profil_id, conseil_id)VALUES (5, 14);

INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (1, 1);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (1, 2);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (1, 4);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (2, 1);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (2, 3);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (2, 5);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (2, 6);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (3, 1);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (3, 3);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (3, 7);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (3, 8);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (3, 9);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (3, 10);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (3, 11);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (3, 12);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (4, 1);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (4, 3);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (4, 13);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (4, 8);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (4, 9);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (4, 10);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (4, 14);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (4, 15);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (4, 16);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (4, 17);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (5, 18);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (5, 14);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (5, 15);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (5, 16);
INSERT INTO public."TL_profil_actif"(profil_id, actif_id)VALUES (5, 19);

INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (1,1);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (2,1);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (3,2);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (1,2);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (4,2);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (5,4);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (6,4);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (1,4);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (7,4);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (8,3);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (1,3);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (7,3);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (9,5);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (6,5);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (1,5);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (7,5);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (10,5);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (10,6);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (9,7);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (6,7);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (1,7);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (7,7);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (11,7);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (12,7);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (13,7);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (14,8);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (15,8);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (16,8);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (17,9);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (18,10);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (19,11);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (20,11);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (21,11);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (22,11);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (21,12);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (22,12);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (9,13);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (6,13);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (1,13);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (7,13);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (11,13);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (23,13);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (13,13);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (24,14);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (25,14);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (26,14);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (22,14);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (27,15);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (22,15);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (26,16);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (22,16);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (1,17);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (26,17);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (28,18);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (6,18);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (1,18);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (7,18);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (11,18);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (23,18);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (13,18);
INSERT INTO public."TL_actif_produit"(produit_id, actif_id) VALUES (26,19);
