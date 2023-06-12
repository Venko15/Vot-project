import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import axios from 'axios';
import * as querystring from 'querystring';
import { NOTFOUND } from 'dns';
import { randomInt } from 'crypto';
import { join } from 'path';

let types = ["motivational","brba", "stoicism", "kanye"];
@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

    @Get()
    async renderPage(@Res() res){
      res.sendFile(join(__dirname,"../../src/","public/html", "quotes.html"))
    }
    @Get('getQuote')
    async getQuote(@Query('type') type?:string){
        
        if(type == undefined){
            type = types[randomInt(0,4)];
        }
        return await this.quotesService.getQuote(type) 

          
    }

}
