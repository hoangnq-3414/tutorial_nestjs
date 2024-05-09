import {
  IsString,
  IsNotEmpty,
  IsISBN,
  IsOptional,
  IsInt,
  Min,
} from "class-validator";

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  summary: string;

  @IsNotEmpty()
  @IsISBN()
  ISBN: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  authorId?: number;
}

export class UpdateBookDto {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  bookId: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  summary: string;

  @IsNotEmpty()
  @IsISBN()
  ISBN: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  authorId?: number;
}
