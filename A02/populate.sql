use A02;

insert into author (author_no,author_name,country)
values
	(1,"John Martin","USA"),		
	(2,"Sanjeev Arora","India"),	
	(3,"Daniel Cohen","USA"),		
	(4,"J Carroll","USA"),	
	(5,"Kristina Chodorow","USA"),	
	(6,"Joy A Kreibich","USA"),		
	(7,"Matthew S G","USA"),		
	(8,"Siva Ram Murthy","India"),		
	(9,"Jin Kurose","USA"),	
	(10,"Rajib Mall","India");
	
insert into customer (cust_no,cust_fname,cust_lname,cust_company,cust_addr,city,cust_phone)
values 
	(1,"Aruna","Gupte","Wipro","Colaba","Mumbai","4859448542"),
	(2,"Indra","Trivedi",null,"Chembur","Mumbai","6556148588"),
	(3,"Tripada","Ganrsh",null,"Bavesh Nagar","Bangalore","2598430722"),
	(4,"Dharma","Brar","Rolta","Achole","Mumbai","4154351120"),
	(5,"Hema","Gothe",null,"Katraj","Pune","4154351120"),
	(6,"Valmiki","Sastry","Mindtree","Tankshal","Ahmedabad","4154351120"),
	(7,"Bharat","Raj",null,"LBS Marg","Mumbai","9425244745"),
	(8,"Ravi","Bhosale","Aftek","Park Lane","Hyderabad","9725163810"),
	(9,"Mhahden","Loke",null,"APMC","Mumbai","8304051199"),
	(10,"Triveni","Hora",null,"Madipur","Delhi","9866650763");
	
insert into publisher (publisher_no,publisher_name,publisher_addr,year)
values 
	(1,"McGraw","New York,USA",1888),
	(2,"Cambridge University Press","Cambridge,England",1534),
	(3,"Pearson","London,UK",1844),
	(4,"Wiley & Sons","New York,USA",1807),
	(5,"O Reilly","California,USA",1978),
	(6,"Prentice Hall","New Jersey,USA",1913);
	
insert into book (ISBN,title,unit_price,author_no,publisher_no,pub_year)
values
	("9781259005589","The Theory of Computation",345,1,1,2020),
	("9780521424264","Computational Complexity",445,2,2,2019),
	("9788126513345","Introduction to Computer Theory",520,3,4,2017),
	("0139137084","Theory of Finite Automata",350,4,6,2017),
	("9781449344689","MongoDB: The Definitive Guide",290,5,6,2019),
	("9789351109341","Using Sqlite",340,6,5,2018),
	("8176569925","Wireless Networks",420,7,5,2020),
	("9788131706886","Ad Hoc Wireless Networks",375,8,6,2018),
	("0132856204","Computer Networking",470,9,3,2020),
	("9788120348981","Fundamentals of Development",380,10,6,2017);
	
insert into orders (order_no,cust_no,ISBN,qty,odate)
values
	(1,2,"9788126513345",1,"2020-04-23"),
	(2,4,"9781259005589",7,"2020-05-12"),	
	(3,5,"9780521424264",1,"2020-06-03"),	
	(4,7,"9789351109341",1,"2020-08-01"),	
	(5,1,"9788120348981",1,"2020-03-30"),	
	(6,3,"8176569925",5,"1020-03-31"),	
	(7,10,"0132856204",1,"2020-04-15"),	
	(8,9,"0139137084",4,"2020-05-25"),	
	(9,8,"9788131706886",2,"2020-06-07"),	
	(10,6,"0132856204",1,"2020-07-14");		





