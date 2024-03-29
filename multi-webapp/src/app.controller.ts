import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}
    @Get()
    renderPage(@Res() res) {
        res.sendFile(join(__dirname,"../src/","public/html", "index.html"))
    }
}
