use A04;

# 1. Find Customer details and order details using NATURAL JOIN.
select cust_no,cust_fname,cust_lname,ISBN,qty,odate
from customer natural join orders;

# 2. Find the book_ title, author_name, country.
select title,author_name,country
from book inner join author
on book.author_no = author.author_no;

# 3. Find the customer ID, name and order_no of customers who have never placed an order.
select customer.cust_no,cust_fname,cust_lname,order_no
from  customer left join orders
on customer.cust_no = orders.cust_no
where order_no is null;

# 4. Find the Title, ISBN, order_no of the books for which order is not placed.
select book.ISBN,title,order_no
from orders right join book
on book.ISBN = orders.ISBN
where order_no is null;

# 5. Display cust_fname, title,author_no,publisher_year where ISBN=1234.
select cust_fname,title,author_no,pub_year
from customer join orders
on customer.cust_no = orders.cust_no
join book on book.ISBN = orders.ISBN
where book.ISBN='0139137084';

# 6. Display the total number of books and customer name.
select cust_fname, cust_lname, sum(qty)
from customer natural join orders
group by cust_no;

# 7. List the cust_id, order_no and ISBN with books having title 'mysql'.
select c.cust_no,order_no,b.ISBN,title
from book b left join orders
on b.ISBN = orders.ISBN
left join customer c
on c.cust_no = orders.cust_no
where b.title in (select title from book where title like '%mysql%');

# 8. Find the names of all the companies that ordered books in the year 2015
select cust_company,order_no,ISBN
from orders inner join customer c
on c.cust_no = orders.cust_no
where cust_company is not null and
odate in (select odate from orders where odate like '2015%');

# 9. Create view showing the author and book details.
create view book_display as
select ISBN, title, pub_year, author_name
from book join author
on book.author_no = author.author_no;

select * from book_display;


# 10. Perform Manipulation on simple view-Insert, update, delete, drop view.
create view author_public as
select author_no, author_name
from author;

# insert
insert into author_public
values (11,'Sumita Arora');

# update
update author_public set
author_name = 'William Stallings'
where author_no = 11;

# delete
delete from author_public
where author_no = 11;

# drop
drop view author_public;

