import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import { SignInDto, SignUpDto } from './dto';
import { User } from 'src/models/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User) private readonly userModel: typeof User,
        private readonly jwtService: JwtService,
        private readonly config: ConfigService,
    ) { }

    async signIn(dto: SignInDto): Promise<{ success: boolean; accessToken?: string; }> {
        try {
            const user = await this.userModel.findOne({ where: { email: dto.email } });

            if (!user) {
                throw new NotFoundException('User not found');
            }

            const isMatched = await bcrypt.compare(dto.password, user.hash);

            if (!isMatched) {
                throw new BadRequestException('Password is incorrect');
            }

            const accessToken = await this.signToken(user.id);

            return {
                success: true,
                accessToken,
            };
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async signUp(dto: SignUpDto): Promise<{ success: boolean; message: string; }> {
        try {
            if (dto.password !== dto.confirmPassword) {
                throw new BadRequestException('Password not matched');
            }

            const hash = await bcrypt.hash(dto.password, 12);
            const user = new this.userModel({ ...dto, hash });
            await user.save();

            return {
                success: true,
                message: 'Sign up successfully!',
            };
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    signToken(userId: string): Promise<string> {
        const payload = { _id: userId };
        const secret = this.config.get('JWT_SECRET');
        const expiresIn = this.config.get('JWT_EXPIRED_TIME');

        return this.jwtService.signAsync(payload, { secret, expiresIn });
    }
}
