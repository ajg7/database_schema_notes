Migrations record changes to the database structure over time just like git commits record changes to code.

Configure knex connections

- knex init


Commonly used migration commands:
- npx knex migrate:make <name>


Track Food AKA Menu Items

menu_items table
- id: primary key, unsigned (not negative numbers) interger.
- name: string, required (NOT NULL), unique, make searching by name fast
- price: floating point, not required
- available: boolean, default to false.