import { Column, CreatedAt, DataType, HasMany, Model, PrimaryKey, Table, Unique, UpdatedAt } from "sequelize-typescript";
import { Bookmark } from "./bookmark.model";

@Table({ tableName: 'users' })
export class User extends Model {
    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    id: string;

    @Column({ type: DataType.STRING })
    email: string;

    @Column({ type: DataType.STRING })
    hash: string;

    @Column({ type: DataType.STRING })
    firstname: string;

    @Column({ type: DataType.STRING })
    lastname: string;

    @HasMany(() => Bookmark)
    bookmarks: Bookmark[];

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}