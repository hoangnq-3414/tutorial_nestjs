// src/entities/BookInstance.ts
import { Book } from "../../Book/entities/Book.entity";
import { BookInstanceStatus } from "../../util/constants";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class BookInstance {
  @PrimaryGeneratedColumn({ name: "instance_id" })
  id: number;

  @ManyToOne(() => Book, (book) => book.bookInstances)
  book: Book;

  @Column()
  imprint: string;

  @Column({
    type: "enum",
    enum: BookInstanceStatus,
  })
  status: BookInstanceStatus;

  @Column({ type: "date" })
  dueBack: Date;

  // Phương thức getter cho URL
  get url(): string {
    return "something";
  }
}
