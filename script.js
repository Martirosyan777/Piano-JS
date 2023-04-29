const pianoKeys = document.querySelectorAll(".piano-keys .key");
console.log(pianoKeys);

let allKeys = [];

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); 
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const playTune = (key) => {
    let audio = document.querySelector('.key-audio');
    audio.src = `tunes/${key}.wav`;
    audio.play(); 
};