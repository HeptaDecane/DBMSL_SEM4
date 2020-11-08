function map(){
	for(let i=0; i<this.genres.length; i++)
		emit(this.genres[i],true);
}

function reduce(key,values) {
	return values.length;
}

db.articles.mapReduce(
	map,reduce,
	{out:"genres"}
)


function map() {
	emit(this.author,this.reads);
}

function reduce(key,values){
	reads = 0;
	for(let i=0; i<values.length; i++)
		reads += values[i];
	return reads
}

db.articles.mapReduce(
	map,reduce,
	{	
		query:{author:"mwells"},
		out:"reads"
	}
)
