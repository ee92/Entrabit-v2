import pbkdf2 from 'crypto-browserify';
import { IPbkdf2Sync } from 'types/pbkdf2';

const pbkdf2Sync: IPbkdf2Sync = pbkdf2.pbkdf2Sync;
export default pbkdf2Sync;