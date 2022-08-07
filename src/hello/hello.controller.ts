import { Controller, Get, Post } from "@nestjs/common";
import { HelloService } from "./hello.service";

@Controller('hello')
export class HelloController{
    constructor (private helloService : HelloService){}
@Get('hello')
helloWorld(){
return this.helloService.hello();
}
}