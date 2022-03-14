import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddCreatedAtToUsers1647217773321 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'created_at',
        type: 'timestamptz'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('created_at', 'timestamptz');
  }
}
