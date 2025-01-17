
import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotosController } from './photo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from 'src/entity/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  providers: [
    PhotoService,
    Photo
  ],
  controllers: [PhotosController]
})
export class PhotoModule {}