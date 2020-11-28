import com.mongodb.client.*;
import com.mongodb.client.model.Updates;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.InsertOneResult;
import com.mongodb.client.result.UpdateResult;
import org.bson.Document;
import org.bson.json.JsonWriterSettings;

import java.util.Arrays;
import java.util.Scanner;

import static com.mongodb.client.model.Filters.and;
import static com.mongodb.client.model.Filters.eq;

public class Main {
    private static final MongoClient mongoClient;
    private static final MongoDatabase db;
    private static final MongoCollection<Document> collection;
    private static final JsonWriterSettings settings;
    private static final Scanner scanner;


    static {
        mongoClient = MongoClients.create("mongodb://localhost:27017");
        db = mongoClient.getDatabase("sample_medium");
        collection = db.getCollection("article");
        settings = JsonWriterSettings.builder().indent(true).build();
        scanner = new Scanner(System.in);
    }

    public static void main(String[] args) {

        System.out.print("\nOperation: ");
        String choice = scanner.nextLine().toLowerCase();

        while (!choice.equalsIgnoreCase("exit")){

            switch (choice){
                case "insert":
                    insert();
                break;
                case "update":
                    update();
                break;
                case "delete":
                    delete();
                break;
                case "find":
                    find();
                break;
                default:
                    System.out.println("Invalid Action");
            }

            System.out.print("\nOperation: ");
            choice = scanner.nextLine().toLowerCase();

        }
    }

    private static void insert(){
        String author, title, genres;
        int read_time;
        System.out.print("author: ");
        author = scanner.nextLine();
        System.out.print("title: ");
        title = scanner.nextLine();
        System.out.print("read_time: ");
        try {
            read_time = Integer.parseInt(scanner.nextLine());
        } catch (Exception e){
            read_time = 0;
        }
        System.out.print("genres: ");
        genres = scanner.nextLine();

        Document article = new Document();
        article.append("author",author);
        article.append("title",title);
        article.append("read_time",read_time);
        article.append("genres",Arrays.asList(genres.split(" ")));
        InsertOneResult result = collection.insertOne(article);
        System.out.println("result: "+result);

    }

    private static void update(){
        System.out.print("author: ");
        String author = scanner.nextLine();

        System.out.print("title: ");
        String title = scanner.nextLine();

        System.out.print("new title: ");
        String newTitle = scanner.nextLine();

        UpdateResult result = collection.updateOne(
                and(eq("title",title),eq("author",author)),
                Updates.set("title",newTitle)
        );
        System.out.println("result: "+result);

    }

    private static void delete(){
        System.out.print("author: ");
        String author = scanner.nextLine();

        System.out.print("title: ");
        String title = scanner.nextLine();

        DeleteResult result = collection.deleteMany(
                and(eq("title",title),eq("author",author))
        );
        System.out.println("result: "+result);
    }

    private static void find(){
        for (Document document : collection.find()) {
            System.out.println(document.toJson(settings));
        }
    }
}