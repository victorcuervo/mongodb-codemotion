//Consulta sin Indice
//Vemos el CollScan

conn = new Mongo();
db = conn.getDB("codemotion");

print ('db.users.find({gender:"M"},{username:1,_id:0}).explain("executionStats")')
printjson(db.users.find({gender:"M"},{username:1,_id:0}).explain("executionStats"))
