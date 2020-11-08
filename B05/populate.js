db.users.insert([
    {
        'username': "fmiller",
        'name': "Elizabeth Ray",
        'email': "arroyocolton@gmail.com",
        'password': "$2b$12$UREFwsRUoyF0CRqGNK0LzO0HM/jLhgUCNNIJ9RJAqMUQ74crlJ1Vu",
        'dob': ISODate("1988-06-20"),
       	 'address': {
		  	'street': '299 Saints Alley',
		  	'city': 'Tampa',
		  	'state': 'Florida',
		  	'country': 'USA',
		  	'zip': '33602'
    	}
    },
    {
        'username': "valenciajennifer",
        'name': "Lindsay Cowan",
        'email': "cooperalexis@hotmail.com",
        'password': "$2b$12$jbgNoWG97LHNIm4axwXDz.tkFITsmw/aylIY/lZDaJRgnHZjB029e",
        'dob': ISODate("1994-02-19"),
        'address': {
			'street': '4455 Timbercrest Road',
		  	'city': 'Girdwood',
		  	'state': 'Alaska',
		  	'country': 'USA',
		  	'zip': '99587'
    	}
    },
    {
        'username': "hillrachel",
        'name': "Katherine David",
        'email': "timothy78@hotmail.com",
        'password': "$2b$12$7tgpVkBxUqQiYFkHjZyoMuEzFU5BSI.FYkOXHu4zCRlRsa15sHQo6",
        'dob': ISODate("1988-06-20"),
        'address': {
			'street': '2434 Fire Access Road',
		  	'city': 'Greensboro',
		  	'state': 'North Carolina',
		  	'country': 'USA',
		  	'zip': '27403'
    	}
    },
    {
        'username': "serranobrian",
        'name': "Leslie Martinez",
        'email': "tcrawford@gmail.com",
        'password': "$2b$12$xtHwQNXYlQzP2REobUDlzuQimjzBlXrTx1GnwP.xkfULeuuUpRxa2",
        'dob': ISODate("1974-11-26"),
        'address': {
			'street': '167 Jarvis Street',
		  	'city': 'Derby',
		  	'state': 'New York',
		  	'country': 'USA',
		  	'zip': '14047'
    	}
    },
    {
        'username': "charleshudson",
        'name': "Brad Cardenas",
        'email': "dustin37@yahoo.com",
        'password': "$2b$12$DKIKOBMbN76vskkRyJ1AjuELigfnx.SeG8vu73k24kfMcO637bSqa",
        'dob': ISODate("1977-05-06"),
        'address': {
			'street': '3523 Post Avenue',
		  	'city': 'Pelican Rapids',
		  	'state': 'Minnesota',
		  	'country': 'USA',
		  	'zip': '56572'
    	}
    },
    {
        'username': "mwells",
        'name': "Natalie Ford",
        'email': "amyholland@yahoo.com",
        'password': "$2b$12$fIYLjRg5tZcTcqy30.MJLO4JRblLhsIhFwYTgUpFBbvnf9S4ONbtW",
        'dob': ISODate("1996-09-13"),
        'address': {
			'street': '2353 Emily Renzelli Boulevard',
		  	'city': 'Donalsonville',
		  	'state': 'Georgia',
		  	'country': 'USA',
		  	'zip': '39845'
    	}
    },
    {
        'username': "hmyers",
        'name': "Dana Clarke",
        'email': "vcarter@hotmail.com",
        'password': "$2b$12$Z7/ztVm8eWMDwTg.doS.UO7JbsbA9IbLomND1VxIZEdAN3keW6csS",
        'dob': ISODate("1969-06-21"),
        'address': {
			'street': '1502 Peck Court',
		  	'city': 'Jackson',
		  	'state': 'Mississippi',
		  	'country': 'USA',
		  	'zip': '39209'
    	}
    },
    {
        'username': "andrewhamilton",
        'name': "Gary Nichols",
        'email': "laura34@yahoo.com",
        'password': "$2b$12$x574mziridS3mEQVTbKbY.lK.ngIDyZJnTw17G7Gk6n4lnWVSrWL.",
        'dob': ISODate("1993-02-25"),
        'address': {
			'street': '2935  Snyder Avenue',
		  	'city': 'Charlotte',
		  	'state': 'North Carolina',
		  	'country': 'USA',
		  	'zip': '28202'
    	}
    },
    {
        'username': "matthewray",
        'name': "John Parks",
        'email': "zmelton@gmail.com",
        'password': "$2b$12$XPLvWQW7tjWc/PX9jMVRnO8w.lR6hv144ee8pc8nDsWIAWxfwxHzy",
        'dob': ISODate("1993-03-13"),
        'address': {
			'street': '3858 Jett Lane',
		  	'city': 'Los Angeles',
		  	'state': 'California',
		  	'country': 'USA',
		  	'zip': '90017'
    	}
    },
    {
        'username': "glopez",
        'name': "Jennifer Lawrence",
        'email': "scott50@yahoo.com",
        'password': "$2b$12$19h3KjeTg3/sPNFHztdb6eGWKrCxIwlVXVSh9POSi5PS9kSlguZEq",
        'dob': ISODate("1972-11-10"),
        'address': {
			'street': '980 Sardis Sta',
		  	'city': 'Plano',
		  	'state': 'Texas',
		  	'country': 'USA',
		  	'zip': '75074'
    	}
    }
])

