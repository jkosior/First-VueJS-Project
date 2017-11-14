module.export = {
    port: process.env.port || "8081",
    db: {
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'tabtracker',
        password:process.env.DB_PASS || 'tabtracker',
        options: {
            dialect: process.env.DIALECT || "sqlite",
            host: process.env.HOST || "localhost",
            storage: './tabtracker.sqlite'
        }
    }
};
