import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsBoolean,
  ArrayMinSize,
  ArrayMaxSize,
  IsDateString,
  IsOptional,
  IsMongoId
} from 'class-validator';
export class CreateMoveDto {
  @IsMongoId()
  @IsOptional()
  public game: string;

  @IsBoolean()
  @IsNotEmpty()
  public match: boolean;

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @IsNotEmpty()
  public card1: [];

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @IsNotEmpty()
  public card2: [];

  @IsDateString()
  @IsNotEmpty()
  public start: Date;

  @IsDateString()
  @IsNotEmpty()
  public end: Date;
}
