import {
  IsString,
  IsNotEmpty,
  IsArray,
  ValidateNested,
  ArrayMinSize,
  IsMongoId,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateMoveDto } from '../../move/dto/create-move.dto';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  readonly user: string;

  @IsArray()
  @ArrayMinSize(12)
  @Type(() => CreateMoveDto)
  @ValidateNested({ each: true })
  readonly moves: CreateMoveDto[];
}
