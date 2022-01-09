import {MigrationInterface, QueryRunner} from "typeorm";

export class carPersonagens1641703837213 implements MigrationInterface {
    name = 'carPersonagens1641703837213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "caracteristicas_personagens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "personagemId" uuid, CONSTRAINT "PK_eff05c90a12a0e7d0829c590269" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "caracteristicas_personagens" ADD CONSTRAINT "FK_328c5b28c50b71274f1d3b1abab" FOREIGN KEY ("personagemId") REFERENCES "personagens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "caracteristicas_personagens" DROP CONSTRAINT "FK_328c5b28c50b71274f1d3b1abab"`);
        await queryRunner.query(`DROP TABLE "caracteristicas_personagens"`);
    }

}
