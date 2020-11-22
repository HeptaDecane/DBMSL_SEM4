Operation: insert
author: dana88
title: Wings
read_time: 7
genres: War Drama History
result: AcknowledgedInsertOneResult{insertedId=BsonObjectId{value=5fbace3b3f6f225771c0025c}}

Operation: find
{
  "_id": {
    "$oid": "5fbace3b3f6f225771c0025c"
  },
  "author": "dana88",
  "title": "Wings",
  "read_time": 7,
  "genres": [
    "War",
    "Drama",
    "History"
  ]
}

Operation: update
author: dana88
title: Wings
new title: Wings-Revised
result: AcknowledgedUpdateResult{matchedCount=1, modifiedCount=1, upsertedId=null}

Operation: find
{
  "_id": {
    "$oid": "5fbace3b3f6f225771c0025c"
  },
  "author": "dana88",
  "title": "Wings-Revised",
  "read_time": 7,
  "genres": [
    "War",
    "Drama",
    "History"
  ]
}

Operation: delete
author: dana88
title: Wings
result: AcknowledgedDeleteResult{deletedCount=0}

Operation: delete
author: dana88
title: Wings-Revised
result: AcknowledgedDeleteResult{deletedCount=1}

Operation: find

Operation: exit
