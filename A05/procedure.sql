use A05;

delimiter ~
create procedure calculate_fine(in id int, in scheme varchar(32))
begin

    declare date1,date2 date;
    declare delay int default 0;
    declare fine_amount int default 0;

    declare exit handler for 1062
        select 'duplicate error' as message;

    declare exit handler for not found
        select 'record not found' as message;


    select deadline from customer
    where customer_id=id into date1;

    select curdate() into date2;

    select datediff(date2,date1) into delay;

    if delay>30 then
        set fine_amount = (delay-30)*50 + 15*5;
    elseif delay>15 then
        set fine_amount = (delay-15)*5;
    else
        set fine_amount = 0;
    end if;

    insert into fine value (id,date2,fine_amount);
    update customer set status = 'P' where customer_id = id;

end ~
delimiter ;

drop procedure calculate_fine;

call calculate_fine(1, 'recurring_deposit');



