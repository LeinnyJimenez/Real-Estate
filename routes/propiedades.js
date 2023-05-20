const express = require('express');
const {getAllPropiedades, createPropiedad, getSinglePropiedad, updatePropiedad, deletePropiedad} = require('../controllers/propiedades')

const router = express.Router()

router.route('/').get(getAllPropiedades).post(createPropiedad)
router.route('/:id').get(getSinglePropiedad).patch(updatePropiedad).delete(deletePropiedad);

module.exports = router
