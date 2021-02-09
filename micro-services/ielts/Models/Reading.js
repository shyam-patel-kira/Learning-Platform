import mongoose from 'mongoose'

const Schema = mongoose.Schema

const readingSchema = new Schema({
  test_id:{
      type:Number,
      required:true,
      unique:true
  },
  passage_1:{
      type:Object,
      required:true
  },
  passage_2:{
    type:Object,
    required:true
  },
  passage_3:{
    type:Object,
    required:true
  },
  questions:{
      type:Object,
      required:true
  }
})

const readingModel = mongoose.model('ielts_reading',readingSchema)
export default readingModel