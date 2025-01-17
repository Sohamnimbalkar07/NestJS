import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne
} from 'typeorm';
import { PhotoMetadata } from './photoMetadata.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  desc: string;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;

  @OneToOne(() => PhotoMetadata, (photoMetadata) => photoMetadata.photo)
  metadata: PhotoMetadata;
}