import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VendorDocument = Vendor & Document;

@Schema()
export class Vendor {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  shopName: string;
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);
