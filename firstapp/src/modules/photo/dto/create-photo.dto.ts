import { ApiProperty } from "@nestjs/swagger";

export class CreatePhotoDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    filename: string;
    @ApiProperty()
    views: number;
    @ApiProperty()
    isPublished: boolean;
    @ApiProperty()
    metadataId: number
}
  