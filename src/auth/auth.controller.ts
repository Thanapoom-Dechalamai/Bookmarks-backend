import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private service: AuthService) { }

    @Post('signin')
    signin(@Body() dto: SignInDto) {
        return this.service.signin(dto);
    }

    @Post('signup')
    signup(@Body() dto: SignUpDto) {
        return this.service.signup(dto);
    }
}
