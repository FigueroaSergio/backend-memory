import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameService } from './game.service';
import { GameController } from './game.controller';

import { Game, GameSchema } from './entities/game.schema';
import { UsersModule } from "../users/users.module";
import { MoveModule } from '../move/move.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }]),
    UsersModule, 
    MoveModule
  ],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
