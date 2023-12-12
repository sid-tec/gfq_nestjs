import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServidoresModule } from './servidores/servidores.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ServidoresModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
