create database A07;

use A07;

create table customer(
    cust_id int not null primary key,
    name varchar(32) not null,
    purchase int not null default 0
);

create table category(
    cust_id int not null primary key,
    name varchar(32) not null,
    class enum('BASIC','SILVER','GOLD','PLATINUM') not null default 'BASIC'
);

alter table category add constraint fk_cust_id
foreign key (cust_id) references customer(cust_id)
on delete cascade ;

