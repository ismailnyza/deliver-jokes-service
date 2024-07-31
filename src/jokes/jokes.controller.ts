// src/jokes/jokes.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { JokesService } from './jokes.service';
import { CreateJokeDto } from './dto/create-joke.dto';
import { Joke } from './interfaces/joke.interface';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Post()
  addJoke(@Body() createJokeDto: CreateJokeDto): Promise<Joke> {
    return this.jokesService.addJoke(createJokeDto);
  }

  @Get('random')
  getRandomJoke(): Promise<Joke> {
    return this.jokesService.getRandomJoke();
  }

  @Get('types')
  getJokeTypes(): Promise<string[]> {
    return this.jokesService.getJokeTypes();
  }

  @Get()
  async getJokeByType(@Query('type') type: string): Promise<Joke> {
    if (type) {
      return this.jokesService.getRandomJokeByType(type);
    } else {
      return this.jokesService.getRandomJoke();
    }
  }
}
