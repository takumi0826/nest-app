import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthController } from 'src/controllers/auth/auth.controller'
import { AuthService } from 'src/services/auth/auth.service'
import { JwtStrategy } from 'src/services/auth/jwt.strategy'
import { LocalStrategy } from 'src/services/auth/local.strategy'

import { UserModule } from '../user/user.module'

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '1200s',
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
