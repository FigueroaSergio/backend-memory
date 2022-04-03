import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User, UserDocument } from './entities/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userModel.findOne({ email: createUserDto.email });
    console.log(user);
    
    if (!user) {
      const postUser = await this.userModel.create(createUserDto)
      return postUser.save();
    }
    else {
      throw new HttpException({
        statusCode: HttpStatus.CONFLICT,
        error: 'Email is already in use',
      }, HttpStatus.CONFLICT)
    }

  }

  async findAll() {
    return this.userModel.find();
  }

  async findById(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
  async findByEmail(email:string){
    const user = await this.userModel.findOne({email:email})
    if (!user) {
      throw new HttpException({
        statusCode: HttpStatus.NOT_FOUND,
        error:` User with email not found`,
      }, HttpStatus.NOT_FOUND)
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel
      .findByIdAndUpdate(id, updateUserDto)
      .setOptions({ new: true });
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async remove(id: string) {
    const result = await this.userModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }
  async createMany(createUserDto: CreateUserDto[]) {
    return '0';
  }
}
