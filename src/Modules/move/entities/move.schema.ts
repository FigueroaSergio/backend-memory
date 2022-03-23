import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Game } from '../../game/entities/game.schema';

export type MoveDocument = Move & Document;

@Schema()
export class Move {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Game' })
  game: Game;

  @Prop()
  match: boolean;

  @Prop()
  card1: [];

  @Prop()
  card2: [];

  @Prop()
  start: Date;

  @Prop()
  end: Date;
}

export const MoveSchema = SchemaFactory.createForClass(Move);
