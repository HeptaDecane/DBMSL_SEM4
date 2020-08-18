use A03;

# 02
SELECT * FROM customer 
WHERE 
	city='Mumbai'
	or
	city='Pune '
	or
	cust_fname like 'P%'
	or
	cust_fname like 'H%';

# 03
SELECT DISTINCT city FROM customer;

# 04
UPDATE book SET
	unit_price = unit_price*1.05
	WHERE pub_year=2019;

# 05	
DELETE FROM customer WHERE city = 'Pune';

# 06
select author_name from author WHERE country='India' 
union
select author_name from author WHERE country='Australia';

# 07
select * from publisher 
 	WHERE year=2015 and year=2016;
 	
# 08(i)
SELECT * from book ORDER BY unit_price DESC LIMIT 1;
# or
select  * from book where unit_price = (select max(unit_price) from book);

# 08(ii)
select * from book 
WHERE unit_price between 300 and 400;

# 09	
SELECT * from book
	ORDER BY unit_price desc,pub_year desc;

# 10
select author_no,publisher_no FROM book 
where pub_year in (2000,2004,2018);
