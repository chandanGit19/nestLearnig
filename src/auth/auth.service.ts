import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}

    registreUser(){
        return this.userService.createUser()
        // return {message: "User register successfullyy!"}
    }

}
