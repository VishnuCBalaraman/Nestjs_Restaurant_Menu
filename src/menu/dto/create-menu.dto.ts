import { IsNotEmpty, IsString } from "class-validator";

export class CreateMenuDto {
    @IsNotEmpty()
    @IsString() 
    category: string;

    @IsNotEmpty()
    @IsString()
    name: string;
}
