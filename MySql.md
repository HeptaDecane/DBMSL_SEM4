﻿## DDL Statements
### Databases
```sql
# create
CREATE DATABASE database_name;

# switch
USE database_name;

# delete
DROP DATABASE database_name;

# list all
SHOW DATABASES;

```

### Tables
```sql
# create
CREATE TABLE table_name(
	column_name datatype,
	column_name datatype
);

# delete
DROP TABLE table_name;

# rename
ALTER TABLE table_name RENAME new_table_name

# list all
SHOW TABLES;

# describe
DESCRIBE table_name;

```

### Views
>A view is a virtual table based on the result-set of an SQL statement,  
>The fields in a view are fields from one or more real tables in the database.
```sql
# create
CREATE VIEW view_name AS
	SELECT column_name(s) FROM table_name
		WHERE (<condition>);

# delete 
DROP VIEW view_name;

# alter
ALTER VIEW view_name AS
	SELECT column_name(s) FROM table_name
		WHERE (<condition>);

# describe
DESCRIBE view_name;

```

### Columns
```sql
# add
ALTER TABLE table_name ADD column_name datatype;

# rename
ALTER TABLE table_name RENAME COLUMN old_name TO new_name;

# delete
ALTER TABLE table_name DROP column_name;

# modify datatype, constraints
ALTER TABLE table_name MODIFY column_name datatype;

```

### Primary Key
```sql
# alongwith column creation
CREATE TABLE table_name(
	column_name1 datatype PRIMARY KEY,
	column_name2 datatype,
	column_name3 datatype
);

# within create table
CREATE TABLE table_name(
	column_name1 datatype NOT NULL,
	column_name2 datatype,
	column_name3 datatype,
	PRIMARY KEY(column_name1)
);

# composite primary key
CREATE TABLE table_name(
	column_name1 datatype NOT NULL,
	column_name2 datatype NOT NULL,
	column_name3 datatype,
	PRIMARY KEY(column_name1,column_name2)
);

# with alter table
CREATE TABLE table_name(
	column_name1 datatype NOT NULL,
	column_name2 datatype,
	column_name3 datatype
);
ALTER TABLE table_name ADD PRIMARY KEY(column_name1);

# composite primary key, with alter table
CREATE TABLE table_name(
	column_name1 datatype NOT NULL,
	column_name2 datatype NOT NULL,
	column_name3 datatype
);
ALTER TABLE table_name ADD PRIMARY KEY(column_name1,column_name2);

# delete
ALTER TABLE table_name DROP PRIMARY KEY;

```

### Foreign Key
```sql
CREATE TABLE table_primary(
	column_nameA datatype PRIMARY KEY,
	column_nameB datatype,
	column_nameC datatype,
	PRIMARY KEY (column_nameA)
);
```
<hr></hr>

```sql
# within create table
CREATE TABLE table_secondary(
	column_nameP datatype NOT NULL,
	column_nameQ datatype,
	column_nameA datatype,
	PRIMARY KEY (column_nameP),
	CONSTRAINT constraint_name
		FOREIGN KEY (column_nameA) REFERENCES table_primary(column_nameA)
);

# cascade
CREATE TABLE table_secondary(
	column_nameP datatype NOT NULL,
	column_nameQ datatype,
	column_nameA datatype,
	PRIMARY KEY (column_nameP),
	CONSTRAINT constraint_name
		FOREIGN KEY (column_nameA) REFERENCES table_primary(column_nameA)
			ON DELETE CASCADE
);

# with alter table
CREATE TABLE table_secondary(
	column_nameP datatype NOT NULL,
	column_nameQ datatype,
	column_nameA datatype,
	PRIMARY KEY (column_nameP)
);
ALTER TABLE table_secondary ADD CONSTRAINT constraint_name
	FOREIGN KEY(column_nameA) REFERENCES table_primary(column_nameA);

# cascade, with alter table
CREATE TABLE table_secondary(
	column_nameP datatype NOT NULL,
	column_nameQ datatype,
	column_nameA datatype,
	PRIMARY KEY (column_nameP)
);
ALTER TABLE table_secondary ADD CONSTRAINT constraint_name
	FOREIGN KEY(column_nameA) REFERENCES table_primary(column_nameA)
		ON DELETE CASCADE;

# delete
ALTER TABLE table_secondary DROP FOREIGN KEY constraint_name;
```

