import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAuthorDto } from "../dto/author.create.dto";
import { plainToInstance } from "class-transformer";
import { Author } from "../entities/Author.entity";
import { UpdateAuthorDto } from "../dto/author.update.dto";

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async createAuthor(authorDto: CreateAuthorDto): Promise<CreateAuthorDto> {
    const saveAuthor = await this.authorRepository.save(authorDto);
    return plainToInstance(CreateAuthorDto, saveAuthor);
  }

  async getListAuthor() {
    const listAuthor = await this.authorRepository.find();
    return listAuthor.map((author) => plainToInstance(CreateAuthorDto, author));
  }

  async getDetailAuthor(id: number): Promise<CreateAuthorDto> {
    const detailAuthor = await this.authorRepository.findOne({
      where: { id: id },
    });
    return plainToInstance(CreateAuthorDto, detailAuthor);
  }

  async updateAuthor(authorUpdateDto: UpdateAuthorDto) {
    const author = await this.authorRepository.findOne({
      where: { id: authorUpdateDto.id },
    });
    if (!author) {
      throw new NotFoundException("Not found author");
    }

    this.authorRepository.merge(author, authorUpdateDto);

    const UpdateAuthor = await this.authorRepository.save(author);

    return plainToInstance(UpdateAuthorDto, UpdateAuthor);
  }

  async deleteAuthor(id: number): Promise<string> {
    const author = await this.authorRepository.findOne({
      where: { id: id },
      relations: ["books"],
    });

    if (!author) {
      throw new NotFoundException("Author not found");
    }

    if (author.books.length > 0) {
      throw new Error(
        "Cannot delete author. Author has books associated with them.",
      );
    }

    await this.authorRepository.delete(id);
    return "Author delete successfully";
  }
}
