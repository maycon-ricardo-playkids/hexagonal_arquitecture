import Connection from "./Connection";
import pgp from "pg-promise";

export default class PgPromiseAdapter implements Connection {

  connection: any;

  constructor() {
    this.connection = pgp()("postgres://postgres:postgres@localhost:5432/postgres");
  }

  query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params)
  }

  close(): Promise<any> {
    return this.connection.$pool.end();
  }
  
}