conn = new Mongo();
db = conn.getDB("codemotion");

print ('bulk = db.products.initializeOrderedBulkOp()\nbulk.insert({name:"A",items:10})\nbulk.insert({name:"B",items:12})\nbulk.find({name:"A"}).update({ $inc: { items : 1 }})\nbulk.find({name:"B"}).removeOne()\nbulk.execute()')

bulk = db.products.initializeOrderedBulkOp()
bulk.insert({name:"A",items:10})
bulk.insert({name:"B",items:15})
bulk.find({name:"A"}).update({ $inc: { items : 1 }})
bulk.find({name:"B"}).removeOne()
printjson(bulk.execute())
