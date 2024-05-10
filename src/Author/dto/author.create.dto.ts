import {
  IsNotEmpty,
  IsOptional,
  Length,
  IsDateString,
  IsString,
  MaxLength,
} from "class-validator";
import {
  LIFESPAN_MAX_LENGTH,
  LIFESPAN_MIN_LENGTH,
  NAME_MAX_LENGTH,
} from "src/util/constants";

export class CreateAuthorDto {
  @IsNotEmpty()
  @MaxLength(NAME_MAX_LENGTH)
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @MaxLength(NAME_MAX_LENGTH)
  @IsString()
  familyName: string;

  @IsNotEmpty()
  @MaxLength(NAME_MAX_LENGTH)
  @IsString()
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
