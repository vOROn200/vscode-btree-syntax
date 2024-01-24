# Behaviour Tree DSL (BTree) for VS Code

## Description

This Visual Studio Code plugin provides syntax highlighting support for Behaviour Tree DSL (Domain-Specific Language). It offers an intuitive and user-friendly syntax highlighting feature, making it easier for developers to read and write Behaviour Tree code.

## Features

- **Syntax Highlighting**: The plugin provides vibrant and readable syntax highlighting for key elements of the Behaviour Tree DSL, simplifying navigation and improving code readability.

## Installation

To install this plugin, follow these steps in Visual Studio Code:

1. Go to the **Extensions** section.
2. Search for `BTree`.
3. Click **Install**.

## Usage

After installing the plugin, syntax highlighting will be automatically applied to files with the `.btree` extension.

## Remarshal Command

To convert btree.tmLanguage.yaml to JSON format, use the following remarshal command:

```bash
remarshal syntaxes/btree.tmLanguage.yaml --of json > syntaxes/btree.tmLanguage.json
```

This command is useful for developers who need to convert the YAML syntax file to JSON. Ensure you have remarshal installed on your system to use this command.

## Support and Contribution

If you have any questions, issues, or suggestions for improvement, please visit our [GitHub repository](https://github.com/vOROn200/vscode-btree-syntax.git).

## License

This plugin is distributed under the [MIT License](LICENSE).
