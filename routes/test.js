'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');


// Get All
router.get('/',(req,res,next) => {
    knex('test')
    .select('id','name','message')
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

// Get One
router.get('/:id',(req,res,next) => {
    let id = req.params.id
    knex('test')
    .where('id',id)
    .select('id','name','message')
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

// Post Route
router.post('/',(req,res,next) => {
    knex('test')
    .insert({
        id:req.body.id,
        name:req.body.name,
        message:req.body.message
    })
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

//Patch
router.patch('/:id',(req,res,next) => {
    let id = req.params.id
    knex('test')
    .where('id',id)
    .update({
        id:req.body.id,
        name:req.body.name,
        message:req.body.message
    })
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

//Delete
router.delete('/:id',(req,res,next) => {
    let id = req.params.id;
    let body = req.body;
    knex('test')
    .where('id',id)
    .returning(['id','name','message'])
    .del()
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

//error
router.use((err, req, res, next) => {
    const status = err.status || 404
    res.status(status).json({ error: err })
})
  
router.use((req, res, next) => {
    res.status(404).json({ error: { status: 404, message: 'Not found' }})
})


module.exports = router;