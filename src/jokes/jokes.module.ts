import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JokesService } from './jokes.service';
import { JokesController } from './jokes.controller';
import { JokeSchema } from './schemas/joke.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Joke', schema: JokeSchema }])],
  controllers: [JokesController],
  providers: [JokesService],
})
export class JokesModule {}
