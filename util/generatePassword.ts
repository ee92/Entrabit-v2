import wordList from 'an-array-of-english-words';
import { PasswordInputs } from 'types/inputs';
import pbkdf2Sync from './pbkdf2';

export default function generatePassword({ username, site, settings, masterPassword}: PasswordInputs) {
  const alfanum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let {
    memorable = true,
    length = 16,
    words = 3,
    symbols = true,
    symbolsUsed = "@#$%^&*?!",
    saltUsed = ""
  } = settings;
  let str = username + masterPassword + site + length + words + symbols + symbolsUsed;

  let hash = pbkdf2Sync(str, saltUsed, 1, 32, 'sha512').toString('hex')
    .split('').filter((x) => !isNaN(Number(x))).map((x) => Number(x));
  let number = hash[0];
  let symbol = symbols ?
    symbolsUsed.split('')[hash[1] % symbolsUsed.length] : '';

  let password = ''
  if (memorable) {
    for (let i=0; i<Number(words); i++) {
      let word = wordList[Number(hash.slice(i*7,i*7+7).join('')) % wordList.length]
      word = word.charAt(0).toUpperCase() + word.slice(1)
      password += word
    }
  } else {
    let offset = symbols ? 2 : 1
    for (let i=0; i<Number(length)-offset; i++) {
      let char = alfanum.split('')[Number(hash.slice(2*i,2*i+2).join('')) % alfanum.length]
      password += char
    }
  }

  password += number + symbol
  console.log(password)
  return password;
}