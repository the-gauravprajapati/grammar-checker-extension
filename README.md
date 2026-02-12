# Grammar Checker Pro – Chrome Extension (Manifest V3)

Grammar Checker Pro is a Chrome Extension built using Manifest V3 that detects grammar and spelling mistakes in real time using the open-source LanguageTool API.

The extension works on input fields, textareas, and contenteditable elements such as the Gmail compose box.

------------------------------------------------------------

FEATURES

- Real-time grammar and spelling detection
- Supports multiple errors in a single sentence
- One-click automatic correction
- Works on Gmail, forms, blogs, and text editors
- Debounced API calls for better performance
- Cancels previous API requests to improve speed
- Clean floating suggestion user interface
- Built using Chrome Extension Manifest V3

------------------------------------------------------------

TECH STACK

- Chrome Extension (Manifest V3)
- JavaScript (Content Script)
- CSS (Custom UI Styling)
- LanguageTool Open-Source API

------------------------------------------------------------

HOW IT WORKS

1. The extension injects a content script into web pages.
2. It listens for user input in input fields, textareas, and contenteditable elements.
3. When the user pauses typing, the text is sent to the LanguageTool API.
4. The API returns detected grammar and spelling mistakes.
5. A floating suggestion panel appears with correction options.
6. Clicking a suggestion replaces the incorrect word.
7. The updated text is automatically re-checked until no errors remain.

------------------------------------------------------------

PROJECT STRUCTURE

grammar-checker-extension/
│
├── manifest.json
├── content.js
├── style.css
└── README.md

------------------------------------------------------------

EXAMPLE

Input:
i has a apple.

Detected errors:
- i → I
- has → have
- a → an

The extension displays suggestions and updates the sentence step by step.

------------------------------------------------------------

INSTALLATION GUIDE

1. Download or clone this repository.
2. Open Google Chrome.
3. Go to: chrome://extensions
4. Enable Developer Mode (top right).
5. Click "Load Unpacked".
6. Select the project folder.
7. The extension is now active.

------------------------------------------------------------

API USED

This project uses the public LanguageTool API:
https://api.languagetool.org

No API keys or sensitive credentials are stored in this repository.

------------------------------------------------------------

DEMO

(Add your demo video link here)

------------------------------------------------------------

AUTHOR

Your Name  
Chrome Extension Assignment Project
