import { Module } from '@nestjs/common';
import { BookmarkController } from './bookmark.controller';
import { BookmarkService } from './bookmark.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bookmark } from 'src/models/bookmark.model';

@Module({
    imports: [SequelizeModule.forFeature([Bookmark])],
    controllers: [BookmarkController],
    providers: [BookmarkService]
})
export class BookmarkModule { }
