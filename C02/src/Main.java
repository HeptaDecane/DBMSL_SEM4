import java.util.Scanner;

public class Main {
    private static Scanner input = new Scanner(System.in);
    private static String query;
    private static String isbn, title, price, author_no, publisher_no, pub_year;
    private static boolean flag;

    static {
        MysqlHandler.main(new String[0]);
        System.out.println();
    }

    public static void main(String[] args) {

        int choice = 1;
        while (choice != 0) {
            switch (choice){
                case 1:
                    printHints();
                break;

                case 2:
                    query = "create table book(\n" +
                            "    ISBN varchar(16) not null ,\n" +
                            "    title varchar(32) not null ,\n" +
                            "    unit_price int not null ,\n" +
                            "    author_no int not null ,\n" +
                            "    publisher_no int not null ,\n" +
                            "    pub_year int not null\n" +
                            ")";
                    flag = MysqlHandler.execute(query);
                    System.out.println(flag);
                break;

                case 3:

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
        System.out.println("2. Create Table");
        System.out.println("3. Insert New Book");
        System.out.println("4. Update Book");
        System.out.println("5. Delete Book");
        System.out.println("6. Show Table");
        System.out.println("0. Exit");
    }

}
