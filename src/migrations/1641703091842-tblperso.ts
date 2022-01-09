import {MigrationInterface, QueryRunner} from "typeorm";

export class tblperso1641703091842 implements MigrationInterface {
    name = 'tblperso1641703091842'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "personagens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, CONSTRAINT "PK_8adef6c19a5fbe0f01f2b4e72c4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "personagens"`);
    }

}
