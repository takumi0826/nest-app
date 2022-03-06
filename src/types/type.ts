import { UserDto } from 'src/dtos/user/user.dto';

export type PasswordOmitUser = Omit<UserDto, 'password'>;

export type JwtPayload = {
  userId: UserDto['id'];
  userName: UserDto['name'];
};
