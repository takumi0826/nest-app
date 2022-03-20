import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcryptjs'
import { UserDto } from 'src/dtos/user/user.dto'
import { User } from 'src/entities/user'
import { JwtPayload, PasswordOmitUser } from 'src/types/type'

import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  // ユーザーを認証する
  async validateUser(
    mailAddress: UserDto['mailAddress'],
    pass: UserDto['password']
  ): Promise<PasswordOmitUser | null> {
    const user = await this.userService.findOne(mailAddress) // DBからUserを取得

    // DBに保存されているpasswordはハッシュ化されている事を想定しているので、
    // bcryptなどを使ってパスワードを判定する
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user // パスワード情報を外部に出さないようにする
      return result
    }

    return null
  }

  // jwt tokenを返す
  async login(user: PasswordOmitUser) {
    // jwtにつけるPayload情報
    const payload: JwtPayload = {
      userId: user.id,
      userName: user.name,
    }

    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
