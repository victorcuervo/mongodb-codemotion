
function imprimir (){
  db.accounts.find().forEach( function(doc) {
  	printjson(doc);
  } );

  db.transactions.find().forEach( function(doc) {
  	printjson(doc);
  } );
}

conn = new Mongo();
db = conn.getDB("codemotion");


db.accounts.insert(
   [
     { _id: "A", balance: 1000, pendingTransactions: [] },
     { _id: "B", balance: 1000, pendingTransactions: [] }
   ]
)

imprimir()
sleep(5000)

db.transactions.insert(
    { _id: 1, source: "A", destination: "B", value: 100, state: "initial", lastModified: new Date() }
)

imprimir()
sleep(5000)



var t = db.transactions.findOne( { state: "initial" } )

db.transactions.update(
    { _id: t._id, state: "initial" },
    {
      $set: { state: "pending" },
      $currentDate: { lastModified: true }
    }
)

imprimir()
sleep(5000)

db.accounts.update(
   { _id: t.source, pendingTransactions: { $ne: t._id } },
   { $inc: { balance: -t.value }, $push: { pendingTransactions: t._id } }
)

db.accounts.update(
   { _id: t.destination, pendingTransactions: { $ne: t._id } },
   { $inc: { balance: t.value }, $push: { pendingTransactions: t._id } }
)

imprimir()
sleep(5000)

db.transactions.update(
   { _id: t._id, state: "pending" },
   {
     $set: { state: "applied" },
     $currentDate: { lastModified: true }
   }
)

imprimir()
sleep(5000)

db.accounts.update(
   { _id: t.source, pendingTransactions: t._id },
   { $pull: { pendingTransactions: t._id } }
)

db.accounts.update(
   { _id: t.destination, pendingTransactions: t._id },
   { $pull: { pendingTransactions: t._id } }
)

imprimir()
sleep(5000)

db.transactions.update(
   { _id: t._id, state: "applied" },
   {
     $set: { state: "done" },
     $currentDate: { lastModified: true }
   }
)

imprimir()

db.accounts.drop()
db.transactions.drop()
