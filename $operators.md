# Operators in MongoDB
## Query Operators
Query operators provide ways to locate data within the database and projection operators modify how data is presented.

### Comparison

- ### `$eq`
Matches values that are equal to a specified value.
```js
{ <field>: { $eq: <value> } }
```
> The [`$eq`](https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_eq "$eq") operator is equivalent to using the form `{  field:  <value>  }` except when the `<value>` is a regular expression.
- ### `$gt`
Matches values that are greater than a specified value.
```js
{ <field>:  {$gt:  <value> }  }
```
- ### `$gte`
Matches values that are greater than or equal to a specified value.
```js
{ <field>:  {$gte:  <value> }  }
```
- ### `$in`
Matches any of the values specified in an array.
```js
{ <field>: { $in: [<value1>, <value2>, ... <valueN> ] } }
```
- ### `$lt`
Matches values that are less than a specified value.
```js
{ <field>:  {$lt:  <value>}  }
```
- ### `$lte`
Matches values that are less than or equal to a specified value.
```js
{ <field>:  {$lte:  <value>}  }
```
- ### `$ne`
Matches all values that are not equal to a specified value.
```js
{ <field>:  {$ne:  <value>}  }
```
- ### `$nin`
Matches none of the values specified in an array.
```js
{ <field>: { $nin: [<value1>, <value2>, ... <valueN> ] } }
```

