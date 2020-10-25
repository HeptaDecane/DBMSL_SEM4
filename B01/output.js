use sample_blog_post
/*
switched to db sample_blog_post
*/

db.createCollection("users")
/*
{ "ok" : 1 }
*/

db.users.find().pretty()
/*
{
	"_id" : ObjectId("5f8fd7f2eb90deea3dec9513"),
	"username" : "fmiller",
	"name" : "Elizabeth Ray",
	"email" : "arroyocolton@gmail.com",
	"password" : "$2b$12$UREFwsRUoyF0CRqGNK0LzO0HM/jLhgUCNNIJ9RJAqMUQ74crlJ1Vu",
	"dob" : ISODate("1988-06-20T00:00:00Z"),
	"address" : {
		"street" : "299 Saints Alley",
		"city" : "Tampa",
		"state" : "Florida",
		"country" : "USA",
		"zip" : "33602"
	},
	"articles" : [
		"The Lost World"
	]
}
{
	"_id" : ObjectId("5f8fd7f2eb90deea3dec9514"),
	"username" : "valenciajennifer",
	"name" : "Lindsay Cowan",
	"email" : "cooperalexis@hotmail.com",
	"password" : "$2b$12$jbgNoWG97LHNIm4axwXDz.tkFITsmw/aylIY/lZDaJRgnHZjB029e",
	"dob" : ISODate("1994-02-19T00:00:00Z"),
	"address" : {
		"street" : "4455 Timbercrest Road",
		"city" : "Girdwood",
		"state" : "Alaska",
		"country" : "USA",
		"zip" : "99587"
	},
	"articles" : [
		"The Phantom of the Opera"
	]
}
{
	"_id" : ObjectId("5f8fd7f2eb90deea3dec9515"),
	"username" : "hillrachel",
	"name" : "Katherine David",
	"email" : "katherine78@gmail.com",
	"password" : "$2b$12$7tgpVkBxUqQiYFkHjZyoMuEzFU5BSI.FYkOXHu4zCRlRsa15sHQo6",
	"dob" : ISODate("1988-06-20T00:00:00Z"),
	"address" : {
		"street" : "2434 Fire Access Road",
		"city" : "Greensboro",
		"state" : "North Carolina",
		"country" : "USA",
		"zip" : "27403"
	},
	"articles" : [
		"Seven Chances"
	]
}
{
	"_id" : ObjectId("5f8fd7f2eb90deea3dec9516"),
	"username" : "serranobrian",
	"name" : "Leslie Martinez",
	"email" : "tcrawford@gmail.com",
	"password" : "$2b$12$xtHwQNXYlQzP2REobUDlzuQimjzBlXrTx1GnwP.xkfULeuuUpRxa2",
	"dob" : ISODate("1974-11-26T00:00:00Z"),
	"address" : {
		"street" : "167 Jarvis Street",
		"city" : "Derby",
		"state" : "New York",
		"country" : "USA",
		"zip" : "14047"
	},
	"articles" : [
		"Battling Butler"
	]
}
{
	"_id" : ObjectId("5f8fd7f2eb90deea3dec9517"),
	"username" : "charleshudson",
	"name" : "Brad Cardenas",
	"email" : "dustin37@yahoo.com",
	"password" : "$2b$12$DKIKOBMbN76vskkRyJ1AjuELigfnx.SeG8vu73k24kfMcO637bSqa",
	"dob" : ISODate("1977-05-06T00:00:00Z"),
	"address" : {
		"street" : "3523 Post Avenue",
		"city" : "Pelican Rapids",
		"state" : "Minnesota",
		"country" : "USA",
		"zip" : "56572"
	},
	"articles" : [
		"The Black Pirate"
	]
}
{
	"_id" : ObjectId("5f8fd7f2eb90deea3dec9518"),
	"username" : "1977-05-06",
	"name" : "Natalie Ford",
	"email" : "amyholland@yahoo.com",
	"password" : "$2b$12$fIYLjRg5tZcTcqy30.MJLO4JRblLhsIhFwYTgUpFBbvnf9S4ONbtW",
	"dob" : ISODate("1996-09-13T00:00:00Z"),
	"address" : {
		"street" : "2353 Emily Renzelli Boulevard",
		"city" : "Donalsonville",
		"state" : "Georgia",
		"country" : "USA",
		"zip" : "39845"
	},
	"articles" : [
		"Metropolis"
	]
}
{
	"_id" : ObjectId("5f8fd7f2eb90deea3dec9519"),
	"username" : "hmyers",
	"name" : "Dana Clarke",
	"email" : "vcarter@hotmail.com",
	"password" : "$2b$12$Z7/ztVm8eWMDwTg.doS.UO7JbsbA9IbLomND1VxIZEdAN3keW6csS",
	"dob" : ISODate("1969-06-21T00:00:00Z"),
	"address" : {
		"street" : "1502 Peck Court",
		"city" : "Jackson",
		"state" : "Mississippi",
		"country" : "USA",
		"zip" : "39209"
	},
	"articles" : [
		"The Strong Man"
	]
}
{
	"_id" : ObjectId("5f8fd7f2eb90deea3dec951a"),
	"username" : "andrewhamilton",
	"name" : "Gary Nichols",
	"email" : "laura34@yahoo.com",
	"password" : "$2b$12$x574mziridS3mEQVTbKbY.lK.ngIDyZJnTw17G7Gk6n4lnWVSrWL.",
	"dob" : ISODate("1993-02-25T00:00:00Z"),
	"address" : {
		"street" : "2935  Snyder Avenue",
		"city" : "Charlotte",
		"state" : "North Carolina",
		"country" : "USA",
		"zip" : "28202"
	},
	"articles" : [
		"College"
	]
}
{
	"_id" : ObjectId("5f8fd7f2eb90deea3dec951b"),
	"username" : "matthewray",
	"name" : "John Parks",
	"email" : "zmelton@gmail.com",
	"password" : "$2b$12$XPLvWQW7tjWc/PX9jMVRnO8w.lR6hv144ee8pc8nDsWIAWxfwxHzy",
	"dob" : ISODate("1993-03-13T00:00:00Z"),
	"address" : {
		"street" : "3858 Jett Lane",
		"city" : "Los Angeles",
		"state" : "California",
		"country" : "USA",
		"zip" : "90017"
	},
	"articles" : [
		"Go West"
	]
}
{
	"_id" : ObjectId("5f8fd7f2eb90deea3dec951c"),
	"username" : "glopez",
	"name" : "Jennifer Lawrence",
	"email" : "scott50@yahoo.com",
	"password" : "$2b$12$19h3KjeTg3/sPNFHztdb6eGWKrCxIwlVXVSh9POSi5PS9kSlguZEq",
	"dob" : ISODate("1972-11-10T00:00:00Z"),
	"address" : {
		"street" : "980 Sardis Sta",
		"city" : "Plano",
		"state" : "Texas",
		"country" : "USA",
		"zip" : "75074"
	},
	"articles" : [
		"The General"
	]
}

*/

