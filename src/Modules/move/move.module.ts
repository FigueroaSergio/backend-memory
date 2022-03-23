import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoveService } from './move.service';
import { MoveController } from './move.controller';

import { Move, MoveSchema } from './entities/move.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Move.name, schema: MoveSchema }]),
  ],
  controllers: [MoveController],
  providers: [MoveService],
})
export class MoveModule {}
