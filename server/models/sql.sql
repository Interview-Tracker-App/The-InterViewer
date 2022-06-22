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
	username VARCHAR,
	password VARCHAR,
	token VARCHAR
);
-- CREATE TABLE Users (
-- 	id serial PRIMARY KEY,
-- 	email VARCHAR,
-- 	imgurl VARCHAR,
-- 	name VARCHAR,
-- 	token VARCHAR
-- );

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


INSERT INTO users (email, imgurl, name, token) VALUES ('yeunha@gmail.com', 'www.google.com/yeunhaimg', 'Yeunha Kim', '123456');
INSERT INTO users (email, imgurl, name, token) VALUES ('sal@gmail.com', 'www.google.com/salimg', 'Salvatore Saluga', '654321');
INSERT INTO users (email, imgurl, name, token) VALUES ('joe@gmail.com', 'www.google.com/joeimg', 'Park Sang Min', '385686');
INSERT INTO users (email, imgurl, name, token) VALUES ('thefinalboss@gmail.com', 'www.google.com/final_boss_img', 'Kenny B', '237423');
INSERT INTO users (email, imgurl, name, token) VALUES ('kat@outlook.com', 'www.google.com/katpix', 'Kat Athay', '123865');

INSERT INTO algos (title, problem, notes, createdAt, timescompleted) VALUES ('TwoSum', 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.', 'Solutions & Notes', '2022-06-08 19:10:25-07', 2);
INSERT INTO algos (title, problem, notes, createdAt, timescompleted) VALUES ('Palindrome Number', 'Given an integer x, return true if x is palindrome integer. An integer is a palindrome when it reads the same backward as forward. For example, 121 is a palindrome while 123 is not.', 'Solutions & Notes', '2022-06-10 11:38:25-07', 3);
INSERT INTO algos (title, problem, notes, createdAt, timescompleted) VALUES ('Reverse Integer', 'Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. Assume the environment does not allow you to store 64-bit integers (signed or unsigned).', 'Solutions & Notes', '2022-06-12 10:50:25-07', 4);
INSERT INTO algos (title, problem, notes, createdAt, timescompleted) VALUES ('Longest Common Prefix', 'Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".', 'Solutions & Notes', '2022-06-16 08:45:25-07', 5);
INSERT INTO algos (title, problem, notes, createdAt, timescompleted) VALUES ('Swap Nodes in Pairs', 'Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the nodes of the list (i.e., only nodes themselves may be changed.)', 'Solutions & Notes', '2022-06-19 21:33:25-07', 6);
INSERT INTO algos (title, problem, notes, createdAt, timescompleted) VALUES ('Three Sum Closest', 'Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.', 'Solutions & Notes', '2022-06-21 19:11:25-07', 7);
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

INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (3, 'Meta','2022-06-10 12:00:00-07', 'LinkedIn', 'Justin', '(509)234-5123', 'Software Engineer II', 'linkedin.com/job_posting123', '2022-06-01 19:10:25-07', 'Notes' );
INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (2, 'Microsoft','2022-06-14 18:00:00-07', 'Referral', 'Kai', '(382)916-7361', 'Software Engineer II', 'Referral', '2022-06-12 18:27:38-07', 'Notes' );
INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (1, 'Google','2022-06-16 11:30:00-07', 'LinkedIn', 'Ken', '(612)383-9318', 'Software Engineer - Mid', 'linkedin.com/job_posting144', '2022-06-14 11:45:32-07', 'Notes' );
INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (3, 'Tinder','2022-06-17 14:30:00-07', 'Referral', 'Adam', '(701)532-9123', 'Full-Stack Software Developer', 'Referral', '2022-06-15 09:15:31-07', 'Notes' );
INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (2, 'Google','2022-06-19 11:30:00-07', 'LinkedIn', 'Ken', '(612)383-9318', 'Software Engineer - Mid', 'linkedin.com/job_posting144', '2022-06-16 11:19:38-07', 'Notes' );
INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (1, 'Amazon','2022-06-21 18:30:00-07', 'Indeed', 'Michael', '(273)873-9176', 'Software Engineer III', 'indeed.com/job_posting199', '2022-06-17 18:17:19-07', 'Notes' );
INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (3, 'Microsoft','2022-06-21 08:45:00-07', 'LinkedIn', 'Kai', '(382)916-7361', 'Software Engineer II', 'linkedin.com/job_posting155', '2022-06-18 08:40:25-07', 'Notes' );
INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (2, 'Apple','2022-06-22 09:00:00-07', 'Referral', 'Caitlin', '(751)581-8271', 'Software Engineer II - Front End', 'referral', '2022-06-18 15:32:18-07', 'Notes' );
INSERT INTO interview (userid, company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes) VALUES (1, 'Discord','2022-06-22 18:30:00-07', 'Company Website', 'Katrina', '(811)731-3714', 'Software Engineer II - Back End', 'discord.com/careers', '2022-06-21 21:03:18-07', 'Notes' );

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

