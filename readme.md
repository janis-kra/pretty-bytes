# pretty-kibi-bytes

> Convert bytes to a human readable string: `1337` → `1.34 kiB (uses IEC format → 1024 byte = 1 kibibyte)`

Useful for displaying file sizes for humans.

-

*Note that it uses the IEC conversion unit (e.g. kibibyte).  
[Read about the difference between kilobyte and kibibyte.](https://en.wikipedia.org/wiki/Kibibyte)*


## Install

```
$ npm install --save pretty-kibi-bytes
```


## Usage

```js
const prettyBytes = require('pretty-kibi-bytes');

prettyBytes(1337);
//=> '1.30 kiB'

prettyBytes(100);
//=> '100 B'
```


## Related

- [pretty-bytes](https://github.com/sindresorhus/pretty-bytes) - base-10 version (and original version that this project is based on)
- [pretty-bytes-cli](https://github.com/sindresorhus/pretty-bytes-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com) / [Janis Krasemann](https://janiskrasemann.com)
