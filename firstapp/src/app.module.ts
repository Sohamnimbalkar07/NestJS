import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PhotoModule } from './modules/photo/photo.module';
@Module({
  imports: [PhotoModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
