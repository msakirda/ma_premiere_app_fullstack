import express from "express";
import ViteExpress from "vite-express";
import "dotenv/config"

const port = process.env.PORT as string ;
const app = express();

app.get("/hello", (_, res) => {
  res.send("Hello Vite + TypeScript!");
});

app.get('/hello/:nom', (req, res) => {
  const nom = req.params.nom;
  const message =`Bonjour, ${nom} !`;
  res.send(message);
});

ViteExpress.listen(app, parseInt(port), () =>
  console.log("Server is listening on port 3000...")
);

