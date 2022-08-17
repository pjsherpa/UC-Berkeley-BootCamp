const Logger = require("../logger");

const colors = {
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m"
};

describe("Logger", () => {
  describe("colors", () => {
    for (const color in colors) {
      it(`should print in ${color}`, () => {
        const log = new Logger();
        const message = "Hello world!";
        const mock = jest.spyOn(console, "log");
        mock.mockImplementation(() => {});

        log[color](message);

        expect(mock).toBeCalledWith(colors[color], message);

        mock.mockRestore();
      });
    }});
  });
