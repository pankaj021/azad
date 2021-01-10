const express = require('express');
const router = express.Router();
const {getAll, getOne, createOne, updateOne, deleteOne, getOneByEmail, getOneByTargetId} = require('../controllers/donations');

router.get('/', getAll);
router.get('/email', getOneByEmail);
router.get('/target/:id', getOneByTargetId);
router.get('/:id', getOne);
router.post('/', createOne);
router.put('/:id', updateOne);
router.delete('/:id', deleteOne);

module.exports = router;
