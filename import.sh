echo "Inicio de la carga..."

for i in {1..100}
do
  mongoimport --db codemotion --collection users --jsonArray data.json >> null
done

echo "Fin de la carga"
