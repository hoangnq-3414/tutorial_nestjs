import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Book } from "../entities/Book.entity";
import { Author } from "src/Author/entities/Author.entity";
import { CreateBookDto, UpdateBookDto } from "../dto/book.dto";

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  async create(bookDto: CreateBookDto): Promise<Book> {
    const book = new Book();
    book.title = bookDto.title;
    book.summary = bookDto.summary;
    book.ISBN = bookDto.ISBN;

    if (bookDto.authorId) {
      const author = await this.authorRepository.findOne({
        where: { authorId: bookDto.authorId },
      });
      if (!author) {
        throw new Error("Author not found");
      }
      book.author = author;
    }

    return this.bookRepository.save(book);
  }

  findAll(): Promise<Book[]> {
    return this.bookRepository.find({ relations: ["author"] });
  }

  findOne(id: number): Promise<Book> {
    return this.bookRepository.findOne({
      where: { bookId: id },
      relations: ["author"],
    });
  }

  async update(bookDto: UpdateBookDto): Promise<Book> {
    const book = await this.bookRepository.preload({
      bookId: bookDto.bookId,
      ...bookDto,
    });
    if (!book) {
      throw new Error("Book not found");
    }
    return this.bookRepository.save(book);
  }

  async remove(id: number): Promise<string> {
    const book = await this.bookRepository.findOne({
      where: { bookId: id },
    });

    if (book!) {
      throw new Error("Book not found");
    }
    await this.bookRepository.delete(id);
    return "Delete book successfully";
  }
}
