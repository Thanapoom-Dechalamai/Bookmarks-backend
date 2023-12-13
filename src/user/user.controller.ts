import {
    UseGuards,
    Controller,
    Get,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorator/';
import { JwtGuard } from 'src/auth/guard';
import { User } from 'src/models/user.model';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
    @Get('me')
    getMe(@GetUser() user: typeof User) {
        return user;
    }
}
