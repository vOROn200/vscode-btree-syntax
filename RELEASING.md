# Releasing a new version

The extension is published to the Visual Studio Marketplace by uploading a `.vsix` manually.
CI (GitHub Actions) only builds the package and checks dependencies.

## 1. Edit the grammar

Edit only `syntaxes/btree.tmLanguage.yaml`. `btree.tmLanguage.json` is generated — do not edit it by hand.

```bash
npm install              # once, after cloning
npm run build:grammar    # regenerate JSON from YAML
```

## 2. Test the highlighting

1. Open the project in VS Code and press **F5** — a second window opens with your version of the extension.
2. Open `examples/ball.btree` (or any `.btree` file) and check the highlighting.
3. If something has the wrong color, put the cursor on it and run **Developer: Inspect Editor Tokens and Scopes** to see which grammar rule matched.
4. After editing the YAML, run `npm run build:grammar` again and reload the extension window (**Cmd+R**).

## 3. Bump the version and describe changes

1. In `package.json` increase `"version"`: `0.1.11` → `0.1.12` for fixes, `0.2.0` for notable new features.
   The Marketplace rejects a version that is already published.
2. In `CHANGELOG.md` add a section `## [0.1.12] - <date>` at the top with the list of changes.
   Users see it on the Changelog tab in the Marketplace.

## 4. Build the `.vsix`

```bash
npm run check:grammar    # verify JSON is in sync with YAML
npm run package          # → btree-syntax-0.1.12.vsix in the project root
```

Optional: install it locally first — **Extensions → ⋯ → Install from VSIX…**

## 5. Publish

1. Open https://marketplace.visualstudio.com/manage/publishers/vOROn200
2. Next to **Btree** click **⋯ → Update** and choose the new `.vsix`.
3. Wait a few minutes for validation. Installed copies update automatically.

## 6. Commit

```bash
git add -A
git commit -m "Release 0.1.12: <summary>"
git push
```

To commit under your own name in this repository (once):

```bash
git config user.name "Artem Yushkov"
git config user.email "artem.yushkov@gmail.com"
```

## Dependabot alerts

```bash
npm update               # or: npm install <package>@<fixed version>
npm audit                # should report 0 vulnerabilities
```

Commit `package.json` and `package-lock.json`. Both dependencies (`js-yaml`, `@vscode/vsce`) are dev-only
and are not included in the `.vsix`, so no new release is needed for them.
