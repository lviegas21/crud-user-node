const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

//obter um usuário por id

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if(!user) return res.status(404).json({message: "Usuário não encontrado!"})
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

//Atualizar um usuário

router.put(':id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if(!user) return res.status(404).json({message: "Usuário não encontrado"});
        await user.update().json(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
    
});

router.delete(':id', async (req, res) => {
    try {
        const user = User.findByPk(req.params.id);
        if(!user) return res.status(404).json({message: "Usuário não encontrado"});
        await user.delete();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});