import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.result.InsertOneResult;
import org.bson.Document;
import org.bson.json.JsonWriterSettings;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.Scanner;

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
        JSONObject object = new JSONObject();
        JSONArray array = new JSONArray();
        String author, title, genres_string;
        String[] genres;
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
        genres_string = scanner.nextLine();
        genres= genres_string.split(" ");

        for(String genre : genres)
            array.put(genre);
        object.put("author",author);
        object.put("title",title);
        object.put("read_time",read_time);
        object.put("genres",array);

        Document article = Document.parse(object.toString());
        InsertOneResult result = collection.insertOne(article);
        System.out.println("result: "+result);

        for (Document document : collection.find()) {
            System.out.println(document.toJson(settings));
        }
    }
}
