# Grammar Checker Pro – Chrome Extension

## Overview

Grammar Checker Pro is a Chrome Extension built using Manifest V3.
It detects grammar and spelling mistakes in input fields, textareas,
and contenteditable elements (such as Gmail compose box).

The extension uses the open-source LanguageTool API to provide
real-time grammar suggestions.

---

## Features

- Detects grammar and spelling errors
- Works on input fields, textareas, and Gmail
- Supports multiple errors in a single sentence
- One-click correction
- Clean and modern floating UI
- Debounced API calls for performance optimization

---

## Tech Stack

- Chrome Extension (Manifest V3)
- JavaScript (Content Scripts)
- LanguageTool Open-Source Grammar API
- CSS for UI styling

---

## How It Works

1. The extension injects a content script into web pages.
2. It listens for user input in text fields.
3. When the user pauses typing, the text is sent to the LanguageTool API.
4. The API returns detected grammar mistakes.
5. A floating suggestion popup appears.
6. The user can click a suggestion to automatically correct the text.
7. After correction, the text is re-checked for remaining errors.

---

## How to Install

1. Download or clone this repository.
2. Open Google Chrome.
3. Go to: chrome://extensions
4. Enable "Developer Mode" (top right).
5. Click "Load Unpacked".
6. Select the project folder.
7. The extension is now ready to use.

---

## API Usage

This project uses the public LanguageTool API:
https://api.languagetool.org

No API keys or secrets are included in this repository.

---

## Demo

(Add your demo video link here)

---

## Author

Your Name
