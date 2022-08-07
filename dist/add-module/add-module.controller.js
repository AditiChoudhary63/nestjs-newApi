"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddModuleController = void 0;
const common_1 = require("@nestjs/common");
const add_module_service_1 = require("./add-module.service");
const dto_1 = require("./dto");
let AddModuleController = class AddModuleController {
    constructor(addService) {
        this.addService = addService;
    }
    sumArray(dto) {
        console.log(dto);
        return 'the sum is ' + this.addService.sum_array(dto.array);
    }
};
__decorate([
    (0, common_1.Post)('sum_array'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.AddDto]),
    __metadata("design:returntype", void 0)
], AddModuleController.prototype, "sumArray", null);
AddModuleController = __decorate([
    (0, common_1.Controller)('add'),
    __metadata("design:paramtypes", [add_module_service_1.AddModuleService])
], AddModuleController);
exports.AddModuleController = AddModuleController;
//# sourceMappingURL=add-module.controller.js.map