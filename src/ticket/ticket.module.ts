import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TicketController } from './controllers/ticket.controller';

@Module({
    imports: [
        // MongooseModule.forFeature([
        //     {
        //         name:
        //     }
        // ])
    ],
    controllers: [TicketController],
})
class TicketModule {}

export { TicketModule };
