exports.up = async (knex) => {
  await knex.schema.createTable("projects", (projects) => {
    projects.increments("project_id");
    projects.text("title").notNull().unique();
    projects
      .text("photo_src")
      .defaultTo(
        "https://images.unsplash.com/photo-1581291519195-ef11498d1cf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      );
    projects.text("description");
    projects.text("link").notNull();
    projects.text("repo").notNull();
  });

  await knex.schema.createTable("tags", (tags) => {
    tags.increments("tag_id");
    tags.text("tag_name").notNull().unique();
  });

  //FKs are project_id and tag_id for a *:*
  await knex.schema.createTable("projects_tags", (table) => {
    table
      .integer("project_id")
      .notNull()
      .references("project_id")
      .inTable("projects")
      .onDelete("CASCADE");
    table
      .integer("tag_id")
      .notNull()
      .references("tag_id")
      .inTable("tags")
      .onDelete("CASCADE");
  });
};

exports.down = async (knex) => {
  await knex.scheme.dropTableIfExists("projects_tags");
  await knex.schema.dropTableIfExists("tags");
  await knex.schema.dropTableIfExists("projects");
};
