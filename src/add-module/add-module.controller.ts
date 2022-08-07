import { Body, Controller, Post } from "@nestjs/common";
import { AddModuleService } from "./add-module.service";
import { AddDto } from "./dto";

@Controller('add')
export class AddModuleController{
    constructor(private addService: AddModuleService){}
  @Post('sum_array')
  sumArray(@Body() dto: AddDto){
    console.log(dto);
    return 'the sum is '+this.addService.sum_array(dto.array);
  }
}