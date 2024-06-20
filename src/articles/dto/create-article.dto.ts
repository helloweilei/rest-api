import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ nullable: true })
  content?: string;

  @ApiProperty({ required: false, default: false })
  isPublished: boolean;
}