### Check
```sql
# alongwith column creation
CREATE TABLE table_name(
	column_name1 datatype,
	column_name2 datatype CHECK (<column_name3 condition>),
	column_name3 datatype 
);

# within create table
CREATE TABLE table_name(
	column_name1 datatype,
	column_name2 datatype,
	column_name3 datatype,
	CONSTRAINT constraint_name
		CHECK (<column_name(s) condition>)
);

# with alter table
CREATE TABLE table_name(
	column_name1 datatype,
	column_name2 datatype,
	column_name3 datatype
);
ALTER TABLE table_name ADD CONSTRAINT constraint_name 
	CHECK (<column_name(s) condition>);

# delete
ALTER TABLE table_name DROP CHECK constraint_name;
# or
ALTER TABLE table_name DROP CONSTRAINT constraint_name;

```

### Unique
```sql
# alongwith column creation
CREATE TABLE table_name(
	column_name1 datatype,
	column_name2 datatype UNIQUE,
	column_name3 datatype 
);

# within create table
CREATE TABLE table_name(
	column_name1 datatype,
	column_name2 datatype,
	column_name3 datatype,
	UNIQUE(column_name2)
);

# with alter table
CREATE TABLE table_name(
	column_name1 datatype,
	column_name2 datatype,
	column_name3 datatype 
);
ALTER TABLE table_name ADD UNIQUE(column_name2);

# delete 
ALTER TABLE table_name DROP INDEX column_name;

```
<br></br>
## DML Statements
### Insert
```sql
# into each column
INSERT INTO table_name
	VALUES (column1_value,column2_value,...,colunmN_value);

# into specified column
INSERT INTO table_name (columnX,columnY,columnZ)
	VALUES (columnX_value,columnY_value,columnZ_value);

# insert with select
INSERT INTO table2 (columnX,columnY,columnZ)
	SELECT columnP,columnQ,columnR FROM table1
		WHERE (<condition(s)>);

# copying entire table1
INSERT INTO table1_copy
	SELECT * FROM table1;
	
```

### Update
```sql
UPDATE table_name SET
	column1 = value1,
	column2 = value2,
	column3 = value3,
WHERE (<condition(s)>);

```

### Delete
```sql
# delete entire table
DELETE FROM table_name;

# delete where
DELETE FROM table_name
	WHERE (<condition(s)>);
	
```

### Select
```sql
# syntax
SELECT column_name(s) FROM table_name
	WHERE (<condition(s)>);

# retrieve entire table
SELECT * FROM table_name;

# select with limit
SELECT column_name(s) FROM table_name
	LIMIT n;

# select with alias
SELECT
	column_name1 AS alias1,
	column_name2 AS alias2,
	column_name3 AS alias3,
	column_nameN AS aliasN
FROM table_name;

# select distinct
SELECT DISTINCT cloumn_name FROM table_name;

```

### Order
```sql
# syntax
SELECT column_name(s) FROM table_name
	WHERE <condition(s)>		
ORDER BY column_name1 ASC|DESC, column_name2 ASC|DESC... ;

# with limit
SELECT column_name(s) FROM table_name
ORDER BY column_name(s)
LIMIT n;

```

