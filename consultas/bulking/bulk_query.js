// Lista toda la colección de productos

conn = new Mongo();
db = conn.getDB("codemotion");

print ('db.products.find()')

db.products.find().forEach( function(doc) {
	printjson(doc);
} );
