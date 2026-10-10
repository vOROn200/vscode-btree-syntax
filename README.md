# Behaviour Tree DSL (BTree) for VS Code

Syntax highlighting for the Behaviour Tree DSL (`.btree` files).

[Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=vOROn200.btree-syntax)

## Features

Highlighting for:

- **Control nodes**: `sequence`, `fallback`, `parallel`, their `*_memory` variants and the short forms `->`, `?`, `=>`, `->*`, `?*`, `=>*`
- **Actions** `do_something()` and **conditions** `is_ready?()` with arguments
- **Decorators**: `@inverter` / `@!`, `@repeat[n]`, `@retry[n]`, `@delay`, `@timeout`, `@force_success`, `@force_fail`, `@fail_is_success`, ... and `@if(<expression>)`
- **Mock statuses**: `as success | failure | running | ignored | none`
- **Variables**, numbers, booleans, strings, `include('file.btree')`
- Block comments `/* ... */`, bracket matching and auto-closing pairs

## Example

```
include('childrens/child.btree')

var1 = true
var2 = "str"

? main {
    ball_found?() as failure
    @! find_ball() as success
    @if(var1 && var2 != "str") child
    @repeat[3] approach_ball(var1, 'fast')
}
```

More samples are in [`examples/`](examples).

## Installation

Search for `BTree` in the Extensions view of VS Code and click **Install**.

## Development

The grammar source is `syntaxes/btree.tmLanguage.yaml`; `syntaxes/btree.tmLanguage.json` is generated from it:

```bash
npm install
npm run build:grammar   # regenerate the JSON grammar
npm run check:grammar   # verify the JSON is up to date (run in CI)
npm run package         # build a .vsix
```

Press <kbd>F5</kbd> to launch an Extension Development Host and open a file from `examples/`.

Publishing is done by GitHub Actions on push to `master` once `version` in `package.json` is bumped.
Required repository secret: `VSCE_TOKEN` (Visual Studio Marketplace personal access token).

## Support and Contribution

Questions, issues and suggestions: [GitHub repository](https://github.com/vOROn200/vscode-btree-syntax).

## License

[MIT](LICENSE)
