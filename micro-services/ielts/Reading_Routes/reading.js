import express from 'express'

import readingModel from '../Models/Reading.js'

const readingRouter = express.Router()

readingRouter.get('/reading/test/:test_id',(req,res) => {
    readingModel.find({"test_id":req.params.test_id})
        .then(doc => {
            res.status(201).json({
                message:"Test obtained successfully",
                results:doc
            })
        })
        .catch(err => {
            res.json(err)
        })
        
})

export default readingRouter
