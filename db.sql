
 CREATE DATABASE demo;
  CREATE TABLE login (
 id uuid,
 email text,
 password varchar);


  CREATE TABLE loginUser (
 id uuid,
 name text,
 number varchar,
 address varchar,
 cart varchar );

 CREATE TABLE history (
id uuid,
items varchar );