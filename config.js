

const config = () => {
    return {
        api: {
            version: "v1"
        },
        db: {
            host: "localhost",
            port: 3306,
            username: 'basicerp',
            password: 'basicerp',
            database: 'basicerp',
            connectionLimit: 5
        }
    }
}

module.exports = config();