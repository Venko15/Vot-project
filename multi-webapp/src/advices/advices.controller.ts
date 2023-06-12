import { Controller , Get, Res} from "@nestjs/common";
import { AdvicesService } from "./advices.service";
import axios from "axios";
import { join } from "path";
import { SkipThrottle, Throttle } from "@nestjs/throttler";

@Controller('advices')
export class AdvicesContoller{
   constructor(private readonly adviceService: AdvicesService){} 

    @Get()
    async renderPage(@Res() res){
        res.sendFile(join(__dirname,"../../src/","public/html", "advices.html"))
    }
    @Throttle()
    @Get("getAdvice")
    async getAdvice(){
        return await this.adviceService.getAdvice();

    }
}