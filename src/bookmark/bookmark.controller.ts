import {
    Controller,
    Body,
    Post,
    Get,
    Put,
    Delete,
    Query
} from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import {
    RequestCreateBookmarkDto,
    RequestUpdateBookmarkDto
} from './dto/';

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

    @Post('create')
    create(@Body() dto: RequestCreateBookmarkDto) {
        return this.service.create(dto);
    }

    @Put('update')
    update(@Body() dto: RequestUpdateBookmarkDto) {
        return this.service.update(dto);
    }

    @Delete('delete/:id')
    delete(@Query('id') id: string) {
        return this.service.delete(id);
    }
}
