const express = require('express');
const app = express();

let contador = 0;
let incrementar1Count = 0;
let incrementar5Count = 0;

app.get('/contador', (req, res) => {
  res.json({ contador });
});

app.post('/incrementar1', (req, res) => {
  contador += 1;
  incrementar1Count += 1;
  res.json({ contador });
});

app.post('/incrementar5', (req, res) => {
  contador += 5;
  incrementar5Count += 1;
  res.json({ contador });
});

app.get('/relatorio', (req, res) => {
  res.json({
    contador,
    incrementar1Count,
    incrementar5Count
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
