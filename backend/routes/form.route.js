const express=require('express')
const routes=express.Router()
const multer = require("multer");
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

const {
    getForm,
    getForms,
    addForm,
    deleteForm
}=require('../controllers/form.controller')

routes.post('/addform',upload.single("bsign"),addForm)
routes.get('/getforms',getForms)
routes.get('/getform/:id',getForm)
routes.delete('/:id',deleteForm)

module.exports=routes