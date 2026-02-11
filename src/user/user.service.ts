import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { registerUserDto } from 'src/dto/registerUser.dto';

@Injectable()
export class UserService {

      constructor(@InjectModel(User.name) private userModel: Model<User>) {}


   async createUser(registerUserDto: registerUserDto){

       const newUser =  await this.userModel.create({fname: registerUserDto.fname, lname: registerUserDto.lname, email: registerUserDto.email, password:registerUserDto.password})

        console.log("this is the new user created",newUser)

        return {message: "user created", user: newUser}
    }
}
