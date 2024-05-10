// src/entities/BookGenre.ts
import { Book } from "../../Book/entities/Book.entity";
import { Genre } from "../../Genre/entities/Genre.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BookGenre {
  @PrimaryGeneratedColumn({ name: "book_gender_id" })
  id: number;

  @ManyToOne(() => Book, (book) => book.bookGenres)
  book: Book;

  @ManyToOne(() => Genre, (genre) => genre.bookGenres)
  genre: Genre;
}
