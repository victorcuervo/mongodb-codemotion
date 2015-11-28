//Consulta sin Indice
//Vemos el CollScan

conn = new Mongo();
db = conn.getDB("codemotion");

print ('db.users.createIndex({description:"text"},{default_language:"spanish"})')
printjson(db.users.createIndex({description:"text"},{default_language:"spanish"}))
