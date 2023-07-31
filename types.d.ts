declare module 'crypto-browserify';
declare module 'react-native-pbkdf2';
declare module './pbkdf2' {
  const pbkdf2Sync: (...args: any[]) => any;
  export default pbkdf2Sync;
}