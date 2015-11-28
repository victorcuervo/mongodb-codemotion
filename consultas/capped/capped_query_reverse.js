// Lista toda la colección de la colección cappped de logs

conn = new Mongo();
db = conn.getDB("codemotion");


print ('db.log.find().sort({$natural:-1}).forEach( function(doc) {\n	printjson(doc);\n} );')


db.log.find().sort({$natural:-1}).forEach( function(doc) {
	printjson(doc);
} );

print ('db.log.count()')
print ('Número de elementos:' + db.log.count())
