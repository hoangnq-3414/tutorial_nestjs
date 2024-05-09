import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Book } from "../entities/Book.entity";

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private readonly authorRepository: Repository<Book>
  ) {}
}
