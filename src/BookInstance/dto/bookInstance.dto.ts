import {
  IsNotEmpty,
  IsInt,
  IsEnum,
  IsOptional,
  IsDateString,
} from "class-validator";
import { Type } from "class-transformer";
import { BookInstanceStatus } from "../../util/constants";

export class CreateBookInstanceDto {
  @IsNotEmpty()
  @IsInt()
  bookId: number;

  @IsNotEmpty()
  imprint: string;

  @IsNotEmpty()
  @IsEnum(BookInstanceStatus, { each: true })
  status: BookInstanceStatus;

  @IsOptional()
  @IsDateString()
  dueBack: Date;
}

export class UpdateBookInstanceDto {
  @IsNotEmpty()
  @IsInt()
  instanceId: number;

  @IsOptional()
  @IsInt()
  bookId?: number;

  @IsOptional()
  imprint?: string;

  @IsOptional()
  @IsEnum(BookInstanceStatus, { each: true })
  status?: BookInstanceStatus;

  @IsOptional()
  @IsDateString()
  @Type(() => Date)
  dueBack?: Date;
}
