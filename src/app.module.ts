import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// jokes
import { DatabaseModule } from './database/database.module';
import { JokesModule } from './jokes/jokes.module';

@Module({
  imports: [DatabaseModule, JokesModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

// src/app.module.ts
