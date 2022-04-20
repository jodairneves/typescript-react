import { Knex } from "knex";
import { TableNames } from "../TableNames";

export async function up(knex: Knex){
    return knex.schema.alterTable(TableNames.user, table => {
        table.string('username').nullable().alter();
    })
}

export async function down(knex: Knex){
    return knex.schema.alterTable(TableNames.user, table => {
        table.string('username').notNullable().alter();
    })
}