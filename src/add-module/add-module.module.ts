import { Module, Post } from '@nestjs/common';
import { AddModuleController } from './add-module.controller';
import { AddModuleService } from './add-module.service';

@Module({
  controllers:[AddModuleController],
  providers: [AddModuleService]
})
export class AddModuleModule {
  

}
