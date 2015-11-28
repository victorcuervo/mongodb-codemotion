//Consulta sin Indice
//Vemos el CollScan

conn = new Mongo();
db = conn.getDB("codemotion");

print ('db.users.find({name:{$regex:"De"}})')

db.users.find({name:{$regex:"De"}}).forEach( function(doc) {
	print(doc.name);
} );
