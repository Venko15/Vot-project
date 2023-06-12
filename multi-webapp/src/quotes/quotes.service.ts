import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as querystring from 'querystring';

@Injectable()
export class QuotesService {

        async getQuote(type: string){
            let resp;
            var quote={
                text:"undefined",
                author: "undefined"
            }
            try{
            switch(type){
                case 'motivational':
                    resp = await axios.post("https://api.forismatic.com/api/1.0/", querystring.stringify({"method":'getQuote', "format":'json', "lang":'en'}))
                    quote.text = resp.data.quoteText;
                    quote.author = resp.data.quoteAuthor;
                    break; 
                case 'brba':
                    resp = await axios.get("https://api.breakingbadquotes.xyz/v1/quotes")
                    quote.text = resp.data[0].quote;
                    quote.author = resp.data[0].author;
                    break;
                case 'stoicism':
                    resp = await axios.get("https://api.themotivate365.com/stoic-quote");
                    quote.text = resp.data.quote;
                    quote.author = resp.data.author;
                    break;
                case 'kanye':
                    resp = await axios.get("https://api.kanye.rest/");
                    quote.text = resp.data.quote;
                    quote.author = "Kanye West"; 
                    break;
                default:
                        return {code:404, msg:"Invalid quote type"};
                }   
            }catch(err){

            }
                return {code:200, quote:quote};

        }
}
