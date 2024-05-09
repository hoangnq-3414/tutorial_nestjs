import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookService } from "./services/book.service";
import { BookController } from "./controllers/book.controller";
import { Book } from "./entities/Book.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [BookService],
  exports: [BookService, TypeOrmModule],
})
export class BookModule {}
