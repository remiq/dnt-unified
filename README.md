# dnt-unified

> Unified interface for "Do not track" detection in Javascript for all browsers.

This is browser-side utility.

According to draft: http://www.w3.org/2011/tracking-protection/drafts/tracking-dnt.html#widl-Navigator-doNotTrack

## Usage

### Browserify

```js
    var dnt = require('dnt-unified');
    dnt(window); 
    //=> "1"
    // returns "1" (do not track) | "0" (do track) | null (not set in browser)
```

### RequireJS

```js
    define([
        'library/dnt-unified/amd'
    ], function(dnt) {
        console.log(dnt(window));
    });
```

## License

MIT