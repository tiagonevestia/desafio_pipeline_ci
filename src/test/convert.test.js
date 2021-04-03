var { rgbToHex, hexToRgb } = require("../lib/convert");

describe("Converter Código em Cores", () => {
  it("converter cores básicas", function () {
    var redHex = rgbToHex(255, 0, 0);
    var greenHex = rgbToHex(0, 255, 0);
    var blueHex = rgbToHex(0, 0, 255);

    expect(redHex).toEqual("ff0000");
    expect(greenHex).toEqual("00ff00");
    expect(blueHex).toEqual("0000ff");
  });

  describe("Conversão de hex para RGB", function () {
    it("converter cores básicas", function () {
      var red = hexToRgb("ff0000");
      var green = hexToRgb("00ff00");
      var blue = hexToRgb("0000ff");

      expect(red).toEqual([255, 0, 0]);
      expect(green).toEqual([0, 255, 0]);
      expect(blue).toEqual([0, 0, 255]);
    });
  });
});
