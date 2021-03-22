import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userReadingAnswersSchema = new Schema({
    test_id:{
        type:Number,
        required:true
    },
    answers:{
        type:Object,
        required:true
    }
})

const userReadingAnswersModel = mongoose.model('ielts_reading_user_answer',userReadingAnswersSchema)
export default userReadingAnswersModel