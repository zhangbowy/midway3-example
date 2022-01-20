import { MidwayConfig } from '@midwayjs/core';

const config: MidwayConfig = {};

// use for cookie sign key, should change to your own and keep security
config.keys = '1642647553816_3056';

config.koa = {
  port: 7001,
};

export default config;
