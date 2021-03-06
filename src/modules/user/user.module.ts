import { Module } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/entities/user'
import { AuthService } from 'src/services/auth/auth.service'
import { UserService } from 'src/services/user/user.service'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
