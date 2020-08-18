use A03;

SELECT * FROM customer 
WHERE 
	city='Mumbai'
	or
	city='Pune '
	or
	cust_fname like 'P%'
	or
	cust_fname like 'H%';

SELECT DISTINCT city FROM customer;

UPDATE book SET
	unit_price = unit_price*1.05
	WHERE pub_year=2019;
	
DELETE FROM customer WHERE city = 'Pune';


select * from book 
WHERE unit_price>=300 or unit_price<=400;

select author_name from author WHERE country='India' 
union
select author_name from author WHERE country='Australia';

select * from publisher 
 	WHERE year=2015 and year=2016;

SELECT * from book ORDER BY unit_price DESC LIMIT 1;

select * from book 
WHERE unit_price between 300 and 400;
	
SELECT * from book
	ORDER BY unit_price desc,pub_year desc;

select author_no,publisher_no FROM book 
where pub_year in (2000,2004,2018);
	
