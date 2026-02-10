
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type user = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({required: [true, 'First name is required']})
  fname: string;

  @Prop({required: [true, "please proveide last name"]})
  lname: string;

  @Prop({required:[true, "Please provide a email addres"], unique: true})
  email: string

  @Prop({required: [true, "Password is must"]})
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
