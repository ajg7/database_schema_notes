
exports.up = function(knex) {
  return knex.schema.createTable("clients", tbl => {
      tbl.uuid("id").primary();

      tbl.string("email").unique().index();
      tbl.string("name").notNullable().index();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("clients");
};
