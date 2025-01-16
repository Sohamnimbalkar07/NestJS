import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { CreatePhotoInterface } from './interface/create-photo.interface';
import { PhotoService } from './photo.service';
import { ApiBody } from '@nestjs/swagger';

@Controller('photo')
export class PhotosController {

  constructor(private photoService : PhotoService) {}

  @Post()
  @ApiBody({type: CreatePhotoDto})
  async createPhoto( @Body() photo: CreatePhotoDto): Promise<CreatePhotoInterface>  {
    return this.photoService.create(photo);
  }
}