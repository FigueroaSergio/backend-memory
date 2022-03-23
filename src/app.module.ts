import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './Modules/users/users.module';
import { GameModule } from './modules/game/game.module';
import { MoveModule } from './modules/move/move.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return { uri: configService.get('DB_URI') };
      },
      inject: [ConfigService],
    }),
    UsersModule,
    GameModule,
    MoveModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
