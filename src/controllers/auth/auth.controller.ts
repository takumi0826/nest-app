import { UserDto } from 'src/dtos/user/user.dto';
import { User } from 'src/entities/user';
import { AuthService } from 'src/services/auth/auth.service';
import { UserService } from 'src/services/user/user.service';
import { JwtPayload, PasswordOmitUser } from 'src/types/type';
import { InsertResult } from 'typeorm';

import { Body, Controller, Get, Post, Request, Response, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(AuthGuard('local')) // passport-local戦略を付与する
  @Post('sign-in')
  async signIn(@Request() req: { user: PasswordOmitUser }) {
    // LocalStrategy.validate()で認証して返した値がreq.userに入ってる
    const user = req.user;

    // JwtToken を返す
    return this.authService.login(user);
  }

  @Post('sign-up')
  async signUp(@Body() user: UserDto): Promise<InsertResult> {
    return this.userService.create(user);
  }

  /**
   * @description JWT認証を用いたサンプルAPI
   */
  @UseGuards(AuthGuard('jwt')) // passport-jwt戦略を付与する
  @Get('profile')
  getProfile(@Request() req: { user: JwtPayload }) {
    // JwtStrategy.validate()で認証して返した値がreq.userに入ってる
    const user = req.user;

    // 認証に成功したユーザーの情報を返す
    return user;
  }
}