db.articles.insert([
    {
        author: 'fmiller',
        title: 'The Lost World',
        read_time: 5,
        reads: 106,
        genres: [ 'Adventure', 'Fantasy' ],
        upvotes: ["charleshudson", "valenciajennifer", "hillrachel"],
        published: ISODate("2020-08-15"),
        comments: [
            {
                username: "valenciajennifer",
                text: "Perspiciatis non debitis magnam. Voluptate adipisci quo et laborum. Re...",
            },
            {
                username: "mwells",
                text: "Quaerat occaecati eveniet repellat. Distinctio suscipit illo unde veniam. Expedita magni adipisci excepturi unde nihil dicta."
            }
        ]
    },
    {
        author: 'valenciajennifer',
        title: 'The Phantom of the Opera',
        read_time: 4,
        reads: 93,
        genres: [ 'Horror' ],
        upvotes: [],
        published: ISODate("2020-04-29"),
        comments: []
    },
    {
        author: 'hillrachel',
        title: 'Seven Chances',
        read_time: 7,
        reads: 56,
        genres: [ 'Comedy', 'Family', 'Romance' ],
        upvotes: [],
        published: ISODate("2020-07-18"),
        comments: []
    },
    {
        author: 'serranobrian',
        title: 'Battling Butler',
        read_time: 4,
        reads: 77,
        genres: [ 'Comedy' ],
        upvotes: [],
        published: ISODate("2020-06-17"),
        comments: []
    },
    {
        author: 'charleshudson',
        title: 'The Black Pirate',
        read_time: 7,
        reads: 88,
        genres: [ 'Adventure', 'Action' ],
        upvotes: ["mwells", "hmyers"],
        published: ISODate("2020-03-25"),
        comments: []
    },
    {
        author: "mwells",
        title: 'Metropolis',
        read_time: 10,
        reads: 98,
        genres: [ 'Drama', 'Sci-Fi' ],
        upvotes: [],
        published: ISODate("2020-07-13"),
        comments: []
    },
    {
        author: "hmyers",
        title: 'The Strong Man',
        read_time: 4,
        reads: 75,
        genres: [ 'Comedy' ],
        upvotes: [],
        published: ISODate("2020-09-12"),
        comments: []
    },
    {
        author: "andrewhamilton",
        title: 'College',
        read_time: 6,
        reads: 66,
        genres: [ 'Comedy', 'Drama', 'Sports' ],
        upvotes: [],
        published: ISODate("2020-10-12"),
        comments: []
    },
    {
        author: "matthewray",
        title: 'Go West',
        read_time: 5,
        reads: 76,
        genres: [ 'Comedy', 'Western' ],
        upvotes: ['andrewhamilton'],
        published: ISODate("2020-08-15"),
        comments: []
    },
    {
        author: "glopez",
        title: 'The General',
        read_time: 4,
        reads: 67,
        genres: [ 'Action', 'Adventure', 'Comedy' ],
        upvotes: [],
        published: ISODate("2020-04-06"),
        comments: []
    },
    {
        author: 'glopez',
        title: 'Regeneration',
        read_time: 6,
        reads: 72,
        genres: [ 'Biography', 'Drama', 'Crime' ],
        upvotes: [],
        published: ISODate("2020-05-03"),
        comments: []
    },
    {
        author: "hillrachel",
        title: 'White Shadows',
        read_time: 8,
        reads: 18,
        genres: ["History", "War"],
        upvotes: [],
        published: ISODate("2020-07-10"),
        comments: []
    },
    {
        author: "andrewhamilton",
        title: "Napoleon",
        read_time: 4,
        reads: 32,
        genres: ["Biography", "Drama", "History"],
        upvotes: [],
        published: ISODate("2020-03-05"),
        comments: []
    },
    {
        author: "matthewray",
        title: "The Broadway Melody",
        read_time: 7,
        reads: 42,
        genres: ["Musical", "Romance"],
        upvotes: [],
        published: ISODate("2020-05-23"),
        comments: []
    },
    {
        author: "serranobrian",
        title: "Disraeliy",
        read_time: 5,
        reads: 25,
        genres: ["Biography", "Drama", "History"],
        upvotes: [],
        published: ISODate("2020-07-25"),
        comments: []
    }
])

