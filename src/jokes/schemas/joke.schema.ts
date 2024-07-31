import { Schema } from 'mongoose';

export const JokeSchema = new Schema({
  type: { type: String, required: true },
  content: { type: String, required: true },
});
