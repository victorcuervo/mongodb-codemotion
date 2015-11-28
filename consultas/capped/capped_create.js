// Crear una capped collection

conn = new Mongo();
db = conn.getDB("codemotion");


print ('db.createCollection( "log", { capped: true, size: 10 } )')
db.createCollection( "log", { capped: true, size: 10000 } )

print('for (x=1;x<1000;x++) {\n  db.log.insert({item:x})\n}')
for (x=1;x<1000;x++) {
  db.log.insert({item:x})
}
