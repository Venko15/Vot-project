import { Controller , Get, Res} from "@nestjs/common";
import { AdvicesService } from "./advices.service";
import axios from "axios";
import { join } from "path";
/*
random advice - https://api.adviceslip.com/
	/advice
*/
@Controller('advices')
export class AdvicesContoller{
   constructor(private readonly adviceService: AdvicesService){} 

    @Get()
    async renderPage(@Res() res){
        res.sendFile(join(__dirname,"../../src/","public/html", "advices.html"))
    }
    @Get("getAdvice")
    async getAdvice(){
        return await this.adviceService.getAdvice();

    }
}