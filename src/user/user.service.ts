import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

      constructor(@InjectModel(User.name) private userModel: Model<User>) {}


   async createUser(){

       const newUser =  await this.userModel.create({fname: "chandn", lname:"yadav", email: "chadan@gmail.com", password:"testing"})

        console.log("this is the new user created",newUser)

        return {message: "user created"}
    }
}
