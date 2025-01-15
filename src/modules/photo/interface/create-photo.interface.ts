import { PhotoMetadata } from "src/entity/photoMetadata.entity";

export class CreatePhotoInterface {
    id: number;
    name: string;
    description: string;
    filename: string;
    views: number;
    isPublished: boolean;
    // metadata: PhotoMetadata
}
  