db.users.find({'username':"matthewray"}).pretty()
/*
{
	"_id" : ObjectId("5f8fd7f2eb90deea3dec951b"),
	"username" : "matthewray",
	"name" : "John Parks",
	"email" : "zmelton@gmail.com",
	"password" : "$2b$12$XPLvWQW7tjWc/PX9jMVRnO8w.lR6hv144ee8pc8nDsWIAWxfwxHzy",
	"dob" : ISODate("1993-03-13T00:00:00Z"),
	"address" : {
		"street" : "3858 Jett Lane",
		"city" : "Los Angeles",
		"state" : "California",
		"country" : "USA",
		"zip" : "90017"
	},
	"articles" : [
		"Go West"
	]
}
*/

db.users.update(
    {'username':"matthewray"},
    {
        $set:{'email':'johnparks@gmail.com'}
    }
)
/*
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
*/

db.users.find(
	{
		$or:[
			{'address.state':"California"},
			{'address.state':"New York"}
		]
	}
).pretty()
/*
{
	"_id" : ObjectId("5f8fd7f2eb90deea3dec9516"),
	"username" : "serranobrian",
	"name" : "Leslie Martinez",
	"email" : "tcrawford@gmail.com",
	"password" : "$2b$12$xtHwQNXYlQzP2REobUDlzuQimjzBlXrTx1GnwP.xkfULeuuUpRxa2",
	"dob" : ISODate("1974-11-26T00:00:00Z"),
	"address" : {
		"street" : "167 Jarvis Street",
		"city" : "Derby",
		"state" : "New York",
		"country" : "USA",
		"zip" : "14047"
	},
	"articles" : [
		"Battling Butler"
	]
}
{
	"_id" : ObjectId("5f8fd7f2eb90deea3dec951b"),
	"username" : "matthewray",
	"name" : "John Parks",
	"email" : "johnparks@gmail.com",
	"password" : "$2b$12$XPLvWQW7tjWc/PX9jMVRnO8w.lR6hv144ee8pc8nDsWIAWxfwxHzy",
	"dob" : ISODate("1993-03-13T00:00:00Z"),
	"address" : {
		"street" : "3858 Jett Lane",
		"city" : "Los Angeles",
		"state" : "California",
		"country" : "USA",
		"zip" : "90017"
	},
	"articles" : [
		"Go West"
	]
}
*/

