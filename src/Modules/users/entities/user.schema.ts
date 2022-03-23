import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop({ unique: true })
  email: string;

  @Prop()
  sport: string;

  @Prop()
  work: string;

  @Prop()
  sex: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
