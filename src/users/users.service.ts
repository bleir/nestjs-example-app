import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Profile } from '../profile/profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  getAllUsers() {
    return this.userRepository.find({
      relations: {
        profile: true,
      },
    });
  }

  getUserById(id: number) {}

  public async createUser(userDto: CreateUserDto) {
    userDto.profile = userDto.profile ?? {};

    let user = this.userRepository.create(userDto);

    return await this.userRepository.save(user);
  }

  updateUser(user: Partial<User>) {}

  public async deleteUser(id: number) {
    await this.userRepository.delete(id);

    return { deleted: true };
  }

  public async findUserById(id: number) {
    return await this.userRepository.findOneBy({ id });
  }
}
