export interface Settings {
  memorable: boolean;
  symbols: boolean;
  symbolsUsed: string;
  salt: boolean;
  saltUsed: string;
  length: number;
  words: number;
}

export interface PasswordInputs {
  username: string;
  site: string;
  masterPassword: string;
  settings: Settings;
}