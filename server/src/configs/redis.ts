import { createClient } from 'redis';
import config from "./env"
import { setTokenIndex } from '@/models/schema/token.schema';

export const redis = createClient({
    password: config.RD_PASSWORD,
    username: config.RD_USERNAME,
    socket: {
        host: '127.0.0.1',
        port: Number(6379)
    }
})

export async function setupRedisIndex() {
    await setTokenIndex();
}

export async function startup(){
    await redis.connect()
    await setupRedisIndex();
}