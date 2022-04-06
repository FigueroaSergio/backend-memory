import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsInt,
  IsPositive,
  IsOptional,
} from 'class-validator';
export class CreateUserDto {
 

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsOptional()
  sport: string;

  @IsString()
  @IsOptional()
  work: string;

  @IsString()
  @IsOptional()
  sex: string;
  
}
