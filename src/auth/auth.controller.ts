import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerUserDto } from 'src/dto/registerUser.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authservice: AuthService){}

    @Post("/register")
    registerUser(@Body() registerUserDto: registerUserDto){

        console.log(registerUserDto)

       return this.authservice.registreUser(registerUserDto)
    }

}
