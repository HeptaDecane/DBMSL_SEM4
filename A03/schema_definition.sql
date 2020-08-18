create database A03;

use A03;

create table customer(
    cust_no int not null ,
    cust_fname varchar(64) not null ,
    cust_lname varchar(64) not null ,
    cust_company varchar(64) ,
    cust_addr varchar(255) not null ,
    city varchar(64) not null,
    cust_phone varchar(12) not null
);

describe customer;

create table orders(
    order_no int not null,
    cust_no int not null ,
    ISBN varchar(16) not null ,
    qty int not null ,
    odate date
);

describe orders;

create table book(
    ISBN varchar(16) not null ,
    title varchar(32) not null ,
    unit_price int not null ,
    author_no int not null ,
    publisher_no int not null ,
    pub_year int not null
);

describe book;

create table author(
    author_no int not null ,
    author_name varchar(64) not null ,
    country varchar(32) not null
);

describe author;

create table publisher(
    publisher_no int not null ,
    publisher_name varchar(64) not null ,
    publisher_addr varchar(255) not null ,
    year int not null
);

describe publisher;


alter table customer add primary key(cust_no);
alter table orders add primary key(order_no);
alter table book add primary key(ISBN);
alter table author add primary key (author_no);
alter table publisher add primary key(publisher_no);

alter table orders add constraint fk_cust_no
    foreign key (cust_no) references customer(cust_no)
    	on delete cascade;

alter table orders add constraint fk_ISBN
    foreign key (ISBN) references book(ISBN)
    	on delete cascade;

alter table book add constraint fk_author_no
    foreign key (author_no) references author(author_no)
    	on delete cascade;

alter table book add constraint fk_publisher_no
    foreign key (publisher_no) references publisher(publisher_no)
    	on delete cascade;


