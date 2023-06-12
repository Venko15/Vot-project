import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import axios from 'axios';

import { JokesService } from './jokes.service';
import { randomInt } from 'crypto';
import { join } from 'path';
import { SkipThrottle, Throttle } from "@nestjs/throttler";
let config = {
    headers: {
        header1: "Accept: application/json",
    }
}
let types = ["chuck","dad", "yomama"];

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Get()
  async renderPage(@Res() res){
      res.sendFile(join(__dirname,"../../src/","public/html", "jokes.html"))
  }
  @Throttle()
  @Get("getJoke")
  async getJoke(@Query('type') type: string){

    if(type == undefined){
        type = types[randomInt(0,3)];
    }
    return await this.jokesService.getJoke(type)

  }
}
