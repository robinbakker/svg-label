## 🏷️ SVG label

This is a Cloudflare Worker project to get a simple customized SVG label that can be used in Markdown.

You can setup your own worker at Cloudflare (currently 100,000 requests per day for free).

Pass the options via query string parameters, so you can use it like this;

```
![label](https://[worker-name].[your-own-account].workers.dev/?text=label&bgcolor=00f&textcolor=fff)
```

#### Options

| Param      | Description                                                             |
| ---------- | ----------------------------------------------------------------------- |
| text       | The text of the label                                                   |
| textcolor  | Hex text color code, default "fff" (white)                              |
| bgcolor    | Hex background color code, default "f00" (red)                          |
| fontsize   | Font size in pixels, default 16px                                       |
| fontweight | Font weight numeric value, default 600 (bold)                           |
| width      | Pixel width, by default _slightly_ based on number of characters (text) |
| height     | Numeric value for pixel height, by default based on font size           |

---

Heavily inspired by "svg-labels" from Bryan Housel - see https://github.com/bhousel/svg-labels
