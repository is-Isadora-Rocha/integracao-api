import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Item } from './item.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(Item, 'default')
        private readonly postgresRepository: Repository<Item>,
        @InjectRepository(Item, 'mysqlConnection')
        private readonly mysqlRepository: Repository<Item>,
    ) {}

    async create(item: Item) {
        await this.postgresRepository.save(item);
        await this.mysqlRepository.save(item);
        return item;
    }

    async findAll() {
        const postgresItems = await this.postgresRepository.find();
        const mysqlItems = await this.mysqlRepository.find();
        return { postgresItems, mysqlItems };
    }
}
