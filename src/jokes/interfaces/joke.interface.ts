// src/jokes/interfaces/joke.interface.ts
import { Document } from 'mongoose';

export interface Joke extends Document {
  id: string;
  type: string;
  content: string;
}
