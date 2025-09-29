// INSTRUCTIONS
//1. You may not declare variables with var. Use either const or let.


// adding emoji to the gallery
const emojiList = ['😀', '⌚', '🚀', '🎉', '💗', '🔥', '🌟', '😎', '👍', '🤩','💪','🚆'];
const gallery = document.getElementById('emoji-gallery');

// trying to make the emojis show on the page
emojiList.forEach(emoji => {
    const emojiContainer = document.createElement('div');
    emojiContainer.className = 'emoji-container';

    const emojiElement = document.createElement('div');
    emojiElement.className = 'emoji';
    emojiElement.textContent = emoji;
    
    const codeElement = document.createElement('div');
    codeElement.className = 'emoji-code';
    codeElement.textContent = 'U+' + emoji.codePointAt(0).toString(16).toUpperCase();
    
    
    emojiContainer.appendChild(emojiElement);
    emojiContainer.appendChild(codeElement);
    gallery.appendChild(emojiContainer);
}
);
