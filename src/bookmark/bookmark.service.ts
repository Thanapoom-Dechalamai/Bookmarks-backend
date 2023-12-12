import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bookmark } from 'src/models/bookmark.model';

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

    create() {
        return 'create';
    }

    update() {
        return 'update';
    }

    delete() {
        return 'delete';
    }
}