db.articles.update(
    {_id:ObjectId("5f984c94c073c15764b64fd5")},
    {
        $push:{
            comments:{
                username: "glopez",
                text: "Numquam voluptas veniam ducimus sunt accusamus harum distinctio autem. Aliquid dicta nulla aperiam veniam placeat quam. Veritatis maiores ipsa quos accusantium molestiae eum voluptatibus."
            }
        }
    }
)

db.articles.update(
    {_id:ObjectId("5f984c94c073c15764b64fd5")},
    {
        $push:{
            comments:{
                username: "hmyers",
                text: "Perspiciatis sit pariatur quas. Perferendis officia harum ipsum deleniti vel inventore. Nobis culpa eaque in blanditiis porro esse. Nisi deserunt culpa expedita dolorum quo aperiam."
            }
        }
    }
)

db.articles.update(
    {_id:ObjectId("5f984c94c073c15764b64fd5")},
    {
        $push:{
            comments:{
                username: "mwells",
                text: "Iure laboriosam quo et necessitatibus sed. Id iure delectus soluta. Quaerat officiis maiores commodi earum. Autem odio labore debitis optio libero."
            }
        }
    }
)

db.articles.update(
    {_id:ObjectId("5f984c94c073c15764b64fd7")},
    {
        $push:{
            comments:{
                username: "mwells",
                text: "Accusantium ex veritatis est aut facere commodi asperiores. Dignissimos cum rerum odit labore. Eum quos architecto perspiciatis molestiae voluptate doloribus dolorem veniam."
            }
        }
    }
)

db.articles.update(
    {_id:ObjectId("5f984c94c073c15764b64fd7")},
    {
        $push:{
            comments:{
                username: "hillrachel",
                text: "Ab consequatur numquam sed eligendi ex unde. Dolorem illum minima numquam dicta ipsa magnam nostrum. Possimus sed inventore cum non."
            }
        }
    }
)

db.articles.update(
    {_id:ObjectId("5f984c94c073c15764b64fd1")},
    {
        $push:{
            comments:{
                username: "hillrachel",
                text: "Dicta asperiores necessitatibus corporis. Quidem fugiat eius animi fugiat laborum. Quas maiores mollitia amet quibusdam. Ducimus sed asperiores sint recusandae accusamus veniam."
            }
        }
    }
)

db.articles.update(
    {_id: ObjectId("5f984c94c073c15764b64fd1")},
    {
        $push:{
            comments:{
                username: "andrewhamilton",
                text: "Enim enim deleniti in debitis. Delectus nesciunt id tenetur."
            }
        }
    }
)


db.articles.update(
    {_id: ObjectId("5f984c94c073c15764b64fce")},
    {
        $push: {
            comments: {
                username: "mwells",
                text: "Illo amet aliquid molestias repellat modi reprehenderit. Nobis totam dicta accusamus voluptates. Eaque distinctio nostrum accusamus eos inventore iste iste sapiente."
            }
        }
    }
)

db.articles.update(
    {_id: ObjectId("5f984c94c073c15764b64fce")},
    {
        $push: {
            comments: {
                username: "andrewhamilton",
                text: "Nobis incidunt ea tempore cupiditate sint. Itaque beatae hic ut quis."
            }
        }
    }
)

db.articles.update(
    {_id: ObjectId("5f984c94c073c15764b64fcb")},
    {
        $push: {
            comments: {
                username: "fmiller",
                text: "Quo deserunt ipsam ipsum. Tenetur eos nemo nam sint praesentium minus exercitationem."
            }
        }
    }
)

