use A03;

# 02. Display all customer details with city pune and mumbai and customer first name starting with 'p' or 'h'.
SELECT * FROM customer 
WHERE 
city='Mumbai'
or
city='Pune '
or
cust_fname like 'P%'
or
cust_fname like 'H%';

# 03. lists the number of different customer cities.
SELECT DISTINCT city FROM customer;

# 04. Give 5% increase in price of the books with publishing year 2019.	 
UPDATE book SET
unit_price = unit_price*1.05
WHERE pub_year=2019;

# 05. Delete customer details living in pune.
DELETE FROM customer WHERE city = 'Pune';

# 06. Find the names of authors living in India or Australia .
select author_name from author WHERE country='India' 
union
select author_name from author WHERE country='Australia';

# 07. Find the publishers who are established in year 2015 as well as in 2016
select * from publisher 
WHERE year=2015 and year=2016;
 	
# 08(i). Find the book having maximum price
SELECT * from book ORDER BY unit_price DESC LIMIT 1;
# or
select  * from book where unit_price = (select max(unit_price) from book);

# 08(ii). Find titles of book having price between 300 and 400.
select * from book 
WHERE unit_price between 300 and 400;

# 09. Display all titles of books with price and published year in decreasing order of publishing year.	
SELECT * from book
ORDER BY pub_year desc;

# 10. Display title,author_no and publisher_no of all books published in 2000,2004,2006.
select author_no,publisher_no FROM book 
where pub_year in (2000,2004,2018);
