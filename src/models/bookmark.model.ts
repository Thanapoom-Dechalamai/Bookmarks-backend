import { Table, Model, PrimaryKey, Column, DataType, ForeignKey, CreatedAt, UpdatedAt } from "sequelize-typescript";
import { User } from "./user.model";

@Table({ tableName: 'bookmarks' })
export class Bookmark extends Model {

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    id: string;

    @Column({ type: DataType.STRING })
    title: string;

    @Column({ type: DataType.STRING })
    description: string;

    @Column({ type: DataType.STRING })
    link: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.UUID })
    userId: string;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;

}