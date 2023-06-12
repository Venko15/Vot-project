import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class JokesService {
    async getJoke(type:string){
        let resp;
        let joke;
        try{
            switch (type) {
                case 'chuck':
                    resp = await axios.get('https://api.chucknorris.io/jokes/random');
                    joke = resp.data.value;
                    break;
                case 'dad':
                    resp = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept :"application/json"}});
                    joke = resp.data.joke;
                    break;
                case 'yomama':
                    resp = await axios.get("https://api.yomomma.info/")
                    joke = resp.data.joke;
                    break;
                default:
                    return { code: 404, msg: 'Invalid joke type' };
            }
        }catch(err){
            throw Error("Failed to fetch");
        }
    
        return {code:200, joke: joke};
    }
}
