# 🧠 Grammar Checker Pro  
### Chrome Extension (Manifest V3)

A modern Chrome Extension that detects grammar and spelling mistakes in real time using the open-source LanguageTool API.

Built with performance optimization, multi-error handling, and a clean floating UI.

---

## 🚀 Overview

Grammar Checker Pro enhances writing directly inside the browser.  
It monitors user input in:

- Input fields  
- Textareas  
- Contenteditable elements (e.g., Gmail compose box)

When the user pauses typing, the extension analyzes the text and displays smart correction suggestions in a modern floating panel.

---

## ✨ Key Features

- ✅ Real-time grammar & spelling detection  
- ✅ Multiple errors handled in a single sentence  
- ✅ One-click automatic correction  
- ✅ Automatic re-check after every fix  
- ✅ Works on Gmail, blogs, forms, and text editors  
- ✅ Debounced input handling for performance  
- ✅ Cancels previous API requests to avoid lag  
- ✅ Clean, animated floating UI  
- ✅ Built using Chrome Extension Manifest V3  

---

## 🛠 Tech Stack

- Chrome Extension (Manifest V3)
- JavaScript (Content Script Architecture)
- CSS (Custom Floating UI Design)
- LanguageTool Public API

---

## ⚙️ How It Works

1. The extension injects a content script into all web pages.
2. It listens for user input in supported fields.
3. After a short pause (debounce), the text is sent to the LanguageTool API.
4. The API returns detected grammar issues with suggested replacements.
5. A floating suggestion panel appears.
6. Clicking a suggestion replaces the incorrect text.
7. The updated text is rechecked automatically until all errors are resolved.

---

## 📂 Project Structure

grammar-checker-extension/
│
├── manifest.json # Extension configuration (Manifest V3)
├── content.js # Core logic & API integration
├── style.css # Floating suggestion UI styling
└── README.md


---

## 🧪 Example

Input: i has a apple.

Detected corrections:

- i → I  
- has → have  
- a → an  

Each correction can be applied individually, and the sentence is revalidated automatically.

---

## 🔧 Installation Guide

1. Download or clone this repository.
2. Open Google Chrome.
3. Navigate to: `chrome://extensions`
4. Enable **Developer Mode** (top right corner).
5. Click **Load Unpacked**.
6. Select the project folder.
7. The extension is now active and ready to use.

---

## 🌍 API Information

This project uses the public LanguageTool API:

https://api.languagetool.org

No API keys or sensitive credentials are included in this repository.

---

## 📌 Future Enhancements

- Inline word highlighting (Grammarly-style)
- Tooltip suggestions near incorrect words
- Dark mode UI
- Extension toggle (ON/OFF switch)
- Custom dictionary support

---

## 👨‍💻 Author

Gaurav Prajapati  



