create database A05;

use A05;

create table customer(
    customer_id int not null ,
    name varchar(32) not null ,
    deadline date not null ,
    scheme varchar(32),
    status varchar(1) not null

);

create table fine(
    customer_id int not null ,
    payment_date date not null ,
    amount int not null
);

alter table customer add primary key (customer_id);

alter table fine add primary key (customer_id);

alter table fine add constraint fk_customer_id
foreign key (customer_id) references customer(customer_id)
on delete cascade ;

