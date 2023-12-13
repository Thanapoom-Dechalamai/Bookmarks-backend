import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private service: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('signin')
    signin(@Body() dto: SignInDto) {
        return this.service.signIn(dto);
    }

    @Post('signup')
    signup(@Body() dto: SignUpDto) {
        return this.service.signUp(dto);
    }
}
