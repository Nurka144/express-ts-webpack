import config  from 'config'
import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const mongoUrl: string = config.get('mongoUrl')
        await mongoose.connect (mongoUrl, {
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('MongoDb connected...')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB