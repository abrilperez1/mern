import Gestor from '../models/gestorModel.js'
import asyncHandler from 'express-async-handler'

//getUsers function to get all users
export const getGestores = asyncHandler(async(req, res) => {
    const gestores = await Gestor.find({})
    res.json(gestores)
})

//getUserById function to retrieve user by id
export const getGestorById  = asyncHandler(async(req, res) => {
    const gestor = await Gestor.findById(req.params.id)

    //if user id match param id send user else throw error
    if(gestor){
        res.json(gestor)
    }else{
        res.status(404).json({message: "No se encontró este gestor"})
        res.status(404)
        throw new Error('No se encontró este gestor')
    }
})