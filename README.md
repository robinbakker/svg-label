### 🏷️ SVG label

This is a Cloudflare Worker project to get a simple customized SVG label that can be used in Markdown.

You can setup your own worker at Cloudflare (currently 100,000 requests per day for free). You could use this project and use the [Cloudflare CLI (Wrangler)](https://developers.cloudflare.com/workers/cli-wrangler/) to publish.

Pass the options as query string parameters, so you can use it like this;

```
![labels](https://[worker-name].[your-own-account].workers.dev/?text=labels&bgcolor=00f&textcolor=fff)
```

![labels](https://user-images.githubusercontent.com/11250019/165377440-d2190c57-aa09-47b2-81b1-3651616389a4.svg) ![are](https://user-images.githubusercontent.com/11250019/165377465-9bded31e-0f4c-4219-ba66-49d57e65db30.svg) ![cool](https://user-images.githubusercontent.com/11250019/165377479-45099960-b5f5-4ea6-a40e-24d3eac367f9.svg)

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
