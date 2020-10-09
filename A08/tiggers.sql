use A08;

delimiter ~

create trigger update_student
after update
on student for each row
begin
    declare duplicate_entry bool default false;

    declare continue handler for 1062
        set duplicate_entry=true;

    if NEW.status = 'PASS' then
        insert into alumni(roll_no, name)
        value (NEW.roll_no,NEW.name);
    else
        delete from alumni where alumni.roll_no=NEW.roll_no;
    end if;

end ~


create trigger delete_student
after delete
on student for each row
begin
    declare duplicate_entry bool default false;

    declare continue handler for 1062
        set duplicate_entry=true;

    if OLD.status = 'PASS' then
        insert into alumni(roll_no, name)
        value (OLD.roll_no,OLD.name);
    end if;

end ~

delimiter ;


# Extra

delimiter ~

create trigger calculate_fine
after update
on A05.customer for each row
begin

    declare date1 date;
    declare delay int default 0;
    declare fine_amount int default 0;
    declare error bool default false;

    declare continue handler for 1062
        set error = true;

    declare continue handler for not found
        set error = true;


    if NEW.status='P' then
    select curdate() into date1;

    select datediff(date1,NEW.deadline) into delay;

    if delay>30 then
        set fine_amount = (delay-30)*50 + 15*5;
    elseif delay>15 then
        set fine_amount = (delay-15)*5;
    else
        set fine_amount = 0;
    end if;

    insert into A05.fine value (NEW.customer_id,date1,fine_amount);
    end if;
end ~

delimiter ;


