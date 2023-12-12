import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bookmark } from 'src/models/bookmark.model';

@Injectable()
export class BookmarkService {
    constructor(
        @InjectModel(Bookmark)
        private bookmarkModel: typeof Bookmark
    ) { }
}
