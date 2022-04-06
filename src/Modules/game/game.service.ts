import { Injectable ,HttpException,HttpStatus} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

import { Game, GameDocument } from './entities/game.schema';
import { UsersService } from '../users/users.service';
import { MoveService } from '../move/move.service';

@Injectable()
export class GameService {
  constructor(
    @InjectModel(Game.name) private gameModel: Model<GameDocument>,
    private readonly usersService: UsersService,
    private readonly movesService: MoveService,
  ) {}
  async create(createGameDto: CreateGameDto) {
    let user = await this.usersService.findByEmail(createGameDto.email);
    try {
      let game = await this.gameModel.create({ user: user._id });
      let moves = await createGameDto.moves.map(ele=>{return{...ele,"game":game.id}});
      await this.movesService.createMany(moves)
      return game
    } catch (error) {
      return error
    }
   
    
  }

  findAll() {
    return this.gameModel.find();
  }

  async findOne(id: string) {
    let game = await this.gameModel.findById(id).populate("user")
    
    
    if(!game){
      throw new HttpException({
        statusCode: HttpStatus.NOT_FOUND,
        error:` Game not found`,
      }, HttpStatus.NOT_FOUND)
    }
    let moves = await this.movesService.findAll({game:game.id});
    //console.log(moves);
    const gameDetails ={game:game, moves:moves};
    return gameDetails;
  }

  update(id: string, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: string) {
    return `This action removes a #${id} game`;
  }
}
