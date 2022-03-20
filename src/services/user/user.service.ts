import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcryptjs'
import { UserDto } from 'src/dtos/user/user.dto'
import { User } from 'src/entities/user'
import { InsertResult, Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}
  // ユーザーを一人を返す
  findOne(mailAddress: UserDto['mailAddress']): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { mailAddress } })
  }

  async create(user: UserDto): Promise<InsertResult> {
    user.password = await bcrypt.hash(user.password, 12)
    return this.userRepository.insert(user)
  }
}
