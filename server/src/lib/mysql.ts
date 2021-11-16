import * as mysql from "mysql2";

class MysqlDriver {
    private pool;
    private config;

    constructor(config) {
        this.config = config;
    }

    public connect(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.pool = mysql.createPool({
                connectionLimit: this.config.connectionLimit || 10,
                host: this.config.host,
                user: this.config.user,
                port: this.config.port || 3306,
                password: this.config.password,
                database: this.config.database
            });
            this.pool.getConnection((err, connection) => {
                if (err) {
                    return reject(err);
                }
                connection.release();
                return resolve();
            });
        });
    }

    public getPool() {
        return this.pool;
    }

    public getConnection() {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
                if(err) return reject(err);
                return resolve(connection);
            });
        });
    }

    public query(query, params): Promise<any> {
        return new Promise((resolve, reject) => {
            this.pool.query(query, params, (error, result) => {
               if (error) {
                   return reject(error);
               }
               return resolve(result);
            });
        });
    }

    public queryRowStream(query, params) {
        return this.pool.query(query, params);
    }

    public disConnect() {
        return this.pool.end();
    }
}

export { MysqlDriver };
