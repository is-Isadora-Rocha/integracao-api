import { Module } from '@nestjs/common';
import { ItemController } from './item/item.controller';
import { ItemService } from './item/item.service';

@Module({
  imports: [/* 
    //conexão postgresql
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: '12345678',
      database: 'banco_pg',
      autoLoadEntities: true,
      synchronize: true,
    }),
    //conexão mysql
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'banco_my',
      name: 'mysqlConnection',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ItemModule, */
  ],
  controllers: [ItemController],
  providers: [ItemService],
})
export class AppModule {}
