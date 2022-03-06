// import先が'passport-jwt'では無い事に注意！
import { Strategy as BaseLocalStrategy } from 'passport-local';
import { UserDto } from 'src/dtos/user/user.dto';
import { PasswordOmitUser } from 'src/types/type';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { AuthService } from './auth.service';

/**
 * @description usernameとpasswordを使った認証処理を行うクラス
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(BaseLocalStrategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'mailAddress',
      passwordField: 'password',
    });
  }

  // passport-localは、デフォルトで username と password をパラメーターで受け取る
  async validate(
    mailAddress: UserDto['mailAddress'],
    pass: UserDto['password'],
  ): Promise<PasswordOmitUser> {
    // 認証して結果を受け取る
    const user = await this.authService.validateUser(mailAddress, pass);

    if (!user) {
      throw new UnauthorizedException(); // 認証失敗
    }

    return user;
  }
}
