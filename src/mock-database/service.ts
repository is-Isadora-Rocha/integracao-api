import { Injectable } from "@nestjs/common";

@Injectable()
export class MockDatabaseService {
    private postgresData = [];
    private mysqlData = [];

    getPostgresData() {
        return this.postgresData;
    }

    saveToPostgres(data: any) {
        this.postgresData.push(data);
    }

    getMysqlData() {
        return this.mysqlData;
    }

    saveToMysql(data: any) {
        this.mysqlData.push(data);
    }
}