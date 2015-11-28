// Activando las búsquedas en texto

conn = new Mongo();
db = conn.getDB("codemotion");

print ('db.adminCommand({setParameter:true,textSearchEnabled:true})')
printjson(db.adminCommand({setParameter:true,textSearchEnabled:true}))
