import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMoveDto } from './dto/create-move.dto';
import { UpdateMoveDto } from './dto/update-move.dto';

import { Move, MoveDocument } from './entities/move.schema';

@Injectable()
export class MoveService {
  constructor(@InjectModel(Move.name) private userModel: Model<MoveDocument>) {}

  create(createMoveDto: CreateMoveDto) {
    return 'This action adds a new move';
  }

  findAll() {
    return `This action returns all move`;
  }

  findOne(id: number) {
    return `This action returns a #${id} move`;
  }

  update(id: number, updateMoveDto: UpdateMoveDto) {
    return `This action updates a #${id} move`;
  }

  remove(id: number) {
    return `This action removes a #${id} move`;
  }
}
