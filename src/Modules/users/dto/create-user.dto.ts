import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsInt,
  IsPositive,
  IsOptional,
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  age: string;

  @IsString()
  @IsOptional()
  sport: string;

  @IsString()
  @IsOptional()
  work: string;

  @IsString()
  @IsOptional()
  sex: string;
  constructor() {
    const b = {
      name: null,
      age: null,
      email: null,
      sport: null,
      work: null,
      sex: null,
    };
    Object.assign(this, b);
  }
}
