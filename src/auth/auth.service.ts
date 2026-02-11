import { Injectable } from '@nestjs/common';
import { registerUserDto } from 'src/dto/registerUser.dto';
import { UserService } from 'src/user/user.service';

// interface registerUserDto {
//     name: string;
//     email: string
// }

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}

    registreUser(registerUserDto: registerUserDto){
        return this.userService.createUser(registerUserDto)
        // return {message: "User register successfullyy!"}
    }

}
