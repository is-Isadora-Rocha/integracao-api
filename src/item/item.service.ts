import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Item } from './item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { MockDatabaseService } from 'src/mock-database/service';

@Injectable()
export class ItemService {
    private postgresApiUrl = 'https://6740b21ad0b59228b7f108c1.mockapi.io/api/v1/postgresItems';
    private mysqlApiUrl = 'https://6740b21ad0b59228b7f108c1.mockapi.io/api/v1/mysqlItems';

    async getPostgresItems() {
        const response = await axios.get(this.postgresApiUrl);
        return response.data;
    }
    async getMysqlItems() {
        const response = await axios.get(this.mysqlApiUrl);
        return response.data;
    }

    async addToPostgres(item: any) {
        const response = await axios.post(this.postgresApiUrl, item);
        return response.data;
    }
    async addToMysql(item: any) {
        const response = await axios.post(this.mysqlApiUrl, item);
        return response.data;
    }

    async syncItems() {
        const postgresItems = await this.getPostgresItems();
        const mysqlItems = await this.getMysqlItems();

        const newItems = postgresItems.filter(
            (pgItem) => !mysqlItems.some((myItem) => myItem.id == pgItem.id),
        );

        for (const item of newItems) {
            await this.addToMysql(item);
        }

        return {
            synced: newItems.length
        };
    }

}
