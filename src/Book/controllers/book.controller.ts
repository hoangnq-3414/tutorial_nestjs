import { Controller } from "@nestjs/common";
import { BookService } from "../services/book.service";

@Controller("book")
export class BookController {
  constructor(private readonly bookService: BookService) {}
}
