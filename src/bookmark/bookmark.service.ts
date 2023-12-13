import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bookmark } from 'src/models/bookmark.model';
import {
    RequestCreateBookmarkDto,
    RequestUpdateBookmarkDto
} from './dto';

@Injectable()
export class BookmarkService {
    constructor(
        @InjectModel(Bookmark)
        private bookmarkModel: typeof Bookmark
    ) { }

    findAll() {
        return 'find all';
    }

    findOne(id: string) {
        return 'find one';
    }

    create(dto: RequestCreateBookmarkDto) {
        return 'create';
    }

    update(dto: RequestUpdateBookmarkDto) {
        return 'update';
    }

    delete(id: string) {
        return 'delete';
    }
}
