const Propiedad = require('../models/Propiedades')

const getAllPropiedades = async (req, res) => {
    try {
        const propiedades = await Propiedad.find({});
        res.status(200).json({propiedades})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const getSinglePropiedad = async (req, res) => {
    try{
        const {id: taskID} = req.params
        const propiedad = await Propiedad.findOne({_id: taskID});
        if(!propiedad) {
            return res.status(404).json({msg : 'propiedad no encontrada'})
        }

        res.status(200).json({propiedad})
    }catch(error){
        res.status(500).json({msg: error})
    }
}

const createPropiedad = async (req, res) => {
    console.log(req.body);
    try {
        const propiedad = await Propiedad.create(req.body);
        res.status(201).json(propiedad)
    } catch (err) {
        res.status(500).json({msg:err})
    }
}


const deletePropiedad = async (req, res) => {
    try{
        const propiedad = await Propiedad.findOneAndDelete({_id: req.params.id});
        
        if(!propiedad) {
            return res.status(404).json({msg : 'Propiedad no encontrada'})
        }   

        res.status(200).json({propiedad})
    }catch(error){
        res.status(500).json({msg: error})
    }
}

const updatePropiedad = async (req, res) => {
    try {
        const {_id:taskID} = req.params
        const propiedad = await Propiedad.findOneAndUpdate({_id : taskID}, req.body, {
            new: true, runValidators: true
        })

        if(!propiedad) {
            return res.status(404).json({msg : 'Propiedad no encontrada'})
        }
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
module.exports = {getAllPropiedades,createPropiedad, getSinglePropiedad, updatePropiedad, deletePropiedad}