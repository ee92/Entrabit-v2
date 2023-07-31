import generatePassword from "./generatePassword";

test("matches v1 entrabit", () => {
  const site = "111";
  const username = "222";
  const masterPassword = "333"
  let settings = {
    memorable: true,
    words: 2,
    length: 16,
    salt: true,
    saltUsed: "scalers",
    symbols: true,
    symbolsUsed: "@#$%^&*?!"
  };
  expect(generatePassword({username, site, settings, masterPassword})).toBe("SiftedStouter8^");

  settings = {
    memorable: false,
    words: 2,
    length: 16,
    salt: true,
    saltUsed: "scalers",
    symbols: true,
    symbolsUsed: "@#$%^&*?!"
  };
  expect(generatePassword({username, site, settings, masterPassword})).toBe("WDgnegtGijLKhb8^");

  settings = {
    memorable: false,
    words: 2,
    length: 16,
    salt: false,
    saltUsed: "",
    symbols: false,
    symbolsUsed: "@#$%^&*?!"
  };
  expect(generatePassword({username, site, settings, masterPassword})).toBe("mlhNfZfaNstVCeH3");
})