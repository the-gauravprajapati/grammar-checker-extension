# 🧠 Grammar Checker Pro – Chrome Extension (Manifest V3)

A modern Chrome Extension that detects grammar and spelling mistakes in real time using the open-source LanguageTool API.

Built using Chrome Extension Manifest V3 and optimized for performance and usability.

---

## 🚀 Overview

Grammar Checker Pro is a lightweight Chrome extension that monitors user input in:

- Input fields
- Textareas
- Contenteditable elements (e.g., Gmail compose box)

When a user pauses typing, the extension sends the text to the LanguageTool API and displays grammar suggestions in a clean floating UI.

The extension supports multiple errors in a single sentence and re-checks text automatically after each correction.

---

## ✨ Features

- ✅ Real-time grammar & spelling detection
- ✅ Supports multiple errors per sentence
- ✅ One-click automatic correction
- ✅ Works on Gmail, forms, blogs, and text editors
- ✅ Debounced API calls for better performance
- ✅ Request cancellation to prevent unnecessary API calls
- ✅ Modern floating suggestion UI
- ✅ Built using Manifest V3

---

## 🛠 Tech Stack

- Chrome Extension (Manifest V3)
- JavaScript (Content Script Architecture)
- CSS (Custom Floating UI)
- LanguageTool Open-Source Grammar API

---

## 🧩 How It Works

1. The extension injects a content script into all web pages.
2. It listens for user input in text fields.
3. After a short pause (debounce), the text is sent to the LanguageTool API.
4. The API returns grammar errors with correction suggestions.
5. A floating suggestion panel appears.
6. Clicking a suggestion replaces the incorrect word.
7. The updated text is rechecked automatically until all errors are resolved.

---

## ⚡ Performance Optimizations

- Debounced input handling (prevents excessive API calls)
- AbortController used to cancel previous requests
- Limited suggestion rendering (max 5 suggestions at a time)
- Only checks text when meaningful content is present

---

## 📦 Project Structure

