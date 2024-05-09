import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { BookService } from "../services/book.service";
import { CreateBookDto, UpdateBookDto } from "../dto/book.dto";

@Controller("book")
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() bookDto: CreateBookDto) {
    return this.bookService.create(bookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.bookService.findOne(id);
  }

  @Patch()
  update(@Body() bookDto: UpdateBookDto) {
    return this.bookService.update(bookDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.bookService.remove(id);
  }
}
