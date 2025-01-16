
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { photoProviders } from './photo.providers';
import { PhotoService } from './photo.service';
import { PhotosController } from './photo.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...photoProviders,
    PhotoService,
  ],
  controllers: [PhotosController]
})
export class PhotoModule {}
