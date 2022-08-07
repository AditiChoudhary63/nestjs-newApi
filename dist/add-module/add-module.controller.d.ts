import { AddModuleService } from "./add-module.service";
import { AddDto } from "./dto";
export declare class AddModuleController {
    private addService;
    constructor(addService: AddModuleService);
    sumArray(dto: AddDto): string;
}
