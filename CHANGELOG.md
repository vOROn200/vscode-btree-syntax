# Change Log

All notable changes to the "btree-syntax" extension are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/).

## [0.1.11] - 2026-10-10

### Security
- Bump `js-yaml` (dev dependency used to generate the grammar) to 4.3.2 to fix CVE-2026-84375 / GHSA-2883-xcg3-v3hh.

### Changed
- Grammar JSON is now generated with `npm run build:grammar` (no external `remarshal` needed); CI fails if it is out of date.
- CI: updated actions, switched to `@vscode/vsce`, publishing no longer silently ignores errors and skips already published versions.
- Packaged extension no longer contains development files.

## [0.1.10] - 2024-11-08
- Variable patterns and comma separators in action arguments.

## [0.1.9] - 2024-11-05
- Improved function handling, mock status patterns (`as success|failure|running|...`).

## [0.1.8] - 2024-11-04
- Variables and logical expressions (`@if(...)`).

## [0.1.7] - 2024-02-26
- Jinja2 variables and blocks.

## [0.1.2] – [0.1.6] - 2024-01-24 … 2024-01-25
- Syntax highlighting fixes, decorator updates.

## [0.1.1] - 2023-12-04
- `sequence_memory`, `fallback_memory`, `parallel_memory`.

## [0.1.0] - 2023-12-02
- Initial release.
