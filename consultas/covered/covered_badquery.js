//Consulta sin Indice
//Vemos el CollScan

conn = new Mongo();
db = conn.getDB("codemotion");

print ('db.users.find({gender:"M"},{username:1}).explain("executionStats")')
printjson(db.users.find({gender:"M"},{username:1}).explain("executionStats"))
