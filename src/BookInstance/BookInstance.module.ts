import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookModule } from "../Book/Book.module";
import { BookInstance } from "./entities/BookInstance.entity";
import { BookInstanceController } from "./controllers/bookInstance.controller";
import { BookInstanceService } from "./services/book.service";
import { Book } from "src/Book/entities/Book.entity";

@Module({
  imports: [TypeOrmModule.forFeature([BookInstance, Book]), BookModule],
  controllers: [BookInstanceController],
  providers: [BookInstanceService],
  exports: [BookInstanceService],
})
export class BookInstanceModule {}
