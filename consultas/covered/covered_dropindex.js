//Borramos el Indice

conn = new Mongo();
db = conn.getDB("codemotion");

db.users.dropIndex("gender_1_username_1")
