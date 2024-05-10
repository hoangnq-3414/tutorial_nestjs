import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";
import { CreateAuthorDto } from "../dto/author.create.dto";
import { AuthorService } from "../services/author.service";
import { UpdateAuthorDto } from "../dto/author.update.dto";

@Controller("author")
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}
  @Post()
  createAuthor(@Body() author: CreateAuthorDto): Promise<CreateAuthorDto> {
    return this.authorService.createAuthor(author);
  }

  @Get()
  getListAuthor() {
    return this.authorService.getListAuthor();
  }

  @Get(":id")
  getDetailAuthor(
    @Param("id", ParseIntPipe) id: number,
  ): Promise<CreateAuthorDto> {
    return this.authorService.getDetailAuthor(id);
  }

  @Put()
  UpdateAuthor(@Body() authorUpdateDto: UpdateAuthorDto) {
    return this.authorService.updateAuthor(authorUpdateDto);
  }

  @Delete(":id")
  DeleteAuthor(@Param("id", ParseIntPipe) id: number): Promise<string> {
    return this.authorService.deleteAuthor(id);
  }
}
