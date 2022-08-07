import { ArrayMaxSize, ArrayMinSize, IsArray } from "class-validator";

export class AddDto{
    @IsArray()
    @ArrayMinSize(2)
    @ArrayMaxSize(10)
    array : Array<10>;
}