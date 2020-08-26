import java.util.Scanner;

public class Main {
    public static Scanner input = new Scanner(System.in);

    static {
        MysqlHandler.main(new String[0]);
        System.out.println();
    }

    public static void main(String[] args) {

        int choice = 1;
        String query;
        while (choice != 0) {
            switch (choice){
                case 1:
                    printHints();
                break;


                case 2:
                    System.out.println("\t1. Create Simple View\n\t2. Create Complex View");
                    System.out.print("\n\tEnter Choice: ");
                    choice = input.nextInt();
                    if(choice == 1) {
                        query =  "CREATE VIEW customer_public AS \n" +
                                 "SELECT cust_no,cust_fname,cust_lname FROM customer";
                        MysqlHandler.execute(query);

                        MysqlHandler.executeQuery("SELECT * FROM customer_public");
                    }
                    else if(choice == 2) {
                        query =  "CREATE VIEW book_display AS \n" +
                                 "SELECT b.ISBN,b.title,a.author_name \n" +
                                 "FROM book AS b JOIN author AS a \n" +
                                 "ON a.author_no = b.author_no";
                        MysqlHandler.execute(query);

                        MysqlHandler.executeQuery("SELECT * FROM book_display");
                    }
                    else
                        System.out.println("\tInvalid Option ("+choice+")");
                break;


                case 3:
                    System.out.println("\t1. Drop Simple View\n\t2. Drop Complex View");
                    System.out.print("\n\tEnter Choice: ");
                    choice = input.nextInt();
                    if(choice == 1){
                        query = "DROP VIEW customer_public";
                        MysqlHandler.execute(query);

                        MysqlHandler.executeQuery("SHOW TABLES");
                    }
                    else if(choice == 2){
                        query = "DROP VIEW book_display";
                        MysqlHandler.execute(query);

                        MysqlHandler.executeQuery("SHOW TABLES");
                    }
                    else
                        System.out.println("\tInvalid Option ("+choice+")");
                break;


                case 4:
                    System.out.println("\t1. Create Simple Index\n\t2. Create Composite Index\n\t3. Create Unique Index");
                    System.out.print("\n\tEnter Choice: ");
                    choice = input.nextInt();
                    if(choice == 1){
                        query =  "ALTER TABLE book \n" +
                                 "ADD INDEX idx_title(title)";
                        MysqlHandler.execute(query);

                        MysqlHandler.executeQuery("SHOW INDEX FROM book");
                    }
                    else if(choice == 2){
                        query = "ALTER TABLE book \n" +
                                "ADD INDEX idx_title_unit_price(title,unit_price)";
                        MysqlHandler.execute(query);

                        MysqlHandler.executeQuery("SHOW INDEX FROM book");
                    }
                    else if(choice == 3){
                        query = "ALTER TABLE customer \n" +
                                "ADD UNIQUE INDEX idx_cust_phone(cust_phone)";
                        MysqlHandler.execute(query);

                        MysqlHandler.executeQuery("SHOW INDEX FROM customer");
                    }
                    else
                        System.out.println("\tInvalid Option ("+choice+")");
                break;


                case 5:
                    System.out.println("\t1. Drop Simple Index\n\t2. Drop Composite Index\n\t3. Drop Unique Index");
                    System.out.print("\n\tEnter Choice: ");
                    choice = input.nextInt();
                    if(choice == 1){
                        query =  "ALTER TABLE book \n" +
                                 "DROP INDEX idx_title";
                        MysqlHandler.execute(query);

                        MysqlHandler.executeQuery("SHOW INDEX FROM book");

                    }
                    else if(choice == 2){
                        query =  "ALTER TABLE book \n" +
                                 "DROP INDEX idx_title_unit_price";
                        MysqlHandler.execute(query);

                        MysqlHandler.executeQuery("SHOW INDEX FROM book");
                    }
                    else if(choice == 3){
                        query = "ALTER TABLE customer \n" +
                                "DROP INDEX idx_cust_phone";
                        MysqlHandler.execute(query);

                        MysqlHandler.executeQuery("SHOW INDEX FROM customer");
                    }
                    else
                        System.out.println("\tInvalid Option ("+choice+")");
                    break;


                case 6:
                    query =  "ALTER TABLE orders \n" +
                             "MODIFY order_no int auto_increment";
                    MysqlHandler.execute(query);
                    MysqlHandler.executeQuery("DESCRIBE orders");
                break;


                case 7:
                    query =  "ALTER TABLE orders \n" +
                             "MODIFY order_no int not null";
                    MysqlHandler.execute(query);
                    MysqlHandler.executeQuery("DESCRIBE orders");
                break;


                default:
                    System.out.println("Option ("+choice+") not found");
            }

            System.out.println();
            System.out.print("Enter Choice: ");
            choice = input.nextInt();
        }

        System.out.println("Terminated.");
    }
    
    public static void printHints(){
        System.out.println("1. Print Hints");
        System.out.println("2. Create View");
        System.out.println("3. Drop View");
        System.out.println("4. Create Index");
        System.out.println("5. Drop Index");
        System.out.println("6. Add Sequencing");
        System.out.println("7. Remove Sequencing");
        System.out.println("0. Exit");
    }

}
