import express from "express";
import dotenv from "dotenv";
import { sum, dif } from "./operacao";
import { dayofmounth, mounth, year } from "./date";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.listen(PORT, function(){ console.log(`Rodando ${PORT}`)});

app.get("/somar/:x/:y", sum);
app.post("/subtrair", dif);
app.get("/dia", dayofmounth);
app.get("/mes", mounth);
app.get("/ano", year);





/* request{
        metodo: get, post , put ou delete
        dominio
        porta
        caminho
}
rota = metodo http + caminho
*/