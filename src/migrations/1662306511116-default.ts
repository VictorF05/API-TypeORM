import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662306511116 implements MigrationInterface {
    name = 'default1662306511116'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rooms\` ADD \`description\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rooms\` DROP COLUMN \`description\``);
    }

}
