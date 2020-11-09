"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    server: {
        port: parseInt(String(process.env.PORT)),
    },
    database: {
        type: "postgres",
        name: "default",
        host: process.env.TYPEORM_HOST,
        port: parseInt(String(process.env.TYPEORM_PORT)),
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: process.env.TYPEORM_SYNCHRONIZE === "true",
        migrations: ["dist/migrations/*{.ts,.js}"],
        migrationsTableName: "migrations_typeorm",
        migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === "true",
    },
};
