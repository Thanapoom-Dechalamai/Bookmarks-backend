import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bookmark } from 'src/models/bookmark.model';
import { User } from 'src/models/user.model';

@Module({
    imports: [SequelizeModule.forRoot({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'admin',
        database: 'dev',
        models: [User, Bookmark],
    })]
})
export class DatabaseModule { }
