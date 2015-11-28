//Consulta sin Indice
//Vemos el CollScan

conn = new Mongo();
db = conn.getDB("codemotion");

print ('db.users.find({$text:{$search:"Maecenas"}})')

db.users.find({$text:{$search:"Maecenas"}}).forEach( function(doc) {
	print(doc.name);
} );
