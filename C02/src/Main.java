import java.util.Scanner;

public class Main {
    private static Scanner input = new Scanner(System.in);
    private static String query;
    private static String isbn, title, author, publisher;
    private static int price, pub_year;

    static {
        MysqlHandler.main(new String[0]);
        System.out.println();
    }

    public static void main(String[] args) {
        int rowsAffected;
        int choice = 1;
        while (choice != 0) {
            switch (choice){
                case 1:
                    printHints();
                break;

                case 2:
                    System.out.println("\nCREATING TABLE");
                    query = "create table book(\n" +
                            "    ISBN varchar(32) not null primary key, \n" +
                            "    title varchar(32) not null, \n" +
                            "    price int not null, \n" +
                            "    pub_year int not null, \n" +
                            "    author varchar(32) not null, \n" +
                            "    publisher varchar(32) not null \n" +
                            ")";
                    System.out.println(query);
                    MysqlHandler.execute(query);
                break;

                case 3:
                    System.out.println("\nINSERT NEW BOOK");
                    System.out.print("ISBN: ");
                    isbn = input.nextLine();
                    System.out.print("Title: ");
                    title = input.nextLine();
                    System.out.print("Price: ");
                    price = Integer.parseInt(input.nextLine());
                    System.out.print("Published Year: ");
                    pub_year = Integer.parseInt(input.nextLine());
                    System.out.print("Author: ");
                    author = input.nextLine();
                    System.out.print("Publisher: ");
                    publisher = input.nextLine();

                    query = String.format(
                            "insert into book (ISBN,title,price,pub_year,author,publisher)\n" +
                            "values ('%s','%s',%s,%s,'%s','%s')",isbn,title,price,pub_year,author,publisher
                    );
                    System.out.println(query);
                    MysqlHandler.executeUpdate(query);
                break;

                case 4:
                    System.out.println("\nUPDATE BOOK");
                    System.out.print("ISBN: ");
                    isbn = input.nextLine();
                    System.out.print("New Title: ");
                    title = input.nextLine();
                    System.out.print("New Price: ");
                    price = Integer.parseInt(input.nextLine());
                    System.out.print("New Published Year: ");
                    pub_year = Integer.parseInt(input.nextLine());
                    System.out.print("New Author: ");
                    author = input.nextLine();
                    System.out.print("New Publisher: ");
                    publisher = input.nextLine();

                    query = String.format(
                            "update book set title='%s',price=%s,pub_year=%s,author='%s',publisher='%s'\n" +
                            "where ISBN='%s'",title,price,pub_year,author,publisher,isbn
                    );
                    System.out.println(query);
                    rowsAffected = MysqlHandler.executeUpdate(query);
                    if (rowsAffected == 0)
                        System.out.println("ISBN: "+isbn+" Not Found");
                    else
                        System.out.println("Book Updated");
                break;

                case 5:
                    System.out.println("\nDELETE BOOK");
                    System.out.print("ISBN: ");
                    isbn = input.nextLine();

                    query = String.format("delete from book where ISBN='%s'",isbn);
                    System.out.println(query);
                    rowsAffected = MysqlHandler.executeUpdate(query);
                    if (rowsAffected == 0)
                        System.out.println("ISBN: "+isbn+" Not Found");
                    else
                        System.out.println("Book Deleted");

                break;

                case 6:
                    System.out.println("\nBOOKS TABLE");
                    MysqlHandler.executeQuery("select * from book");
                break;

                default:
                    System.out.println("Option ("+choice+") not found");
            }

            System.out.println();
            System.out.print("Enter Choice: ");
            choice = Integer.parseInt(input.nextLine());
        }

        System.out.println("exit()");
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
