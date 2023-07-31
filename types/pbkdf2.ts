export interface IPbkdf2Sync {
  (password: string, salt: string, iterations: number, keylen: number, digest: string): Buffer;
}