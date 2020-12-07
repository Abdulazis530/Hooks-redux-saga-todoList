const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo')
const moment = require('moment')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  let response = {}
  try {
    const result = await Todo.find().sort({ createdAt: -1 })
    response.message = "Load data success!"
    response.data = result
    res.status(200).json(response)
  } catch (error) {
    console.log(error);
    response.message = "Load data failed!"
    response.data = null
    res.status(500).json(error)
  }
});


router.post('/', async (req, res, next) => {
  let response = {}
  const { id, title, content, isDone } = req.body
  try {
    const data = await Todo.create({ id, title, content, isDone })
    response.data = data
    response.message = "POST data success!"
    res.status(201).json(response)
  } catch (error) {
    console.log(error);
    response.data = null
    response.message = "POST data failed!"
    res.status(500).json(response)
  }
});


router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  let response = {}
  try {
    const data = await Todo.findOneAndRemove({ id })
    response.data = data
    response.message = "Delete data success!"
    res.status(201).json(data)
  } catch (error) {
    console.log(error);
    response.data = null
    response.message = "Delete data failed!"
    res.status(500).json(error)
  }
});

router.put('/:id', async (req, res, next) => {
  const { title, content, isDone } = req.body
  const id = req.params.id
  let response = {}
  try {
    let todo = await Todo.findOneAndUpdate({ id }, { title, content, isDone }, {
      new: true
    });

    response.data = todo
    response.message = "Update Success!"
    res.status(200).json(response)
  } catch (error) {
    console.log(error)
    response.message = "Update data failed!"
    response.data = null
    res.status(400).json(response)
  }
});
module.exports = router;
