//Consulta sin Indice
//Vemos el CollScan

conn = new Mongo();
db = conn.getDB("codemotion");

// Mostramos la consulta por pantalla
print ('db.users.createIndex({gender:1,username:1})')
printjson(db.users.createIndex({gender:1,username:1}))
