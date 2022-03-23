import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

import { Game, GameDocument } from './entities/game.schema';

@Injectable()
export class GameService {
  constructor(@InjectModel(Game.name) private userModel: Model<GameDocument>) {}
  create(createGameDto: CreateGameDto) {
    return 'This action adds a new game';
  }

  findAll() {
    return `This action returns all game`;
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
