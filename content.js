const popup = document.createElement("div");
popup.className = "grammar-popup";
document.body.appendChild(popup);

let controller = null;
let debounceTimer = null;

function getText(el) {
    return el.tagName === "INPUT" || el.tagName === "TEXTAREA"
        ? el.value
        : el.innerText;
}

function setText(el, text) {
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.value = text;
    } else {
        el.innerText = text;
    }
}

async function checkGrammar(text) {
    if (controller) controller.abort();
    controller = new AbortController();

    try {
        const response = await fetch("https://api.languagetool.org/v2/check", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `text=${encodeURIComponent(text)}&language=en-US`,
            signal: controller.signal
        });

        const data = await response.json();
        return data.matches || [];
    } catch (e) {
        return [];
    }
}

function showLoading() {
    popup.innerHTML = `<div class="loading">Checking...</div>`;
    popup.classList.add("show");
}

function hidePopup() {
    popup.classList.remove("show");
}

async function showSuggestions(matches, el) {
    if (!matches || matches.length === 0) {
        hidePopup();
        return;
    }

    popup.innerHTML = `<div class="popup-header">
        Suggestions (${matches.length})
    </div>`;

    matches.slice(0, 5).forEach(match => {
        if (match.replacements.length > 0) {

            const wrapper = document.createElement("div");
            wrapper.className = "suggestion-item";

            const errorText = document.createElement("div");
            errorText.className = "error-text";
            errorText.textContent = match.context.text;

            const btn = document.createElement("button");
            btn.className = "suggestion-btn";
            btn.textContent = match.replacements[0].value;

            btn.onclick = async () => {
                const text = getText(el);

                const newText =
                    text.substring(0, match.offset) +
                    match.replacements[0].value +
                    text.substring(match.offset + match.length);

                setText(el, newText);

                showLoading();
                const updatedMatches = await checkGrammar(newText);
                showSuggestions(updatedMatches, el);
            };

            wrapper.appendChild(errorText);
            wrapper.appendChild(btn);
            popup.appendChild(wrapper);
        }
    });

    popup.classList.add("show");
}

document.addEventListener("input", function (e) {
    const el = e.target;

    if (
        el.tagName === "INPUT" ||
        el.tagName === "TEXTAREA" ||
        el.isContentEditable
    ) {
        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(async () => {
            const text = getText(el);

            if (text.trim().length < 3) {
                hidePopup();
                return;
            }

            showLoading();
            const matches = await checkGrammar(text);
            showSuggestions(matches, el);
        }, 700);
    }
});
console.log("Grammar Extension Loaded");
