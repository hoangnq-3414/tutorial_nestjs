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
import { CreateAuthorDto, UpdateAuthorDto } from "../dto/author.dto";
import { AuthorService } from "../services/author.service";

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
    @Param("id", ParseIntPipe) id: number
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
