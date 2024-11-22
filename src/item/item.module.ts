import { Module } from '@nestjs/common';
import { Item } from './item.entity';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ItemService],
  controllers: [ItemController],
  imports: [
    TypeOrmModule.forFeature([Item], 'default'), //postgresql
    TypeOrmModule.forFeature([Item], 'mysqlConnection') //mysql
  ]
})
export class ItemModule {}
