// src/entities/Book.ts
import { Author } from "../../Author/entities/Author.entity";
import { BookGenre } from "../../BookGenre/entities/BookGenre.entity";
import { BookInstance } from "../../BookInstance/entities/BookInstance.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn({ name: "book_id" })
  bookId: number;

  @Column()
  title: string;

  @Column("text")
  summary: string;

  @Column()
  ISBN: string;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;

  @OneToMany(() => BookGenre, (bookGenre) => bookGenre.book)
  bookGenres: BookGenre[];

  @OneToMany(() => BookInstance, (bookInstance) => bookInstance.book)
  bookInstances: BookInstance[];

  // Phương thức getter cho URL
  get url(): string {
    return "something";
  }
}
