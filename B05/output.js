// $push 
db.articles.find({_id: ObjectId("5f984c94c073c15764b64fcc")}).pretty() 
/*
{
        "_id" : ObjectId("5f984c94c073c15764b64fcc"),
        "author" : "serranobrian",
        "title" : "Battling Butler",
        "read_time" : 4,
        "reads" : 77,
        "genres" : [
                "Comedy"
        ],
        "upvotes" : [
                "hillrachel",
                "matthewray"
        ],
        "published" : ISODate("2020-06-17T00:00:00Z"),
        "comments" : [ ]
}
*/

db.articles.update(
    { _id: ObjectId("5f984c94c073c15764b64fcc") },
    {
        $push: { 
            comments: {
                username: "andrewhamilton",
                text: "Incidunt molestiae quam ipsum hic incidunt harum magnam perspiciatis. Quisquam eum sunt fuga ut laborum ducimus ratione. Ut dolorum totam voluptatem excepturi."
            } 
        }
    }
)
/*
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
*/

db.articles.find({_id: ObjectId("5f984c94c073c15764b64fcc")}).pretty() 
/*                                              
{                                                                                                                      
        "_id" : ObjectId("5f984c94c073c15764b64fcc"),                                                                  
        "author" : "serranobrian",
        "title" : "Battling Butler",
        "read_time" : 4,
        "reads" : 77,
        "genres" : [
                "Comedy"
        ],
        "upvotes" : [
                "hillrachel",
                "matthewray"
        ],
        "published" : ISODate("2020-06-17T00:00:00Z"),
        "comments" : [
                {
                        "username" : "andrewhamilton",
                        "text" : "Incidunt molestiae quam ipsum hic incidunt harum magnam perspiciatis. Quisquam eum sunt fuga ut laborum ducimus ratione. Ut dolorum totam voluptatem excepturi."
                }
        ]
}
*/


// $push $each and $size
db.articles.find(
    {
        upvotes:{$size:1}
    },
    {upvotes:1}
).pretty()
/*
{ "_id" : ObjectId("5f984c94c073c15764b64fd4"), upvotes" : [ "glopez" ] }
*/

db.articles.update(
    {
        upvotes:{$size:1}
    },
    {
        $push: {
            upvotes: {
                $each: ["fmiller","valenciajennifer","mwells","andrewhamilton"]
            }
        }
    }
)
/*
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
*/

db.articles.find(
    {
        upvotes:{$size:5}
    },
    {upvotes:1}
).pretty()
/*
{
        "_id" : ObjectId("5f984c94c073c15764b64fd4"),
        "upvotes" : [
                "glopez",
                "fmiller",
                "valenciajennifer",
                "mwells",
                "andrewhamilton"
        ]
}
*/


// $all
db.articles.find({
    $and:[
        {
            genres: {
                $all:["Biography","History"]
            }
        },
        {
            reads :{$gt:20}
        }
    ]
}).pretty()
/*
{
        "_id" : ObjectId("5f984c94c073c15764b64fd5"),
        "author" : "andrewhamilton",
        "title" : "Napoleon",
        "read_time" : 4,
        "reads" : 32,
        "genres" : [
                "Biography",
                "Drama",
                "History"
        ],
        "upvotes" : [
                "matthewray",
                "serranobrian",
                "hillrachel"
        ],
        "published" : ISODate("2020-03-05T00:00:00Z"),
        "comments" : [
                {
                        "username" : "glopez",
                        "text" : "Numquam voluptas veniam ducimus sunt accusamus harum distinctio autem. Aliquid dicta nulla aperiam veniam placeat quam. Veritatis maiores ipsa quos accusantium molestiae eum voluptatibus."
                },
                {
                        "username" : "hmyers",
                        "text" : "Perspiciatis sit pariatur quas. Perferendis officia harum ipsum deleniti vel inventore. Nobis culpa eaque in blanditiis porro esse. Nisi deserunt culpa expedita dolorum quo aperiam."
                },
                {
                        "username" : "mwells",
                        "text" : "Iure laboriosam quo et necessitatibus sed. Id iure delectus soluta. Quaerat officiis maiores commodi earum. Autem odio labore debitis optio libero."
                }
        ]
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fd7"),
        "author" : "serranobrian",
        "title" : "Disraeliy",
        "read_time" : 5,
        "reads" : 25,
        "genres" : [
                "Biography",
                "Drama",
                "History"
        ],
        "upvotes" : [
                "glopez",
                "valenciajennifer"
        ],
        "published" : ISODate("2020-07-25T00:00:00Z"),
        "comments" : [
                {
                        "username" : "mwells",
                        "text" : "Accusantium ex veritatis est aut facere commodi asperiores. Dignissimos cum rerum odit labore. Eum quos architecto perspiciatis molestiae voluptate doloribus dolorem veniam."
                },
                {
                        "username" : "hillrachel",
                        "text" : "Ab consequatur numquam sed eligendi ex unde. Dolorem illum minima numquam dicta ipsa magnam nostrum. Possimus sed inventore cum non."
                },
                {
                        "username" : "serranobrian",
                        "text" : ""
                }
        ],
        "comment" : {
                "2" : {
                        "text" : "Incidunt possimus quasi suscipit. Rem fugit labore nisi cum. Sit facere tempora dolores quia rerum atque. Ab minima iure voluptatibus dolor quos cumque placeat quos."
                }
        }
}
*/


