import java.sql.*;

public abstract class MysqlHandler {
    static Connection connection = null;
    static Statement statement = null;
    static ResultSet resultSet = null;

    static final String username = "31165";
    static final String password = "31165@mysql";
    static final String url = "jdbc:mysql://localhost:3306/A02";

    public static void main(String[] args) {

        try{
            connection = DriverManager.getConnection(url,username,password);
            statement = connection.createStatement();
            resultSet = statement.executeQuery("select version()");
            System.out.println("Database connected");

            while(resultSet.next())
                System.out.println("MySQL: "+resultSet.getString(1));


        }catch (Exception e){
            System.out.println(e.getMessage());
        }finally {
            try {
                if(resultSet != null)
                    resultSet.close();
                if(statement != null)
                    statement.close();
                if(connection != null)
                    connection.close();
            }catch (Exception e){
                System.out.println(e);
            }
        }
    }

    static boolean execute(String query){
        boolean flag = false;
        try{
            connection = DriverManager.getConnection(url,username,password);
            statement = connection.createStatement();
            statement.execute(query);
            System.out.println("\n"+query+": success\n");
            flag = true;

        }catch (SQLException e){
            System.out.println();
            System.out.println(e.getMessage());
            System.out.println();
        }catch (Exception e){
            System.out.println(e);
        }finally {
            try {
                if(statement != null)
                    statement.close();
                if(connection != null)
                    connection.close();
            }catch (Exception e){
                System.out.println(e);
            }
        }
        return flag;
    }

    static void executeQuery(String query){
        try{
            connection = DriverManager.getConnection(url,username,password);
            statement = connection.createStatement();
            resultSet = statement.executeQuery(query);
            int columns = resultSet.getMetaData().getColumnCount();

            String headers="";
            for(int i=1;i<=columns;i++){
                String a="";
                headers += String.format("%-40s",resultSet.getMetaData().getColumnName(i))+" ";
            }
            System.out.println(headers);

            for(int i=0;i<columns*40;i++)
                System.out.print("-");
            System.out.println();

            while(resultSet.next()){
                String row = "";
                for(int i=1;i<=columns;i++) {
                    row += String.format("%-40s",resultSet.getString(i))+" ";
                }
                System.out.println(row);
            }

        }catch (Exception e){
            System.out.println(e);
        }finally {
            try {
                if(statement != null)
                    statement.close();
                if(connection != null)
                    connection.close();
            }catch (Exception e){
                System.out.println(e);
            }
        }
    }
}