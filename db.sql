CREATE DATABASE demo;

CREATE TABLE user (
  id uuid,
  username text,
  password varchar,
  name text,
  number varchar,
  address varchar,
  cart varchar
);

CREATE TABLE product (
  id uuid,
  img varchar,
  rate varchar,
  details varchar,
  quantity varchar
);

insert into product values (
  '19815cc3-4d10-4dde-ab57-663dcfa15734',
  'https://www.freightcenter.com/content/img/shipping-applicances-via-freight.jpg',
  '100.00',
  'Product',
  '100'
);