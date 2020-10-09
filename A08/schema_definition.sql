create database A08;

use A08;

create table student(
    roll_no varchar(16) primary key,
    name varchar(32) not null,
    admission_date date not null,
    branch enum ('CS', 'ENTC', 'IT'),
    percentage double check ( percentage>=0 and percentage<=100 ),
    status enum ('PASS','DROP')
);

create table alumni(
    roll_no varchar(16) primary key,
    name varchar(32) not null,
    graduation_date date default (curdate())
);
