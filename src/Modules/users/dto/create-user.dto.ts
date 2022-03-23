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
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  readonly age: string;

  @IsString()
  @IsOptional()
  readonly sport: string;

  @IsString()
  @IsOptional()
  readonly work: string;

  @IsString()
  @IsOptional()
  readonly sex: string;
}

export default CreateUserDto;
