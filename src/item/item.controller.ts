import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('items')
export class ItemController {
    constructor(private readonly itemService: ItemService) {}

    // Retorna os itens do "Postgres"
    @Get('postgres')
    async getPostgresItems() {
      return this.itemService.getPostgresItems();
    }
  
    // Retorna os itens do "MySQL"
    @Get('mysql')
    async getMysqlItems() {
      return this.itemService.getMysqlItems();
    }
  
    // Adiciona um item ao "Postgres"
    @Post('postgres')
    async addToPostgres(@Body() item: any) {
      return this.itemService.addToPostgres(item);
    }
  
    // Adiciona um item ao "MySQL"
    @Post('mysql')
    async addToMysql(@Body() item: any) {
      return this.itemService.addToMysql(item);
    }
  
    // Sincroniza itens do "Postgres" para o "MySQL"
    @Post('sync')
    async syncItems() {
      return this.itemService.syncItems();
    }
}
