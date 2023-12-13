import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { InjectModel } from "@nestjs/sequelize";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/models/user.model";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
        config: ConfigService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('JWT_SECRET')
        });
    }

    async validate(payload: { _id: string; }) {
        const data = await this.userModel.findByPk(payload._id);
        // Get user data and remove hash property from user object.
        const user = Object.assign({}, data.dataValues, { hash: undefined });
        return user;
    }
}