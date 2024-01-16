import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Vendor, VendorDocument } from './schema/Vendor';
import { Model } from 'mongoose';

@Injectable()
export class VendorService {
  constructor(
    @InjectModel(Vendor.name) private vendorModel: Model<VendorDocument>,
  ) {}
  async create(createVendorDto: CreateVendorDto) {
    try {
      const model = new this.vendorModel();
      model.name = createVendorDto.name;
      model.email = createVendorDto.email;
      model.shopName = createVendorDto.shopName;
      return await model.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    return await this.vendorModel.find().exec();
  }

  async findOne(id: string) {
    return await this.vendorModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateVendorDto: UpdateVendorDto) {
    return await this.vendorModel
      .updateOne(
        { _id: id },
        {
          name: updateVendorDto.name,
          email: updateVendorDto.email,
          shopName: updateVendorDto.shopName,
        },
      )
      .exec();
  }

  async remove(id: string): Promise<any> {
    return await this.vendorModel.deleteOne({ _id: id }).exec();
  }
}
