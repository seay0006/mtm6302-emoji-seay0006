// INSTRUCTIONS
//1. You may not declare variables with var. Use either const or let.


// adding emoji to the gallery
const emojiList = ['😀', '⌚', '🚀', '🎉', '💗', '🔥', '🌟', '😎', '👍', '🤩','💪','🚆'];
const gallery = document.getElementById('emoji-gallery');

// trying to make the emojis show on the page
emojiList.forEach(emoji => {
    const emojiElement = document.createElement('div');
    emojiElement.className = 'emoji';
    emojiElement.textContent = emoji;
    gallery.appendChild(emojiElement);
}
);
