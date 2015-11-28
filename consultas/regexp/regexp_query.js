//Consulta sin Indice
//Vemos el CollScan

conn = new Mongo();
db = conn.getDB("codemotion");

print ('db.users.find({name:/^D/})')

db.users.find({name:/^D/}).forEach( function(doc) {
	print(doc.name);
} );
