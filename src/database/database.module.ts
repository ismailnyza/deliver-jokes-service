// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://backend-admin:nZ8XUfjQoXeG4tKY@maincluster.3ehwinw.mongodb.net/?retryWrites=true&w=majority&appName=maincluster',
    ),
  ],
})
export class DatabaseModule {}