### Filters
```sql
# between
SELECT column_name(s) FROM table_name
	WHERE column_name BETWEEN value1 AND value2;

# in
SELECT column_name(s) FROM table_name
	WHERE column_name IN (value1,value2,value3....);

# like
SELECT column_name(s) FROM table_name
	WHERE column_name LIKE 'wildcard';
/*
	Note:
	'%' denotes zero or more characters or digits
	'_' denotes exact one character or digit
*/
```
[regexp syntax](https://dev.mysql.com/doc/refman/8.0/en/regexp.html#regexp-syntax)
```sql
# regexp_like
SELECT column_name(s) FROM table_name
	WHERE REGEXP_LIKE(column_name,'regexp');

```

### [Case Statement](https://www.w3schools.com/sql/sql_case.asp)
>The CASE statement goes through conditions and returns a value when the first condition is met. If no conditions are true, it returns the value in the ELSE clause. If there is no ELSE part and no conditions are true, it returns NULL.
```sql
# syntax
CASE
	WHEN <condition1> THEN <result1>
	WHEN <condition2> THEN <result2>
	WHEN <conditionN> THEN <resultN>
	ELSE default_result
END AS alias

```

## Joins
### Inner Join
>The INNER JOIN keyword selects records that have matching values in both tables.
```sql
# without alias
SELECT table1.column(s), table2.column(s)
FROM table1 INNER JOIN table2
ON table1.columnX = table2.columnX;

# with alias
SELECT alias1.column(s), alias2.column(s)
FROM table1 as alias1 INNER JOIN table2 as alias2
ON alias1.columnX = alias2.columnX;

# with filters
SELECT table1.column(s), table2.column(s)
FROM table1 INNER JOIN table2
ON table1.columnX = table2.columnX
WHERE <condition(s)>;

# old syntax
SELECT table1.column(s), table2.column(s)
FROM table1, table2
WHERE table1.columnX = table2.columnX;

```
### Left Join
>The LEFT JOIN keyword returns all records from the left table (table1), and the matched records from the right table (table2). The result is NULL from the right side, if there is no match.
```sql
SELECT table1.column(s), table2.column(s)
FROM table1 LEFT JOIN table2
ON table1.columnX = table2.columnX;

/*
	similar syntax for 'with alias' and 'with filters' as in inner join
*/

```
### Right Join
>The RIGHT JOIN keyword returns all records from the right table (table2), and the matched records from the left table (table1). The result is NULL from the left side, when there is no match.
```sql
SELECT table1.column(s), table2.column(s)
FROM table1 RIGHT JOIN table2
ON table1.columnX = table2.columnX;

/*
	similar syntax for 'with alias' and 'with filters' as in inner join
*/

```
>Note:  
>In case of LEFT and RIGHT joins LHS and RHS is decided w.r.t ON clause.

### Self Join
>A SELF JOIN is a join that is used to join a table with **itself**. SELF JOIN is always inner join
```sql
SELECT alias1.column(s)
FROM table_name as alias1 JOIN table_name as alias2
ON alias1.columnX = alias2.columnX;

# old syntax
SELECT alias1.column(s)
FROM table_name as alias1, table_name as alias2
WHERE alias1.columnX = alias2.columnX;

```

### Full Join
>The FULL OUTER JOIN keyword returns all records when there is a match in left (table1) or right (table2) table records.
``` sql
# Not available in MySQL but can be emulated using union on LEFT and RIGTH joins
```
### Cross Join
>The SQL CROSS JOIN produces a result set which is the number of rows in the first table multiplied by the number of rows in the second table if no WHERE clause is used along with CROSS JOIN.This kind of result is called as Cartesian Product.  
>If WHERE or ON clause is used with CROSS JOIN, it functions like an INNER JOIN.
```sql
SELECT table1.column(s), table2.column(s)
FROM table1 CROSS JOIN table2;

```
### Join Three or More Tables
```sql
# Syntax 1
SELECT column_name(s) FROM table1 
JOIN table2 ON table1.columnX = table2.columnX
JOIN table3 ON table1.columnY = table3.columnY;

# Syntax 2
SELECT column_name(s) 
FROM table1 JOIN table2 JOIN table3 
ON table1.columnX = table2.columnX 
	AND table1.columnY = table3.columnY;

# Syntax 3
SELECT column_name(s)
FROM table1, table2, table3
WHERE table1.columnX = table2.columnX 
	AND table1.columnY = table3.columnY;

```

## [Built-in Functions and Operators](https://dev.mysql.com/doc/refman/8.0/en/functions.html)
#### COUNT
```sql
SELECT COUNT(column_name) FROM table_name;
```
#### AVG
```sql
SELECT AVG(column_name) FROM table_name;
```
#### MIN/MAX
```sql
SELECT MIN(column_name) FROM table_name;
SELECT MAX(column_name) FROM table_name;
```
#### SUM
```sql
SELECT MIN(column_name) FROM table_name;
```
#### CONVERT
```sql
SELECT CONVERT(_value_,_type_);
# or
SELECT CONVERT(_value_ USING _charset_);
```
#### IF
```sql
SELECT IF(<condition>, value_if_true, value_if_false);
```
#### ANY
```sql
# The ANY operator returns true if any of the subquery values meet the condition.
SELECT column_name(s) FROM table_name  
WHERE column_name <operator> ANY (SELECT column_name FROM table_name WHERE condition);
```
#### ALL
```sql
# The ALL operator returns true if all of the subquery values meet the condition.
SELECT column_name(s) FROM table_name  
WHERE column_name <operator> ALL (SELECT column_name FROM table_name WHERE condition);
```

## Group by & Having
### group by
> The GROUP BY statement groups rows that have the same values into summary rows, like "find the number of customers in each country".   
> The GROUP BY statement is often used with aggregate functions (COUNT, MAX, MIN, SUM, AVG) to group the result-set by one or more columns.
```sql
SELECT column_name(s)*
FROM table_name
WHERE <condition>
GROUP BY column_name(s)*
ORDER BY column_name(s);

```
### having
>The `HAVING` clause is used in the `SELECT` statement to specify filter conditions for a group of rows or aggregates.
```sql
SELECT column_name(s)* 
FROM table_name 
WHERE <condition> 
GROUP BY column_name(s)* 
HAVING <group_condition>;

```
