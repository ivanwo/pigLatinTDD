const { translate } = require("./script.js");

// testing translate function
describe("translate function", function() {
  // specific it cases for
  it("translates 'apple' correctly", function() {
    let result = translate("apple");
    expect(result).toBe("appleway");
  });
  it("translates 'hello' correctly", function() {
    let result = translate("hello");
    expect(result).toBe("ellohay");
  });
  it("translates a word starting with two consonants correctly", function() {
    let result = translate("grant");
    expect(result).toBe("antgray");
  });
  it("translates a word starting with three consonants correctly", function() {
    let result = translate("school");
    expect(result).toBe("oolschay");
  });
  //   it("converts string to lowercase by default", function() {
  //     let result = translate("SCHOOL");
  //     expect(result).toBe("oolschay");
  //   });
  it("maintains input word casing", function() {
    let result = translate("sChoOl");
    expect(result).toBe("oOlsChay");
  });
  it("adds lowercase 'ay' onto lowercase words", function() {
    let result = translate("school");
    expect(result).toBe("oolschay");
  });
  it("adds lowercase 'ay' onto titlecase words", function() {
    let result = translate("School");
    expect(result).toBe("Oolschay");
  });
  it("adds uppercase 'AY' onto uppercase words", function() {
    let result = translate("GREEN");
    expect(result).toBe("EENGRAY");
  });
});
