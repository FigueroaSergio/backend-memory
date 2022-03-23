import { IsString, IsNotEmpty } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  readonly user: string;
}
