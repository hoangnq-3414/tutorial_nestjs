import {
  IsNotEmpty,
  IsOptional,
  Length,
  IsDateString,
  IsString,
  IsInt,
  Min,
  MaxLength,
} from "class-validator";

export class CreateAuthorDto {
  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  familyName: string;

  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  name: string;

  @IsOptional()
  @Length(4, 100)
  lifespan: string;

  @IsOptional()
  @IsDateString()
  dateOfBirth: Date;

  @IsOptional()
  @IsDateString()
  dateOfDeath: Date;
}

export class UpdateAuthorDto {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  authorId: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  familyName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsOptional()
  @Length(4, 100)
  lifespan: string;

  @IsOptional()
  @IsDateString()
  dateOfBirth: Date;

  @IsOptional()
  @IsDateString()
  dateOfDeath: Date;
}
