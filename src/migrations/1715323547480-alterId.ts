import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterId1715323547480 implements MigrationInterface {
  name = "AlterId1715323547480";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`book_instance\` DROP FOREIGN KEY \`FK_d8b999a217a109000ee17b76010\``
    );
    await queryRunner.query(
      `ALTER TABLE \`book\` DROP FOREIGN KEY \`FK_5331c11d441a19dff27a1a0b10b\``
    );
    await queryRunner.query(
      `ALTER TABLE \`book_genre\` DROP FOREIGN KEY \`FK_32ae40d616954f2d84a0a309c8e\``
    );
    await queryRunner.query(
      `ALTER TABLE \`book_genre\` DROP FOREIGN KEY \`FK_804535b55258cc42f93328163db\``
    );
    await queryRunner.query(
      `ALTER TABLE \`book_instance\` CHANGE \`bookBookId\` \`bookId\` int NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`book\` CHANGE \`authorAuthorId\` \`authorId\` int NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`book_genre\` DROP COLUMN \`bookBookId\``
    );
    await queryRunner.query(
      `ALTER TABLE \`book_genre\` DROP COLUMN \`genreGenreId\``
    );
    await queryRunner.query(
      `ALTER TABLE \`book_genre\` ADD \`bookId\` int NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`book_genre\` ADD \`genreId\` int NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`book_instance\` ADD CONSTRAINT \`FK_0ae696d2366c8a89f5bc0d90181\` FOREIGN KEY (\`bookId\`) REFERENCES \`book\`(\`book_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`book\` ADD CONSTRAINT \`FK_66a4f0f47943a0d99c16ecf90b2\` FOREIGN KEY (\`authorId\`) REFERENCES \`author\`(\`author_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`book_genre\` ADD CONSTRAINT \`FK_d3446a42df5e6f8158a5bd10f1a\` FOREIGN KEY (\`bookId\`) REFERENCES \`book\`(\`book_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`book_genre\` ADD CONSTRAINT \`FK_564b744154ba1b5bc35e851f8bc\` FOREIGN KEY (\`genreId\`) REFERENCES \`genre\`(\`genre_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`book_genre\` DROP FOREIGN KEY \`FK_564b744154ba1b5bc35e851f8bc\``
    );
    await queryRunner.query(
      `ALTER TABLE \`book_genre\` DROP FOREIGN KEY \`FK_d3446a42df5e6f8158a5bd10f1a\``
    );
    await queryRunner.query(
      `ALTER TABLE \`book\` DROP FOREIGN KEY \`FK_66a4f0f47943a0d99c16ecf90b2\``
    );
    await queryRunner.query(
      `ALTER TABLE \`book_instance\` DROP FOREIGN KEY \`FK_0ae696d2366c8a89f5bc0d90181\``
    );
    await queryRunner.query(
      `ALTER TABLE \`book_genre\` DROP COLUMN \`genreId\``
    );
    await queryRunner.query(
      `ALTER TABLE \`book_genre\` DROP COLUMN \`bookId\``
    );
    await queryRunner.query(
      `ALTER TABLE \`book_genre\` ADD \`genreGenreId\` int NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`book_genre\` ADD \`bookBookId\` int NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`book\` CHANGE \`authorId\` \`authorAuthorId\` int NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`book_instance\` CHANGE \`bookId\` \`bookBookId\` int NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`book_genre\` ADD CONSTRAINT \`FK_804535b55258cc42f93328163db\` FOREIGN KEY (\`genreGenreId\`) REFERENCES \`genre\`(\`genre_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`book_genre\` ADD CONSTRAINT \`FK_32ae40d616954f2d84a0a309c8e\` FOREIGN KEY (\`bookBookId\`) REFERENCES \`book\`(\`book_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`book\` ADD CONSTRAINT \`FK_5331c11d441a19dff27a1a0b10b\` FOREIGN KEY (\`authorAuthorId\`) REFERENCES \`author\`(\`author_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`book_instance\` ADD CONSTRAINT \`FK_d8b999a217a109000ee17b76010\` FOREIGN KEY (\`bookBookId\`) REFERENCES \`book\`(\`book_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
