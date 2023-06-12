import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class AdvicesService{
    async getAdvice(){
        try{
            let resp = await axios.get("https://api.adviceslip.com/advice");
            let advice = resp.data.slip.advice;
            return {code:200, advice:advice};
        }catch(err){
            return {code:404, msg:"Error occured"};
        }
    }
}