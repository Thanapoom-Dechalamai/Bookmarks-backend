import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import { SignInDto, SignUpDto } from './dto/auth.dto';
import { User } from 'src/models/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
        private jwtService: JwtService
    ) { }

    async signin(dto: SignInDto) {
        try {
            const user = await this.userModel.findOne({
                where: {
                    email: dto.email
                }
            });

            if (!user || user == undefined) {
                throw new NotFoundException("User not found");
            }

            const isMatched = await bcrypt.compare(dto.password, user.hash);
            const payload = { _id: user.id };
            const token = await this.jwtService.signAsync(payload);

            if (isMatched == true) {
                return {
                    success: true,
                    accessToken: token
                };
            } else {
                throw new BadRequestException("Password is incorrect.");
            }

        } catch (error) {
            throw new InternalServerErrorException(error);
        }

    }
    async signup(dto: SignUpDto) {
        try {
            if (dto.password !== dto.confirmPassword) {
                throw new BadRequestException("Password not matched!");
            }

            const hash = await bcrypt.hash(dto.password, 12);
            const user = new this.userModel({ ...dto, hash });
            await user.save();

            return {
                success: true,
                message: "Sign up successfully!"
            };

        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
}
