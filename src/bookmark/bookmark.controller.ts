import { Controller, Get, Query } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';

@Controller('bookmark')
export class BookmarkController {
    constructor(private service: BookmarkService) { }

    @Get('getAll')
    findAll() {
        return this.service.findAll();
    }

    @Get('getOne/:id')
    findOne(@Query('id') id: string) {
        return this.service.findOne(id);
    }


}