db.users.find({'dob':{$gt:ISODate("1990-01-01")}}).pretty()
/*
{
	"_id" : ObjectId("5f8fd7f2eb90deea3dec9514"),
	"username" : "valenciajennifer",
	"name" : "Lindsay Cowan",
	"email" : "cooperalexis@hotmail.com",
	"password" : "$2b$12$jbgNoWG97LHNIm4axwXDz.tkFITsmw/aylIY/lZDaJRgnHZjB029e",
	"dob" : ISODate("1994-02-19T00:00:00Z"),
	"address" : {
		"street" : "4455 Timbercrest Road",
		"city" : "Girdwood",
		"state" : "Alaska",
		"country" : "USA",
		"zip" : "99587"
	},
	"articles" : [
		"The Phantom of the Opera"
	]
}
{
	"_id" : ObjectId("5f8fd7f2eb90deea3dec9518"),
	"username" : "1977-05-06",
	"name" : "Natalie Ford",
	"email" : "amyholland@yahoo.com",
	"password" : "$2b$12$fIYLjRg5tZcTcqy30.MJLO4JRblLhsIhFwYTgUpFBbvnf9S4ONbtW",
	"dob" : ISODate("1996-09-13T00:00:00Z"),
	"address" : {
		"street" : "2353 Emily Renzelli Boulevard",
		"city" : "Donalsonville",
		"state" : "Georgia",
		"country" : "USA",
		"zip" : "39845"
	},
	"articles" : [
		"Metropolis"
	]
}
{
	"_id" : ObjectId("5f8fd7f2eb90deea3dec951a"),
	"username" : "andrewhamilton",
	"name" : "Gary Nichols",
	"email" : "laura34@yahoo.com",
	"password" : "$2b$12$x574mziridS3mEQVTbKbY.lK.ngIDyZJnTw17G7Gk6n4lnWVSrWL.",
	"dob" : ISODate("1993-02-25T00:00:00Z"),
	"address" : {
		"street" : "2935  Snyder Avenue",
		"city" : "Charlotte",
		"state" : "North Carolina",
		"country" : "USA",
		"zip" : "28202"
	},
	"articles" : [
		"College"
	]
}
{
	"_id" : ObjectId("5f8fd7f2eb90deea3dec951b"),
	"username" : "matthewray",
	"name" : "John Parks",
	"email" : "johnparks@gmail.com",
	"password" : "$2b$12$XPLvWQW7tjWc/PX9jMVRnO8w.lR6hv144ee8pc8nDsWIAWxfwxHzy",
	"dob" : ISODate("1993-03-13T00:00:00Z"),
	"address" : {
		"street" : "3858 Jett Lane",
		"city" : "Los Angeles",
		"state" : "California",
		"country" : "USA",
		"zip" : "90017"
	},
	"articles" : [
		"Go West"
	]
}
*/

db.users.save({
    'username': "ronald62",
    'name': "Phillip Obrien",
    'email': "lopezsean@hotmail.com",
    'password': "$2b$12$sgxhWIzY6UiWvWFRMslCDusielBdf8tpNHraxHAS3c9QNwcCHdHJq",
    'dob': ISODate("1985-03-16"),
})
/*
WriteResult({ "nInserted" : 1 })
*/

db.users.save({
	"_id" : ObjectId("5f8fe0b3a2a25f1204628de0"),
    'username': "ronald62",
    'name': "Ronald Obrien",
    'email': "ronald62obrien@hotmail.com",
    'password': "$2b$12$sgxhWIzY6UiWvWFRMslCDusielBdf8tpNHraxHAS3c9QNwcCHdHJq",
    'dob': ISODate("1985-03-16"),
})
/*
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
*/

db.users.update(
    {'username':"anderson"},
    {
        $set: {
            'address':{
				"street" : "299 Harrison Street",
				"city" : "San Francisco",
				"state" : "California",
				"country" : "USA",
				"zip" : "94143"
			}
        }
    },
    {upsert: true}
)
/*
WriteResult({
	"nMatched" : 0,
	"nUpserted" : 1,
	"nModified" : 0,
	"_id" : ObjectId("5f8fe31b2a4f7b1ded9e754f")
})
*/

db.users.update(
    {'address.state':"California"},
    {
        $set:{'address.zip':"91101"}
    },
    {multi:true}
)
/*
WriteResult({ "nMatched" : 2, "nUpserted" : 0, "nModified" : 2 })
*/

db.users.update(
    {'address.zip':"91101"},
    {
        $set:{'address.zip':"90201"}
    },
    {
        upsert:true,
        multi:true
    }
)
/*
WriteResult({ "nMatched" : 2, "nUpserted" : 0, "nModified" : 2 })
*/

db.users.remove(
    {'address.zip':"90201"}
)
/*
WriteResult({ "nRemoved" : 2 })
*/

db.users.remove(
    {'dob':{$gt:ISODate("1990-01-01")}},
    {justOne:true}
)
/*
WriteResult({ "nRemoved" : 1 })
*/


