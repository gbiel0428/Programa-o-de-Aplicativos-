/*

//  Crie uma API COM DOIS ENDPOINTS
/ CLIENTES
/ FUNCIONARIOS

AMBOS DEVEM TER METODOS GET, POST

*/


// Importando as dependências necessárias

const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// 1. Configurando conexão com o banco de dados
const sequelize = new Sequelize('db_inova', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// 2. Criando o modelo de dados
const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Funcionario = sequelize.define('Funcionario', {
    nome: {
        type:DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    setor: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

// 3. Configuração do servidor Express
const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

// ROTA GET - Listar todos os clientes
app.get('/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});

app.get('/funcionarios', async(req, res) => {
    try {
        const funcionarios = await Funcionario.findAll();
        res.json(funcionarios);
    } catch (error) {
        res.status(500).json({error: 'Error ao busca funcionario'});
    }
})


// ROTA POST - Criar um novo cliente
app.post('/clientes', async (req, res) => {
    try {
        const { nome, email, telefone } = req.body;

        const novoCliente = await Cliente.create({
            nome,
            email,
            telefone
        });

        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar cliente' });
    }
});

app.post('/funcionarios',async (req, res) => { 
    try {
        const {nome , telefone, email , cargo , setor} = req.body;

        const novoFuncionario = await Funcionario.create({
            nome,
            telefone,
            email,
            cargo,
            setor,
        });

        res.status(201).json(novoFuncionario);
    } catch (error) {
        res.status(500).json ({erro : 'Error ao criar funcionario'});
    }
})

// 4. Sincronizando banco e iniciando servidor
sequelize.sync()
    .then(() => {
        console.log('Banco de dados sincronizado');

        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    })
    .catch((error) => {
        console.error('Erro ao sincronizar o banco de dados:', error);
    });