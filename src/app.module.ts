import * as path from 'path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [
                path.join(__dirname, '..', '.env'),
                path.join(__dirname, '..', '.env.mongoose'),
            ],
        }),
        MongooseModule.forRoot(
            // I have to use this.ConfigService.get('MONGODB_USERNAME') and etc
            `mongodb://${process.env.MONGODB_USERNAME}${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DEVELOPMENT_DATABASE_NAME}?retryWrites=true&retryReads=true`,
        ),
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
