import { Injectable } from '@nestjs/common';
import { AddDto } from './dto';

@Injectable()
export class AddModuleService {
    sum_array(arr){
        var sum=0,num : any;
        for(num of arr){
            sum =sum + num;
        }
     return sum;
    }
}
