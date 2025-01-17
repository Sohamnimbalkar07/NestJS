import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from '../../entity/photo.entity';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { CreatePhotoInterface } from './interface/create-photo.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  async create(photo: CreatePhotoDto ) : Promise<CreatePhotoInterface> {
    const createPhoto = new Photo();
    // createPhoto.name = photo.name;
    createPhoto.desc = photo.description;
    createPhoto.filename = photo.filename;
    createPhoto.isPublished = photo.isPublished;
    createPhoto.views = photo.views;
    return this.photoRepository.save(photo);
  } 
}
