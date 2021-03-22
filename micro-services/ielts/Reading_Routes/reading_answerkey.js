import express from 'express'
import readingAnswerKeyModel from '../Models/Reading_answerkey.js'

const readingAnswerRouter = express.Router()

readingAnswerRouter.get('/reading-answers/test/:test_id',(req,res) => {
    readingAnswerKeyModel.find({"test_id":req.params.test_id})
        .then(doc => {
            res.status(201).json({
                message:"Test answers obtained successfully",
                results:doc
            })
        })
        .catch(err => {
            res.json(err)
        })
})

export default readingAnswerRouter