// Intentar buscar por todos los campos

conn = new Mongo();
db = conn.getDB("codemotion");

print ('db.users.find({$text:{$search:"viajes"}})')

db.users.find({$text:{$search:"viajes"}}).forEach( function(doc) {
	print(doc.name);
} );
