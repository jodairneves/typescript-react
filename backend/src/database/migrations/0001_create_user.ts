import { Knex } from "knex";
import { TableNames } from "../TableNames";

export async function up(knex: Knex) {
    return knex.schema.createTable(TableNames.user, table => {
        table.bigIncrements('id').primary;
        table.string('name').notNullable();
        table.string('username').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable(TableNames.user);

}