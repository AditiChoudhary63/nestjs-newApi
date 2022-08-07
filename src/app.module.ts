import { Module } from '@nestjs/common'; 
import { HelloModule } from './hello/hello.module';
import { AddModuleModule } from './add-module/add-module.module';

@Module({
  imports: [ HelloModule, AddModuleModule]
})
export class AppModule {}
