// Indice de texto a todos los campos
conn = new Mongo();
db = conn.getDB("codemotion");

print ('db.users.createIndex( { "$**": "text" } )')
printjson(db.users.createIndex( { "$**": "text" } ))
