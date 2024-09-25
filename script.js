document.addEventListener('DOMContentLoaded', () => {
    const typingArea = document.getElementById('typingArea');
    
    // Map of key sounds
    const keySounds = {
        'a': 'https://www.fesliyanstudios.com/play-mp3/387',
        'b': 'https://www.fesliyanstudios.com/play-mp3/408',
        'c': 'https://www.fesliyanstudios.com/play-mp3/412',
        'd': 'https://www.fesliyanstudios.com/play-mp3/392',
        'e': 'https://www.fesliyanstudios.com/play-mp3/395',
        'f': 'https://www.fesliyanstudios.com/play-mp3/399',
        'g': 'https://www.fesliyanstudios.com/play-mp3/401',
        'h': 'https://www.fesliyanstudios.com/play-mp3/403',
        'i': 'https://www.fesliyanstudios.com/play-mp3/406',
        'j': 'https://www.fesliyanstudios.com/play-mp3/407',
        'k': 'https://www.fesliyanstudios.com/play-mp3/408',
        'l': 'https://www.fesliyanstudios.com/play-mp3/410',
        'm': 'https://www.fesliyanstudios.com/play-mp3/412',
        'n': 'https://www.fesliyanstudios.com/play-mp3/415',
        'o': 'https://www.fesliyanstudios.com/play-mp3/417',
        'p': 'https://www.fesliyanstudios.com/play-mp3/419',
        'q': 'https://www.fesliyanstudios.com/play-mp3/421',
        'r': 'https://www.fesliyanstudios.com/play-mp3/423',
        's': 'https://www.fesliyanstudios.com/play-mp3/425',
        't': 'https://www.fesliyanstudios.com/play-mp3/427',
        'u': 'https://www.fesliyanstudios.com/play-mp3/429',
        'v': 'https://www.fesliyanstudios.com/play-mp3/431',
        'w': 'https://www.fesliyanstudios.com/play-mp3/433',
        'x': 'https://www.fesliyanstudios.com/play-mp3/435',
        'y': 'https://www.fesliyanstudios.com/play-mp3/437',
        'z': 'https://www.fesliyanstudios.com/play-mp3/439',
        'default': 'https://www.fesliyanstudios.com/play-mp3/441'
    };

    // Preload the sounds
    const preloadedSounds = {};
    Object.keys(keySounds).forEach(key => {
        preloadedSounds[key] = new Audio(keySounds[key]);
    });

    typingArea.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();
        const sound = preloadedSounds[key] || preloadedSounds['default'];

        // Clone the audio to play it instantly without delay
        const audioClone = sound.cloneNode();
        audioClone.play();
    });
});
