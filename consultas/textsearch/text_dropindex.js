//Borramos el Indice

conn = new Mongo();
db = conn.getDB("codemotion");

db.users.dropIndex("description_text")
