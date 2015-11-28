// Indice de texto al campo description

conn = new Mongo();
db = conn.getDB("codemotion");

print ('db.users.createIndex({description:"text"})')
printjson(db.users.createIndex({description:"text"}))
