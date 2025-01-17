import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entity/photo.entity';
import { PhotoMetadata } from './entity/photoMetadata.entity';
import { PhotoModule } from './modules/photo/photo.module';
import { dirname } from 'path';

@Module({
  imports: [
    PhotoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test',
      entities: [ Photo, PhotoMetadata ],
      synchronize: true,
      migrations: [dirname + '../migrations'],
      migrationsTableName: 'migrations_table',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
