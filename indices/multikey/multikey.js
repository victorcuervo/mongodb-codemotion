// Claves multivalor

conn = new Mongo();
db = conn.getDB("codemotion");

print ('db.users.createIndex({hobbies:1})')
db.users.createIndex({hobbies:1})

print ('db.users.find({hobbies:"viajar"}).explain("executionStats")')
printjson(db.users.find({hobbies:"viajar"}).explain("executionStats"))
