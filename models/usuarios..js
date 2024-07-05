import pkg from 'mongoose';

const { Schema, model } = pkg;
const CarSchema = new Schema({
    id: Int,
    
});
export default model('Car', CarSchema);