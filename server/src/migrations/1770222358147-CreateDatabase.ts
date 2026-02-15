import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDatabase1770222358147 implements MigrationInterface {
    name = 'CreateDatabase1770222358147'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`activationToken\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`activationToken\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`activationToken\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`activationToken\` varchar(255) NULL`);
    }

}
