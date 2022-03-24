import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Validator } from 'class-validator';

import { Game, GameDocument } from './entities/game.schema';

@Injectable()
export class GameService {
  constructor(@InjectModel(Game.name) private gameModel: Model<GameDocument>) {}
  create(createGameDto: CreateGameDto) {
    return this.gameModel.find();
  }

  findAll() {
    return this.gameModel.find();
  }

  findOne(id: string) {
    return `This action returns a #${id} game`;
  }

  update(id: string, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: string) {
    return `This action removes a #${id} game`;
  }
}
