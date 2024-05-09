import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BookInstance } from "../entities/BookInstance.entity";
import { Book } from "src/Book/entities/Book.entity";
import {
  CreateBookInstanceDto,
  UpdateBookInstanceDto,
} from "../dto/bookInstance.dto";

@Injectable()
export class BookInstanceService {
  constructor(
    @InjectRepository(BookInstance)
    private bookInstanceRepository: Repository<BookInstance>,
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async create(createDto: CreateBookInstanceDto): Promise<BookInstance> {
    const book = await this.bookRepository.findOne({
      where: { bookId: createDto.bookId },
    });
    if (!book) {
      throw new Error("Book not found");
    }

    const bookInstance = this.bookInstanceRepository.create({
      book: book,
      imprint: createDto.imprint,
      status: createDto.status,
      dueBack: createDto.dueBack,
    });

    return this.bookInstanceRepository.save(bookInstance);
  }

  findAll(): Promise<BookInstance[]> {
    return this.bookInstanceRepository.find({ relations: ["book"] });
  }

  findOne(id: number): Promise<BookInstance> {
    return this.bookInstanceRepository.findOne({
      where: { instanceId: id },
      relations: ["book"],
    });
  }

  async update(updateDto: UpdateBookInstanceDto): Promise<BookInstance> {
    const bookInstance = await this.bookInstanceRepository.preload({
      instanceId: updateDto.instanceId,
      ...updateDto,
    });

    if (!bookInstance) {
      throw new Error("Book instance not found");
    }

    return this.bookInstanceRepository.save(bookInstance);
  }

  async remove(id: number): Promise<void> {
    await this.bookInstanceRepository.delete(id);
  }
}
