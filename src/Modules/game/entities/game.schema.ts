import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { User } from '../../users/entities/user.schema';

export type GameDocument = Game & Document;

@Schema()
export class Game {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}
export const GameSchema = SchemaFactory.createForClass(Game);
