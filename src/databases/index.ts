import { DB_HOST, DB_PORT, DB_DATABASE } from '@config';

export const dbConnection = `mongodb+srv://${DB_HOST}:${DB_PORT}/${DB_DATABASE}?retryWrites=true&w=majority`;
