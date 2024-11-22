import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './item/item.module';

@Module({
  imports: [
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
    ItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
