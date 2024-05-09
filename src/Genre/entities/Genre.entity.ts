// src/entities/Genre.ts
import { BookGenre } from "../../BookGenre/entities/BookGenre.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Genre {
  @PrimaryGeneratedColumn({ name: "genre_id" })
  genreId: number;

  @Column()
  name: string;

  @OneToMany(() => BookGenre, (bookGenre) => bookGenre.genre)
  bookGenres: BookGenre[];

  // Phương thức getter cho URL
  get url(): string {
    return "something";
  }
}
