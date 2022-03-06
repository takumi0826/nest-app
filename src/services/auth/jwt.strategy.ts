import { ExtractJwt, Strategy as BaseJwtStrategy } from 'passport-jwt';
import { JwtPayload } from 'src/types/type';

// import先が'passport-local'では無い事に注意！
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

/**
 * @description JWTの認証処理を行うクラス
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(BaseJwtStrategy) {
  constructor() {
    super({
      // Authorization bearerからトークンを読み込む関数を返す
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 有効期間を無視するかどうか
      ignoreExpiration: false,
      secretOrKey: 'secret',
    });
  }

  // ここでPayloadを使ったバリデーション処理を実行できる
  // Payloadは、AuthService.login()で定義した値
  async validate(payload: JwtPayload): Promise<JwtPayload> {
    const { userId, userName } = payload;
    return { userId, userName };
  }
}
