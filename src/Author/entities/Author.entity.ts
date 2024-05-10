import { Book } from "../../Book/entities/Book.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Author {
  @PrimaryGeneratedColumn({ name: "author_id" })
  id: number;

  @Column({ name: "first_name" })
  firstName: string;

  @Column({ name: "family_name" })
  familyName: string;

  @Column()
  name: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  lifespan: string;

  @Column({ name: "date_of_birth", type: "date", nullable: true })
  dateOfBirth: Date;

  @Column({ name: "date_of_death", type: "date", nullable: true })
  dateOfDeath: Date;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];

  // Phương thức getter cho URL
  get url(): string {
    return "something";
  }
}
