use A06;

delimiter ~
create procedure add_new_employees()
begin
    declare end_of_table bool default false;
    declare old_entries int default 0;
    declare new_emp_id int;
    declare new_emp_name varchar(16);
    declare new_date_of_join date;

    declare new_record_pointer cursor for
        select emp_id,emp_name,date_of_join from employee_temp;

    declare continue handler for 1062
        set old_entries = old_entries+1;

    declare continue handler for not found
        set end_of_table = true;

    open new_record_pointer;

        fetch new_record_pointer into new_emp_id, new_emp_name, new_date_of_join;
        while end_of_table = false do
            insert into employee(emp_id, emp_name, date_of_join)
            values (new_emp_id, new_emp_name, new_date_of_join);
            fetch new_record_pointer into new_emp_id, new_emp_name, new_date_of_join;
        end while;

    close new_record_pointer;

    select old_entries;
    select * from employee;
    truncate employee_temp;

end ~
delimiter ;

