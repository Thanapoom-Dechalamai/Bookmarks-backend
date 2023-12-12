import { Column, CreatedAt, DataType, Model, PrimaryKey, Table, Unique, UpdatedAt } from "sequelize-typescript";

@Table({ tableName: 'users' })
export class User extends Model {
    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    id: string;

    @Unique
    @Column({ type: DataType.STRING })
    email: string;

    @Column({ type: DataType.STRING })
    hash: string;

    @Column({ type: DataType.STRING })
    firstname: string;

    @Column({ type: DataType.STRING })
    lastname: string;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}