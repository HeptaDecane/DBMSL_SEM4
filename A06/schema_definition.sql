create database A06;

use A06;

create table employee(
    emp_id int not null primary key,
    emp_name varchar(16) not null,
    date_of_join date not null,
    salary int
);

create table employee_temp(
        emp_id int not null primary key,
        emp_name varchar(16) not null,
        date_of_join date not null default (SYSDATE())
);
d