// $slice (projection)
db.articles.find(
    {  
        read_time: {$gt: 7}
    },
    {
        comments: {$slice:1}
    }
).pretty()
/*
{
        "_id" : ObjectId("5f984c94c073c15764b64fce"),
        "author" : "mwells",
        "title" : "Metropolis",
        "read_time" : 10,
        "reads" : 98,
        "genres" : [
                "Drama",
                "Sci-Fi"
        ],
        "upvotes" : [
                "glopez",
                "serranobrian"
        ],
        "published" : ISODate("2020-07-13T00:00:00Z"),
        "comments" : [
                {
                        "username" : "mwells",
                        "text" : "Illo amet aliquid molestias repellat modi reprehenderit. Nobis totam dicta accusamus voluptates. Eaque distinctio nostrum accusamus eos inventore iste iste sapiente."
                }
        ]
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fd4"),
        "author" : "hillrachel",
        "title" : "White Shadows",
        "read_time" : 8,
        "reads" : 18,
        "genres" : [
                "History",
                "War"
        ],
        "upvotes" : [
                "glopez"
        ],
        "published" : ISODate("2020-07-10T00:00:00Z"),
        "comments" : [
                {
                        "username" : "mwells",
                        "text" : "Illo amet aliquid molestias repellat modi reprehenderit. Nobis totam dicta accusamus voluptates. Eaque distinctio nostrum accusamus eos inventore iste iste sapiente."
                }
        ]
}
*/


// $unwind
db.articles.aggregate([
    {
        $project:{
            author:1,
            read_time:1,
            title:1,
            reads:1,
            genres:1,
            upvotes: {$size:"$upvotes"}
        } 
    },
    {
        $unwind: "$genres"
    },
    {
        $sort: {_id:1}
    }
]).pretty()
/*
{
        "_id" : ObjectId("5f984c94c073c15764b64fc9"),
        "author" : "fmiller",
        "title" : "The Lost World",
        "read_time" : 5,
        "reads" : 106,
        "genres" : "Adventure",
        "upvotes" : 6
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fc9"),
        "author" : "fmiller",
        "title" : "The Lost World",
        "read_time" : 5,
        "reads" : 106,
        "genres" : "Fantasy",
        "upvotes" : 6
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fca"),
        "author" : "valenciajennifer",
        "title" : "The Phantom of the Opera",
        "read_time" : 4,
        "reads" : 93,
        "genres" : "Horror",
        "upvotes" : 4
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fcb"),
        "author" : "hillrachel",
        "title" : "Seven Chances",
        "read_time" : 7,
        "reads" : 56,
        "genres" : "Comedy",
        "upvotes" : 2
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fcb"),
        "author" : "hillrachel",
        "title" : "Seven Chances",
        "read_time" : 7,
        "reads" : 56,
        "genres" : "Family",
        "upvotes" : 2
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fcb"),
        "author" : "hillrachel",
        "title" : "Seven Chances",
        "read_time" : 7,
        "reads" : 56,
        "genres" : "Romance",
        "upvotes" : 2
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fcc"),
        "author" : "serranobrian",
        "title" : "Battling Butler",
        "read_time" : 4,
        "reads" : 77,
        "genres" : "Comedy",
        "upvotes" : 2
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fcd"),
        "author" : "charleshudson",
        "title" : "The Black Pirate",
        "read_time" : 7,
        "reads" : 88,
        "genres" : "Adventure",
        "upvotes" : 6
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fcd"),
        "author" : "charleshudson",
        "title" : "The Black Pirate",
        "read_time" : 7,
        "reads" : 88,
        "genres" : "Action",
        "upvotes" : 6
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fce"),
        "author" : "mwells",
        "title" : "Metropolis",
        "read_time" : 10,
        "reads" : 98,
        "genres" : "Drama",
        "upvotes" : 2
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fce"),
        "author" : "mwells",
        "title" : "Metropolis",
        "read_time" : 10,
        "reads" : 98,
        "genres" : "Sci-Fi",
        "upvotes" : 2
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fcf"),
        "author" : "hmyers",
        "title" : "The Strong Man",
        "read_time" : 4,
        "reads" : 75,
        "genres" : "Comedy",
        "upvotes" : 2
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fd0"),
        "author" : "andrewhamilton",
        "title" : "College",
        "read_time" : 6,
        "reads" : 66,
        "genres" : "Comedy",
        "upvotes" : 2
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fd0"),
        "author" : "andrewhamilton",
        "title" : "College",
        "read_time" : 6,
        "reads" : 66,
        "genres" : "Drama",
        "upvotes" : 2
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fd0"),
        "author" : "andrewhamilton",
        "title" : "College",
        "read_time" : 6,
        "reads" : 66,
        "genres" : "Sports",
        "upvotes" : 2
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fd1"),
        "author" : "matthewray",
        "title" : "Go West",
        "read_time" : 5,
        "reads" : 76,
        "genres" : "Comedy",
        "upvotes" : 2
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fd1"),
        "author" : "matthewray",
        "title" : "Go West",
        "read_time" : 5,
        "reads" : 76,
        "genres" : "Western",
        "upvotes" : 2
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fd2"),
        "author" : "glopez",
        "title" : "The General",
        "read_time" : 4,
        "reads" : 67,
        "genres" : "Action",
        "upvotes" : 2
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fd2"),
        "author" : "glopez",
        "title" : "The General",
        "read_time" : 4,
        "reads" : 67,
        "genres" : "Adventure",
        "upvotes" : 2
}
{
        "_id" : ObjectId("5f984c94c073c15764b64fd2"),
        "author" : "glopez",
        "title" : "The General",
        "read_time" : 4,
        "reads" : 67,
        "genres" : "Comedy",
        "upvotes" : 2
}
*/