db.articles.update(
    {_id: ObjectId("5f984c94c073c15764b64fcb")},
    {
        $push: {
            comments: {
                username: "hillrachel",
                text: "Ad asperiores mollitia aperiam non incidunt. Totam fugiat cumque praesentium placeat. Debitis tenetur eligendi recusandae enim perferendis. Vero maiores eveniet reiciendis necessitatibus."
            }
        }
    }
)

db.articles.update(
    {_id: ObjectId("5f984c94c073c15764b64fcf")},
    {
        $push: {
            comments: {
                username: "matthewray",
                text: "Quo deserunt ipsam ipsum. Tenetur eos nemo nam sint praesentium minus exercitationem."
            }
        }
    }
)

db.articles.update(
    {_id: ObjectId("5f984c94c073c15764b64fd7")},
    {
        $push: {
            comments: {
                username: "serranobrian",
                text: "Incidunt possimus quasi suscipit. Rem fugit labore nisi cum. Sit facere tempora dolores quia rerum atque. Ab minima iure voluptatibus dolor quos cumque placeat quos."
            }
        }
    }
)


db.articles.update(
    { _id: ObjectId("5f984c94c073c15764b64fc9") },
    {
        $push: { 
            upvotes: {
                $each:["valenciajennifer","hillrachel","serranobrian"]
            } 
        }
    }
)

db.articles.update(
    { _id: ObjectId("5f984c94c073c15764b64fca") },
    {
        $push: { 
            upvotes: {
                $each:["fmiller","matthewray","glopez","hillrachel"]
            } 
        }
    }
)

db.articles.update(
    { _id: ObjectId("5f984c94c073c15764b64fcb") },
    {
        $push: { 
            upvotes: {
                $each:["serranobrian","mwells"]
            } 
        }
    }
)

db.articles.update(
    { _id: ObjectId("5f984c94c073c15764b64fcc") },
    {
        $push: { 
            upvotes: {
                $each:["hillrachel","matthewray"]
            } 
        }
    }
)

db.articles.update(
    { _id: ObjectId("5f984c94c073c15764b64fcd") },
    {
        $push: { 
            upvotes: {
                $each:["serranobrian","hmyers","andrewhamilton","hillrachel"]
            } 
        }
    }
)

db.articles.update(
    { _id: ObjectId("5f984c94c073c15764b64fce") },
    {
        $push: { 
            upvotes: {
                $each:["glopez","serranobrian"]
            } 
        }
    }
)

db.articles.update(
    { _id: ObjectId("5f984c94c073c15764b64fcf") },
    {
        $push: { 
            upvotes: {
                $each:["andrewhamilton","glopez"]
            } 
        }
    }
)

db.articles.update(
    { _id: ObjectId("5f984c94c073c15764b64fd0") },
    {
        $push: { 
            upvotes: {
                $each:["matthewray","serranobrian"]
            } 
        }
    }
)

db.articles.update(
    { _id: ObjectId("5f984c94c073c15764b64fd1") },
    {
        $push: { 
            upvotes: {
                $each:["hillrachel"]
            } 
        }
    }
)

db.articles.update(
    { _id: ObjectId("5f984c94c073c15764b64fd2") },
    {
        $push: { 
            upvotes: {
                $each:["andrewhamilton","hmyers"]
            } 
        }
    }
)

db.articles.update(
    { _id: ObjectId("5f984c94c073c15764b64fd3") },
    {
        $push: { 
            upvotes: {
                $each:["hillrachel","andrewhamilton","charleshudsons"]
            } 
        }
    }
)

db.articles.update(
    { _id: ObjectId("5f984c94c073c15764b64fd4") },
    {
        $push: { 
            upvotes: {
                $each:["glopez"]
            } 
        }
    }
)

db.articles.update(
    { _id: ObjectId("5f984c94c073c15764b64fd5") },
    {
        $push: { 
            upvotes: {
                $each:["matthewray","serranobrian","hillrachel"]
            } 
        }
    }
)

db.articles.update(
    { _id: ObjectId("5f984c94c073c15764b64fd6") },
    {
        $push: { 
            upvotes: {
                $each:["andrewhamilton","fmiller"]
            } 
        }
    }
)

db.articles.update(
    { _id: ObjectId("5f984c94c073c15764b64fd7") },
    {
        $push: { 
            upvotes: {
                $each:["glopez","valenciajennifer"]
            } 
        }
    }
)
