import { IsEmail, IsString } from "class-validator";

export class signInDto{
    @IsEmail()
    email: string;

    @IsString()
    pwd: string;
}