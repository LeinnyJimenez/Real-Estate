const mongoose = require('mongoose');

const PropiedadSchema = new mongoose.Schema({
    title: {
        type: String,
        required : [true, 'El nombre debe ser obligatorio'],
        trim: true
    },
    description : {
        type: String,
        required : [true, 'Añadir descripción']
    },
    purpose : {
        to : {
            type: String,
            required: [true, 'Elija si es para venta o alquiler']
        },
        reached: {
            type: Boolean,
            default: false
        }
    },
    images : {
        type: Array,
        required : [true, 'Por favor, provea algunas imágenes']
    },
    ubication : {
        provincia : {
            type : String,
            required : [true, 'Seleccione una provincia']
        },
        address : {
            type : String,
            required : [true, 'Escriba detalles sobre la ubicación']
        },
        url : String
    },
    precio : {
        type: Number,
        required : [true, 'Establezca un precio']
    }
})

module.exports = mongoose.model('Propiedad', PropiedadSchema)