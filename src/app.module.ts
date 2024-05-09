import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { AuthorModule } from "./Author/Author.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Author } from "./Author/entities/Author.entity";
import { BookInstance } from "./BookInstance/entities/BookInstance.entity";
import { Book } from "./Book/entities/Book.entity";
import { Genre } from "./Genre/entities/Genre.entity";
import { BookGenre } from "./BookGenre/entities/BookGenre.entity";
import { APP_FILTER } from "@nestjs/core";
import { AllExceptionsFilter } from "./common/all-exceptions.filter";
import { BookModule } from "./Book/Book.module";
import { BookInstanceModule } from "./BookInstance/BookInstance.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      // entities: [ __dirname + './**/*.entity{.ts,.js}'],
      entities: [Author, Book, BookInstance, Genre, BookGenre],
      synchronize: false,
    }),
    AuthorModule,
    BookModule,
    BookInstanceModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
