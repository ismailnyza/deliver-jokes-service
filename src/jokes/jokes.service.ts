// src/jokes/jokes.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Joke } from './interfaces/joke.interface';
import { CreateJokeDto } from './dto/create-joke.dto';

@Injectable()
export class JokesService {
  constructor(@InjectModel('Joke') private readonly jokeModel: Model<Joke>) {}

  async addJoke(createJokeDto: CreateJokeDto): Promise<Joke> {
    const newJoke = new this.jokeModel(createJokeDto);
    return newJoke.save();
  }

  async getRandomJoke(): Promise<Joke> {
    const jokes = await this.jokeModel.find().exec();
    if (jokes.length === 0) {
      throw new NotFoundException('No jokes found');
    }
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  }

  async getJokeTypes(): Promise<string[]> {
    const jokes = await this.jokeModel.find().exec();
    return [...new Set(jokes.map((joke) => joke.type))];
  }

  async getRandomJokeByType(type: string): Promise<Joke> {
    const jokes = await this.jokeModel
      .find({ type: { $regex: new RegExp(type, 'i') } })
      .exec();
    if (jokes.length === 0) {
      throw new NotFoundException(`No jokes found for type: ${type}`);
    }
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  }
}
