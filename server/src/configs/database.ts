import mongoose from 'mongoose';
import config from './env';

const { MG_HOST, MG_PORT, MG_NAME, MG_USERNAME, MG_PASSWORD, MONGODB_URI } = config;

mongoose.set('strictQuery', true);
// export const connect = async () => mongoose.connect(`mongodb://${MG_HOST}:${MG_PORT}/${MG_NAME}`);
const uri = MONGODB_URI ? MONGODB_URI : `mongodb+srv://dmt220403:2ff6p6qQ27It2dhS@webproject.n65fb28.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
export const connect = async () => mongoose.connect(uri, {})