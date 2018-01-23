createdb demo;

CREATE TABLE demouser (
  id uuid,
  email text UNIQUE,
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
insert into product values (
  '7a52c9d0-1a96-4902-bdcc-bce9bdf044a2',
  'https://images-na.ssl-images-amazon.com/images/I/81PiNKhm0-L._SL1500_.jpg',
  '100.00',
  'Product',
  '100'
);