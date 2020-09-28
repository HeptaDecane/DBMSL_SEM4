use A07;

create procedure grade_customers()
begin
    declare end_of_table bool default false;
    declare cur_cust_id int;
    declare cur_name varchar(32);
    declare cur_purchase int;

    declare record_pointer cursor for
        select cust_id,name,purchase from customer;

    declare continue handler for not found
        set end_of_table = true;

    open record_pointer;
        fetch record_pointer into cur_cust_id,cur_name,cur_purchase;

        while end_of_table = false do
            delete from category where cust_id = cur_cust_id;

            if cur_purchase>=10000 then
                insert into category(cust_id, name, class)
                value (cur_cust_id,cur_name,'PLATINUM');

            elseif cur_purchase<=9999 and cur_purchase>=5000 then
                insert into category(cust_id, name, class)
                value (cur_cust_id,cur_name,'GOLD');

            elseif cur_purchase<=4999 and cur_purchase>=2000 then
                insert into category(cust_id, name, class)
                value (cur_cust_id,cur_name,'SILVER');

            else
                insert into category(cust_id, name, class)
                value (cur_cust_id,cur_name,'BASIC');

            end if;

            fetch record_pointer into cur_cust_id,cur_name,cur_purchase;
        end while;
    close record_pointer;
end;

# drop procedure grade_customers;
# call grade_customers();


create procedure checkout(in id int, in amount int, out new_class varchar(8))
begin
    declare cur_purchase int;

    declare exit handler for not found
    select concat('invalid cust_id: ',id) as message;

    update customer set purchase = purchase + amount
    where cust_id = id;

    select purchase from customer where cust_id = id
    into cur_purchase;

    if cur_purchase>=10000 then
        update category set class='PLATINUM'
        where cust_id = id;

    elseif cur_purchase<=9999 and cur_purchase>=5000 then
        update category set class='GOLD'
        where cust_id = id;

    elseif cur_purchase<=4999 and cur_purchase>=2000 then
        update category set class='SILVER'
        where cust_id = id;

    else
        update category set class='BASIC'
        where cust_id = id;

    end if;

    select class from category where cust_id = id
    into new_class;
end;

# drop procedure checkout;
# call checkout(101,0,@class);
# select @class;


create function checkout(id int, amount int) returns varchar(8)
deterministic
begin
    declare cur_purchase int;
    declare new_class varchar(8);

    declare exit handler for not found
        return null;

    update customer set purchase = purchase+amount
    where cust_id = id;

    select purchase from customer where cust_id = id
    into cur_purchase;

    if cur_purchase>=10000 then
        update category set class='PLATINUM'
        where cust_id = id;
        return 'PLATINUM';

    elseif cur_purchase<=9999 and cur_purchase>=5000 then
        update category set class='GOLD'
        where cust_id = id;
        return 'GOLD';

    elseif cur_purchase<=4999 and cur_purchase>=2000 then
        update category set class='SILVER'
        where cust_id = id;
        return 'SILVER';

    else
        update category set class='BASIC'
        where cust_id = id;
        return 'BASIC';

    end if;
end;

# drop function checkout;
# select checkout(101,0) as updated_class;