### Logical
- ### `$and`
Joins query clauses with a logical `AND` returns all documents that match the conditions of both clauses.
>Note: MongoDB provides an implicit `AND` operation when specifying a comma separated list of expressions.
```js
{  $and: [ { <expression1> }, { <expression2> } ,  ...  , { <expressionN> } ] }
```
> example
```js
db.inventory.find({ 
	$and: [ 
		{ price: { $ne: 1.99 } }, 
		{ price: { $exists: true } } 
	] 
})
```
- ### `$not`
Inverts the effect of a query expression and returns documents that do _not_ match the query expression.
```js
{ <field>: { $not: { <operator-expression> } } }
```
>example
```js
db.inventory.find({
	price: { $not: { $gt: 1.99 } } 
})
```
- ### `$or`
Joins query clauses with a logical `OR` returns all documents that match the conditions of either clause.
```js
{  $or: [ { <expression1> }, { <expression2> } ,  ...  , { <expressionN> } ] }
```
> example
```js
db.inventory.find({ 
	$or: [ 
		{ quantity: { $lt: 20 } }, 
		{ price: 10 } 
	] 
})
```
### Element
- ### `$exists`
Matches documents that have the specified field.
```js
{ <field>: { $exists: <boolean> } }
```
>example
```js
// This query will select all documents in the `inventory` collection where the `qty` field exists _and_ its value does not equal `5` or `15`.
db.inventory.find({ 
	qty: { $exists: true, $nin: [ 5, 15 ] } 
})
```
### Evaluation
- ### `$expr`
Allows the use of  [aggregation expressions](https://docs.mongodb.com/manual/meta/aggregation-quick-reference/#aggregation-expressions)  within the query language.
```js
{ $expr: { <expression> } }
```
>example
```js
// The following operation uses `$expr` to find documents where the `spent` amount exceeds the `budget`
db.monthlyBudget.find({ 
	$expr: { $gt: [ '$spent' , '$budget' ] } 
})
```
- ### `$regex`
Selects documents where values match a specified regular expression.
```js
{ <field>: { $regex: /pattern/<options> } }
{ <field>: /pattern/<options> }
// options: [ i | m | x | s ]
```
### Array
- ### `$all`
Matches arrays that contain all elements specified in the query.
```js
{ <field>: { $all: [ <value1> , <value2> ... ] } }
```
- ### `$elemMatch`
  
Selects documents if element in the array field matches all the specified  [`$elemMatch`](https://docs.mongodb.com/manual/reference/operator/query/elemMatch/#op._S_elemMatch "$elemMatch")  conditions.
```js
{ <field>: { $elemMatch: { <query1>, <query2>, ... } } }
```
>example
```js
// colledtion:
db.survey.insertMany( [
   { '_id': 1, 'results': [ { 'product': "abc", 'score': 10 },
                            { 'product': "xyz", 'score': 5 } ] },
   { '_id': 2, 'results': [ { 'product': "abc", 'score': 8 },
                            { 'product': "xyz", 'score': 7 } ] },
   { '_id': 3, 'results': [ { 'product': "abc", 'score': 7 },
                            { 'product': "xyz", 'score': 8 } ] },
   { '_id': 4, 'results': [ { 'product': "abc", 'score': 7 },
                            { 'product': "def", 'score': 8 } ] }
] )
```
```js
// The following query matches only those documents where the `results` array contains at least one element with both `product` equal to `"xyz"` and `score` greater than or equal to `8`
db.survey.find({ 
	results: { 
		$elemMatch: { product: "xyz", score: { $gte: 8 } } 
	} 
})
```
- ### `$size`
The [`$size`](https://docs.mongodb.com/manual/reference/operator/query/size/#op._S_size "$size") operator matches any array with the number of elements specified by the argument. 
For example:
```js
db.collection.find( { field: { $size: 2 } } )
```
returns all documents in `collection` where `field` is an array with 2 elements.

## Update Operators
The following modifiers are available for use in update operations; e.g. in [`db.collection.update()`](https://docs.mongodb.com/manual/reference/method/db.collection.update/#db.collection.update "db.collection.update()") and [`db.collection.findAndModify()`](https://docs.mongodb.com/manual/reference/method/db.collection.findAndModify/#db.collection.findAndModify "db.collection.findAndModify()")
### Fields
- ### `$currentDate`
Sets the value of a field to current date, either as a Date or a Timestamp.
```js
{ $currentDate: { <field1>: <typeSpecification1>, ... } }
```
> typeSpecification: `{  $type:  "timestamp"  }` or `{  $type:  "date"  }`

- ### `$inc`
Increments the value of the field by the specified amount.
```js
{ $inc: { <field1>: <amount1>, <field2>: <amount2>, ... } }
```
>example
```js
// The following `update()` operation uses the `$inc` operator to decrease the  'quantity'  field by  `2`  (i.e. increase by  `-2`) and increase the  'metrics.orders'  field by  `1`
db.products.update(
    { sku: "abc123" },
	{ 
		$inc: { quantity: -2, 'metrics.orders': 1 } 
	}
)
```
- ### `$min`
Only updates the field if the specified value is less than the existing field value.
```js
{ $min: { <field1>: <value1>, ... } }
```
- ### `$max`
Only updates the field if the specified value is greater than the existing field value.
```js
{ $max: { <field1>: <value1>, ... } }
```
- ### `$mul`
Multiplies the value of the field by the specified amount.
```js
{ $mul: { <field1>: <number1>, ... } }
```
- ### `$rename`
Renames a field.
```js
{$rename: { <field1>: <newName1>, <field2>: <newName2>, ... } }
```
- ### `$set`
Sets the value of a field in a document.
```js
{ $set: { <field1>: <value1>, ... } }
```
- ### `$setOnInsert`
Sets the value of a field if an update results in an insert of a document. Has no effect on update operations that modify existing documents
```js
db.collection.update(
	<query>,
    { $setOnInsert: { <field1>: <value1>, ... } },
    { upsert: true }
)
```
- ### `$unset`
Removes the specified field from a document.
```js
{ $unset: { <field1>: "", ... } }
```
>The specified value in the [`$unset`](https://docs.mongodb.com/manual/reference/operator/update/unset/#up._S_unset "$unset") expression (i.e. `""`) does not impact the operation.

### Arrays
- ### `$[<identifier>]`
Acts as a placeholder to update all elements that match the  `arrayFilters`  condition for the documents that match the query condition.
```js
{ <update operator>: { "<array>.$[<identifier>]" : <value> } },
{ arrayFilters: [ { <identifier>: <condition> } ] }
```
>example
```js
// Consider a collection  `students`  with the following documents:
{ '_id' : 1, 'grades' : [ 95, 92, 90 ] }
{ '_id' : 2, 'grades' : [ 98, 100, 102 ] }
{ '_id' : 3, 'grades' : [ 95, 110, 100 ] }
```
```js
// Updates all elements that are greater than or equal to `100` in the `grades` array.
db.students.update(
    { },
	{ $set: { 'grades.$[element]' : 100 } },
    { 
		multi: true,
	    arrayFilters: [ { "element": { $gte: 100 } } ]
    }
)
```
- ### `$addToSet`
Adds elements to an array only if they do not already exist in the set.
```js
{ $addToSet: { <field1>: <value1>, ... } }
```
>example
```js
//Consider a collection `inventory` with the following document:
{ _id: 1, item: "polarizing_filter", tags: [ "electronics", "camera" ] }
```
```js
// The following operation adds the element "accessories" to the 'tags' array since "accessories" does not exist in the array:
db.inventory.update(
	{ _id: 1 },
    { $addToSet: { tags: "accessories" } }
)
```
- ### `$pop`
Removes the first or last item of an array. Pass [`$pop`](https://docs.mongodb.com/manual/reference/operator/update/pop/#up._S_pop "$pop") a value of `-1` to remove the first element of an array and `1` to remove the last element in an array.
```js
{ $pop: { <field>: <-1|1>, ... } }
```
- ### `$pull`
The [`$pull`](https://docs.mongodb.com/manual/reference/operator/update/pull/#up._S_pull "$pull") operator removes from an existing array all instances of a value or values that match a specified condition.
```js
{ $pull: { <field1>: <value|condition>, <field2>: <value|condition>, ... } }
```
>example
```js
// Given the following document in the `stores` collection:
{
	_id: 1,
    fruits: [ "apples", "pears", "oranges", "grapes", "bananas" ],
    vegetables: [ "carrots", "celery", "squash", "carrots" ]
}
{
    _id: 2,
    fruits: [ "plums", "kiwis", "oranges", "bananas", "apples" ],
    vegetables: [ "broccoli", "zucchini", "carrots", "onions" ]
}
```
```js
// The following operation updates all documents in the collection to remove  "apples"  and  "oranges"  from the array  'fruits'  and remove  "carrots"  from the array  'vegetables'
db.stores.update(
	{ },
    { $pull: { fruits: { $in: [ "apples", "oranges" ] }, vegetables: "carrots" } },
    { multi: true }
)
```
- ### `$push`
Adds an item to an array.
```js
{ $push: { <field1>: <value1>, ... } }
```
>example
```js
// The following example appends  `89`  to the  `scores`  array
db.students.update(
	{ _id: 1 },
    { $push: { scores: 89 } }
)
```

### Modifiers
- ### `$each`
Modifies the [`$push`](https://docs.mongodb.com/manual/reference/operator/update/push/#up._S_push "$push") and [`$addToSet`](https://docs.mongodb.com/manual/reference/operator/update/addToSet/#up._S_addToSet "$addToSet") operators to append multiple items for array updates.
```js
// Use with the`$addToSet`
{ $addToSet: { <field>: { $each: [ <value1>, <value2> ... ] } } }

// Use with the`$push`
{ $push: { <field>: { $each: [ <value1>, <value2> ... ] } } }
```
>example
```js
// The following example appends each element of `[  90,  92,  85  ]` to the `scores` array for the document where the `name` field equals `joe`
db.students.update(
	{ name: "joe" },
    { $push: { scores: { $each: [ 90, 92, 85 ] } } }
)
```
- ### `$position`
Modifies the  [`$push`](https://docs.mongodb.com/manual/reference/operator/update/push/#up._S_push "$push")  operator to specify the position in the array to add elements.
>To use the `$position` modifier, it must appear with the `$each` modifier.
```js
{
	$push: {
		<field>: {
			$each: [ <value1>, <value2>, ... ],
			$position: <num>
		}
	}
}
```
- ### `$slice`
Modifies the [`$push`](https://docs.mongodb.com/manual/reference/operator/update/push/#up._S_push "$push") operator to limit the size of updated arrays.
> To use the  [`$slice`](https://docs.mongodb.com/manual/reference/operator/update/slice/#up._S_slice "$slice")  modifier, it  **must**  appear with the  [`$each`](https://docs.mongodb.com/manual/reference/operator/update/each/#up._S_each "$each")  modifier. You can pass an empty array  `[]`  to the  [`$each`](https://docs.mongodb.com/manual/reference/operator/update/each/#up._S_each "$each")  modifier such that only the  [`$slice`](https://docs.mongodb.com/manual/reference/operator/update/slice/#up._S_slice "$slice")  modifier has an effect.
```js
{
  $push: {
     <field>: {
		$each: [ <value1>, <value2>, ... ],
		$slice: <num>
     }
  }
}
```
The  `<num>`  can be:
<table>
	<tr>
		<td>Zero: </td>
		<td>To update the array `field` to an empty array.</td>
	</tr>
	<tr>
		<td>Negative: </td>
		<td>To update the array `field` to contain only the last `num` elements.</td>
	</tr>
	<tr>
		<td>Positive: </td>
		<td>Positive: To update the array  `field`  contain only the first  `num`  elements.</td>
	</tr>
</table>

- ### `$sort`
Modifies the  [`$push`](https://docs.mongodb.com/manual/reference/operator/update/push/#up._S_push "$push")  operator to reorder documents stored in an array.
>To use the [`$sort`](https://docs.mongodb.com/manual/reference/operator/update/sort/#up._S_sort "$sort") modifier, it **must** appear with the [`$each`](https://docs.mongodb.com/manual/reference/operator/update/each/#up._S_each "$each") modifier. You can pass an empty array `[]` to the [`$each`](https://docs.mongodb.com/manual/reference/operator/update/each/#up._S_each "$each") modifier such that only the [`$sort`](https://docs.mongodb.com/manual/reference/operator/update/sort/#up._S_sort "$sort") modifier has an effect.
```js
{
	$push: {
		<field>: {
			$each: [ <value1>, <value2>, ... ],
			$sort: <sort specification>
		}
	}
}
```
`<sort  specification>`:
To sort array elements that are not documents, or if the array elements are documents, to sort by the whole documents, specify  `1`  for ascending or  `-1`  for descending.
>example
- Sort Array of Documents by a Field in the Documents
```js
// A collection `students` contains the following document:
{
	'_id': 1,
	'quizzes': [
		{ 'id' : 1, 'score' : 6 },
		{ 'id' : 2, 'score' : 9 }
	]
}
```
```js
// The following update appends additional documents to the `quizzes` array and then sorts all the elements of the array by the ascending `score` field
db.students.update(
	{ _id: 1 },
    {
		$push: {
			quizzes: {
				$each: [ { id: 3, score: 8 }, { id: 4, score: 7 }, { id: 5, score: 6 } ],
				$sort: { score: 1 }
			}
		}
	}
)
```

## Aggregation Stages
```js
db.collection.aggregate( [ { <stage> }, ... ] )
```
MongoDB’s  [aggregation framework](https://docs.mongodb.com/manual/core/aggregation-pipeline/)  is modeled on the concept of data processing pipelines. Documents enter a multi-stage pipeline that transforms the documents into an aggregated result.
>Aggregation Pipeline Illustration
![Aggregation Pipeline](https://iili.io/2ME7up.gif)
- ### `$count`
Returns a count of the number of documents at this stage of the aggregation pipeline.
```js
{ $count: <string> }
```
>`<string>`  is the name of the output field which has the count as its value.  `<string>`  must be a non-empty string, must not start with  `$`  and must not contain the  `.`  character.   

>example
```js
// A collection named  `scores`  has the following documents:
{ '_id' : 1, 'subject' : "History", 'score' : 88 }
{ '_id' : 2, 'subject' : "History", 'score' : 92 }
{ '_id' : 3, 'subject' : "History", 'score' : 97 }
{ '_id' : 4, 'subject' : "History", 'score' : 71 }
{ '_id' : 5, 'subject' : "History", 'score' : 79 }
{ '_id' : 6, 'subject' : "History", 'score' : 83 }
```
>The following aggregation operation has two stages:
>1.  The  `$match`  stage excludes documents that have a  `score`  value of less than or equal to  `80`  to pass along the documents with  `score`  greater than  `80`  to the next stage.
>2.  The  `$count`  stage returns a count of the remaining documents in the aggregation pipeline and assigns the value to a field called  `passing_scores`.
```js
db.scores.aggregate([
	{ $match: { score: { $gt: 80 } } },
    { $count: "passing_scores" }
])

// The operation returns the following results:
{ "passing_scores" : 4 }
```
- ### `$group`
Groups input documents by the specified `_id` expression and for each distinct grouping, outputs a document. The `_id` field of each output document contains the unique group by value. The output documents can also contain computed fields that hold the values of some [accumulator expression](https://docs.mongodb.com/manual/reference/operator/aggregation/group/#accumulators-group).
```js
{
  $group:
    {
      _id: <expression>, // Group By Expression
      <field1>: { <accumulator1> : <expression1> },
      ...
    }
 }
 ```
 > `field(s)`: Computed using the [accumulator operators](https://docs.mongodb.com/manual/reference/operator/aggregation/group/#accumulators-group). ( _Optional_ ) 

Accumulators: 
 <table>
	<tr>
		<td>$avg</td>
		<td>Returns an average of numerical values. Ignores non-numeric values.</td> 
   </tr>
   	<tr>
		<td>$first</td>
		<td>Returns a value from the first document for each group. Order is only defined if the documents are in a defined order.</td> 
   </tr>
   	<tr>
		<td>$last</td>
		<td>Returns a value from the last document for each group. Order is only defined if the documents are in a defined order.</td> 
   </tr>
   </tr>
   	<tr>
		<td>$max</td>
		<td>  
Returns the highest expression value for each group.</td> 
   </tr>
   <tr>
		<td>$min</td>
		<td>  
Returns the lowest expression value for each group.</td> 
   </tr>
   <tr>
		<td>$push</td>
		<td>Returns an array of expression values for each group</td> 
   </tr>
    <tr>
		<td>$sum</td>
		<td>  
Returns a sum of numerical values. Ignores non-numeric values.</td> 
   </tr>
 </table>
 
 >example

```js
 // A collection named `sales` has the following documents
{ "_id" : 1, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("2"), "date" : ISODate("2014-03-01T08:00:00Z") },
{ "_id" : 2, "item" : "jkl", "price" : NumberDecimal("20"), "quantity" : NumberInt("1"), "date" : ISODate("2014-03-01T09:00:00Z") },
{ "_id" : 3, "item" : "xyz", "price" : NumberDecimal("5"), "quantity" : NumberInt( "10"), "date" : ISODate("2014-03-15T09:00:00Z") },
{ "_id" : 4, "item" : "xyz", "price" : NumberDecimal("5"), "quantity" :  NumberInt("20") , "date" : ISODate("2014-04-04T11:21:39.736Z") },
{ "_id" : 5, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("10") , "date" : ISODate("2014-04-04T21:23:13.331Z") },
{ "_id" : 6, "item" : "def", "price" : NumberDecimal("7.5"), "quantity": NumberInt("5" ) , "date" : ISODate("2015-06-04T05:08:13Z") },
{ "_id" : 7, "item" : "def", "price" : NumberDecimal("7.5"), "quantity": NumberInt("10") , "date" : ISODate("2015-09-10T08:43:00Z") },
{ "_id" : 8, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("5" ) , "date" : ISODate("2016-02-06T20:20:13Z") },
```
```js
// The following aggregation operation uses the `$group` stage to retrieve the distinct item values from the  `sales`  collection
db.sales.aggregate( [ { $group : { _id : "$item" } } ] )

// The operation returns the following result:
{ "_id" : "abc" }
{ "_id" : "jkl" }
{ "_id" : "def" }
{ "_id" : "xyz" }
```
- ### `$limit`
Limits the number of documents passed to the next stage in the  [pipeline](https://docs.mongodb.com/manual/reference/glossary/#term-pipeline).
```js
{ $limit: <positive integer> }
```
>example
```js
// This operation returns only the first 5 documents passed to it by the pipeline.
// `$limit` has no effect on the content of the documents it passes.
db.article.aggregate([
	{ $limit : 5 }
])
```
- ### `$match`
Filters the documents to pass only the documents that match the specified condition(s) to the next pipeline stage.
```js
{ $match: { <query> } }
```
>example
```js
// The examples use a collection named `articles` with the following documents:
{ "_id" : ObjectId("512bc95fe835e68f199c8686"), "author" : "dave", "score" : 80, "views" : 100 }
{ "_id" : ObjectId("512bc962e835e68f199c8687"), "author" : "dave", "score" : 85, "views" : 521 }
{ "_id" : ObjectId("55f5a192d4bede9ac365b257"), "author" : "ahn", "score" : 60, "views" : 1000 }
{ "_id" : ObjectId("55f5a192d4bede9ac365b258"), "author" : "li", "score" : 55, "views" : 5000 }
{ "_id" : ObjectId("55f5a1d3d4bede9ac365b259"), "author" : "annT", "score" : 60, "views" : 50 }
{ "_id" : ObjectId("55f5a1d3d4bede9ac365b25a"), "author" : "li", "score" : 94, "views" : 999 }
{ "_id" : ObjectId("55f5a1d3d4bede9ac365b25b"), "author" : "ty", "score" : 95, "views" : 1000 }
```
```js
// The following operation uses `$match` to perform a simple equality match
db.articles.aggregate(
	[ { $match : { author : "dave" } } ]
);

// The `$match` selects the documents where the `author` field equals `dave`, and the aggregation returns the following: 
{ "_id" : ObjectId("512bc95fe835e68f199c8686"), "author" : "dave", "score" : 80, "views" : 100 }
{ "_id" : ObjectId("512bc962e835e68f199c8687"), "author" : "dave", "score" : 85, "views" : 521 }
```
- ### `$sort`
Sorts all input documents and returns them to the pipeline in sorted order. For the field or fields to sort by, set the sort order to `1` or `-1` to specify an ascending or descending sort respectively
```js
{ $sort: { <field1>: <sort order>, <field2>: <sort order> ... } }
```
>example
```js
// This operation sorts the documents in the `users` collection, in descending order according by the `age` field and then in ascending order according to the value in the `posts` field.
db.users.aggregate([
	{ $sort : { age : -1, posts: 1 } }
])
```
