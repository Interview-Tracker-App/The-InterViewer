--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3 (Ubuntu 11.3-1.pgdg18.04+1)
-- Dumped by pg_dump version 11.5

-- Started on 2019-09-11 16:56:10 PDT

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

CREATE TABLE Interview (
	id serial PRIMARY KEY,
	userid INT,
	company VARCHAR,
	interviewtime TIMESTAMP,
	source VARCHAR,
	contactname VARCHAR,
	contactinfo VARCHAR,
	jobrole VARCHAR,
	joburl VARCHAR,
	applicationtime TIMESTAMP,
	notes VARCHAR,
	status INT
);

CREATE TABLE Users (
	id serial PRIMARY KEY,
	email VARCHAR,
	imgurl VARCHAR,
	name VARCHAR,
	token VARCHAR
);

CREATE TABLE UserAlgos (
	userid INT,
	algoid INT
);

CREATE TABLE Codes (
	id serial PRIMARY KEY,
	title VARCHAR,
	algoid INT,
	code VARCHAR,
	createdAt TIMESTAMP
);

CREATE TABLE Algos (
	id serial PRIMARY KEY,
	title VARCHAR,
	problem VARCHAR,
	notes VARCHAR,
	createdAt TIMESTAMP,
	timescompleted INT
);


INSERT INTO users (email, imgurl, name, token) VALUES ('yh@gmail.com', 'www.google.com', 'yeunha kim', '123456');
INSERT INTO users (email, imgurl, name, token) VALUES ('sal@gmail.com', 'www.google.com', 'sal saluga', '654321');
INSERT INTO users (email, imgurl, name, token) VALUES ('joe@gmail.com', 'www.google.com', 'park sang min', '000000');

INSERT INTO algos (title, problem, notes, createdAt, timescompleted) VALUES ('twosum', 'solve this algo', 'help two', '2022-06-21 19:10:25-07', 2);
INSERT INTO algos (title, problem, notes, createdAt, timescompleted) VALUES ('threesum', 'solve this algo', 'help three', '2022-06-21 19:10:25-07', 3);
INSERT INTO algos (title, problem, notes, createdAt, timescompleted) VALUES ('foursum', 'solve this algo', 'help four', '2022-06-21 19:10:25-07', 4);
INSERT INTO algos (title, problem, notes, createdAt, timescompleted) VALUES ('fivesum', 'solve this algo', 'help five', '2022-06-21 19:10:25-07', 5);
INSERT INTO algos (title, problem, notes, createdAt, timescompleted) VALUES ('sixsum', 'solve this algo', 'help six', '2022-06-21 19:10:25-07', 6);
INSERT INTO algos (title, problem, notes, createdAt, timescompleted) VALUES ('sevensum', 'solve this algo', 'help seven', '2022-06-21 19:10:25-07', 7);

INSERT INTO useralgos (userid, algoid) VALUES (1, 1);
INSERT INTO useralgos (userid, algoid) VALUES (1, 3);
INSERT INTO useralgos (userid, algoid) VALUES (2, 2);
INSERT INTO useralgos (userid, algoid) VALUES (2, 5);
INSERT INTO useralgos (userid, algoid) VALUES (3, 4);
INSERT INTO useralgos (userid, algoid) VALUES (3, 6);


INSERT INTO codes (title, algoid, code, createdAt) VALUES ('recursive', '2', 'console.log(hellow)', '2022-06-21 19:10:25-07');
INSERT INTO codes (title, algoid, code, createdAt) VALUES ('iterative', '2', 'console.log(hellow)', '2022-06-21 19:10:25-07');
INSERT INTO codes (title, algoid, code, createdAt) VALUES ('O(1)', '2', 'console.log(hellow)', '2022-06-21 19:10:25-07');

INSERT INTO codes (title, algoid, code, createdAt) VALUES ('recursive5', '5', 'console.log(hellow)', '2022-06-21 19:10:25-07');
INSERT INTO codes (title, algoid, code, createdAt) VALUES ('iterative5', '5', 'console.log(hellow)', '2022-06-21 19:10:25-07');
INSERT INTO codes (title, algoid, code, createdAt) VALUES ('O(1)', '5', 'console.log(hellow)', '2022-06-21 19:10:25-07');

INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (3, 'meta','2022-06-21 19:10:25-07', 'linkedin.com', 'caitlyn', '12345123', 'ceo', 'linkedin.com/ceo', '2022-06-21 19:10:25-07', 'i hope i get this job' );
INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (2, 'microsoft','2022-06-21 19:10:25-07', 'linkedin.com', 'caitlyn', '12345123', 'ceo', 'linkedin.com/ceo', '2022-06-21 19:10:25-07', 'i hope i get this job' );
INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (1, 'google','2022-06-21 19:10:25-07', 'linkedin.com', 'caitlyn', '12345123', 'ceo', 'linkedin.com/ceo', '2022-06-21 19:10:25-07', 'i hope i get this job' );
INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (3, 'tinder','2022-06-21 19:10:25-07', 'linkedin.com', 'caitlyn', '12345123', 'ceo', 'linkedin.com/ceo', '2022-06-21 19:10:25-07', 'i hope i get this job' );
INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (2, 'google','2022-06-21 19:10:25-07', 'linkedin.com', 'caitlyn', '12345123', 'ceo', 'linkedin.com/ceo', '2022-06-21 19:10:25-07', 'i hope i get this job' );
INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (1, 'amazon','2022-06-21 19:10:25-07', 'linkedin.com', 'caitlyn', '12345123', 'ceo', 'linkedin.com/ceo', '2022-06-21 19:10:25-07', 'i hope i get this job' );
INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (3, 'google','2022-06-21 19:10:25-07', 'linkedin.com', 'caitlyn', '12345123', 'ceo', 'linkedin.com/ceo', '2022-06-21 19:10:25-07', 'i hope i get this job' );
INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (2, 'apple','2022-06-21 19:10:25-07', 'linkedin.com', 'caitlyn', '12345123', 'ceo', 'linkedin.com/ceo', '2022-06-21 19:10:25-07', 'i hope i get this job' );
INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (1, 'discord','2022-06-21 19:10:25-07', 'linkedin.com', 'caitlyn', '12345123', 'ceo', 'linkedin.com/ceo', '2022-06-21 19:10:25-07', 'i hope i get this job' );

CREATE TABLE Interview (
	id serial PRIMARY KEY,
	userid INT,
	company VARCHAR,
	interviewtime TIMESTAMP,
	source VARCHAR,
	contactname VARCHAR,
	contactinfo VARCHAR,
	jobrole VARCHAR,
	joburl VARCHAR,
	applicationtime TIMESTAMP,
	notes VARCHAR,
	status INT
);


-- ALTER TABLE public.people ADD CONSTRAINT "people_fk0" FOREIGN KEY ("species_id") REFERENCES  public.species("_id");
-- ALTER TABLE public.people ADD CONSTRAINT "people_fk1" FOREIGN KEY ("homeworld_id") REFERENCES  public.planets("_id");


-- ALTER TABLE  public.people_in_films ADD CONSTRAINT "people_in_films_fk0" FOREIGN KEY ("person_id") REFERENCES public.people("_id");
-- ALTER TABLE  public.people_in_films ADD CONSTRAINT "people_in_films_fk1" FOREIGN KEY ("film_id") REFERENCES  public.films("_id");


-- ALTER TABLE  public.species ADD CONSTRAINT "species_fk0" FOREIGN KEY ("homeworld_id") REFERENCES  public.planets("_id");


-- ALTER TABLE  public.species_in_films ADD CONSTRAINT "species_in_films_fk0" FOREIGN KEY ("film_id") REFERENCES  public.films("_id");
-- ALTER TABLE  public.species_in_films ADD CONSTRAINT "species_in_films_fk1" FOREIGN KEY ("species_id") REFERENCES  public.species("_id");

-- ALTER TABLE  public.planets_in_films ADD CONSTRAINT "planets_in_films_fk0" FOREIGN KEY ("film_id") REFERENCES  public.films("_id");
-- ALTER TABLE  public.planets_in_films ADD CONSTRAINT "planets_in_films_fk1" FOREIGN KEY ("planet_id") REFERENCES  public.planets("_id");

-- ALTER TABLE  public.pilots ADD CONSTRAINT "pilots_fk0" FOREIGN KEY ("person_id") REFERENCES public.people("_id");
-- ALTER TABLE  public.pilots ADD CONSTRAINT "pilots_fk1" FOREIGN KEY ("vessel_id") REFERENCES  public.vessels("_id");

-- ALTER TABLE  public.vessels_in_films ADD CONSTRAINT "vessels_in_films_fk0" FOREIGN KEY ("vessel_id") REFERENCES  public.vessels("_id");
-- ALTER TABLE  public.vessels_in_films ADD CONSTRAINT "vessels_in_films_fk1" FOREIGN KEY ("film_id") REFERENCES  public.films("_id");

-- ALTER TABLE  public.starship_specs ADD CONSTRAINT "starship_specs_fk0" FOREIGN KEY ("vessel_id") REFERENCES  public.vessels("_id");

