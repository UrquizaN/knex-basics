const CUSTOM_PROCEDURE = `
    CREATE OR REPLACE FUNCTION on_update_timestamp()
    RETURNS trigger AS $$
    BEGIN
        NEW.updated_at = now();
        RETURN NEW;
    END;
    $$ language 'plpgsql';
`

const DROP_CUSTOM_PROCEDURE = `
    DROP FUNCTION on_update_timestamp()
`
exports.up = async knex => knex.raw(CUSTOM_PROCEDURE)
exports.down = async knex => knex.raw(DROP_CUSTOM_PROCEDURE)