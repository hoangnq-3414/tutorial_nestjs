import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from "@nestjs/common";
import { BookInstanceService } from "../services/book.service";
import {
  CreateBookInstanceDto,
  UpdateBookInstanceDto,
} from "../dto/bookInstance.dto";

@Controller("book-instances")
export class BookInstanceController {
  constructor(private readonly bookInstanceService: BookInstanceService) {}

  @Post()
  create(@Body() createBookInstanceDto: CreateBookInstanceDto) {
    return this.bookInstanceService.create(createBookInstanceDto);
  }

  @Get()
  findAll() {
    return this.bookInstanceService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.bookInstanceService.findOne(+id);
  }

  @Patch(":id")
  update(@Body() updateBookInstanceDto: UpdateBookInstanceDto) {
    return this.bookInstanceService.update(updateBookInstanceDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.bookInstanceService.remove(id);
  }
}
