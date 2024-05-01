const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Rota para obter a hora atual
app.get("/api/time", (req, res) => {
  const currentTime = new Date();
  res.json({
    hour: currentTime.getHours(),
    minute: currentTime.getMinutes(),
    second: currentTime.getSeconds(),
    date: currentTime.getDate(),
    month: currentTime.getMonth() + 1, // Mês é baseado em zero, então adicionamos 1
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
