import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class AuthService {
  registerUser(createDto: CreateUserDto) {
    throw new Error('Method no implemented.');
  }
}
