import { ApiProperty } from '@nestjs/swagger';

export class Article {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ nullable: true })
  content?: string;

  @ApiProperty()
  createdAt?: Date;

  @ApiProperty()
  updatedAt?: Date;

  @ApiProperty()
  isPublished: boolean;
}
