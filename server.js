const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta 'dist' criada pelo Vite
app.use(express.static(path.join(__dirname, 'dist')));

// Roteamento para lidar com todas as solicitações
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});