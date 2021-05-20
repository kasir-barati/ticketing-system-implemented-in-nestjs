import { Controller, Get } from '@nestjs/common';

@Controller()
class TicketController {
    @Get('/api/tickets')
    async getTickets(): Promise<object> {
        return {};
    }
}

export { TicketController };
