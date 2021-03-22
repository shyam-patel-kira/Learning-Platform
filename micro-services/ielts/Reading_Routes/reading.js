import express from 'express'

import readingModel from '../Models/Reading.js'
import userReadingAnswersModel from '../Models/Reading_user_answers.js'

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

readingRouter.post('/reading/test/user-answers/:test_id',(req,res) => {
    const test_id = req.params.test_id; 
    const answers = req.body.answers;

    const userAnswers = new userReadingAnswersModel({
        test_id:test_id,
        answers:answers
    })
    userAnswers.save()
        .then(doc => {
            res.status(201).json({
                message:"Test submitted successfully.",
                results:doc
            })
        })
        .catch(err => {
            res.json(err)
        })
})

export default readingRouter
