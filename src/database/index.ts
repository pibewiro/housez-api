import 'reflect-metadata';
import { createConnection } from 'typeorm';

// eslint-disable-next-line no-console
createConnection().then(() => console.log('Connect to Database'));
