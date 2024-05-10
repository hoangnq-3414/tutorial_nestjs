import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import {
  LIFESPAN_MAX_LENGTH,
  LIFESPAN_MIN_LENGTH,
  NAME_MAX_LENGTH,
} from "src/util/constants";

export class UpdateAuthorDto {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(NAME_MAX_LENGTH)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(NAME_MAX_LENGTH)
  familyName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(NAME_MAX_LENGTH)
  name: string;

  @IsOptional()
  @Length(LIFESPAN_MIN_LENGTH, LIFESPAN_MAX_LENGTH)
  lifespan: string;

  @IsOptional()
  @IsDateString()
  dateOfBirth: Date;

  @IsOptional()
  @IsDateString()
  dateOfDeath: Date;
}
