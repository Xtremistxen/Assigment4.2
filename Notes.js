function Sound(src) 
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() 
    {
        this.sound.play();
    }
    this.stop = function() 
    {
        this.sound.pause();
        this.sound.currentTime = 0; 
    }
}


let mySad = new Sound("Sample/an-explanation-sad-slow-piano-music-314450.mp3");
let myEmotional = new Sound("Sample/emotional-piano-music-256262.mp3");
let myRelaxing = new Sound("Sample/relaxing-piano-music-259727.mp3");


function play(audio) 
{
    
    audio.play();

    
    document.getElementById("play").disabled = true;
    document.getElementById("play1").disabled = true;
    document.getElementById("play2").disabled = true;

    
    document.getElementById("stop").disabled = false;
    document.getElementById("stop1").disabled = false;
    document.getElementById("stop2").disabled = false;
}


function stop(audio) 
{
    
    audio.stop();

    
    document.getElementById("play").disabled = false;
    document.getElementById("play1").disabled = false;
    document.getElementById("play2").disabled = false;

    
    document.getElementById("stop").disabled = true;
    document.getElementById("stop1").disabled = true;
    document.getElementById("stop2").disabled = true;
}
    
    function playNote(note)
    {
    const notes = 
    {   // Added 88 piano notes had to look up each note to make sure it was in the correct location on the piano itself
        "A0": new Audio("Pianonotes/A0.ogg"),
        "As0": new Audio("Pianonotes/As0.ogg"),
        "B0": new Audio("Pianonotes/B0.ogg"),
        "C1": new Audio("Pianonotes/C1.ogg"),
        "Cs1": new Audio("Pianonotes/Cs1.ogg"),
        "D1": new Audio("Pianonotes/D1.ogg"),
        "Ds1": new Audio("Pianonotes/Ds1.ogg"),
        "E1": new Audio("Pianonotes/E1.ogg"),
        "F1": new Audio("Pianonotes/F1.ogg"),
        "Fs1": new Audio("Pianonotes/Fs1.ogg"),
        "G1": new Audio("Pianonotes/G1.ogg"),
        "Gs1": new Audio("Pianonotes/Gs1.ogg"),
        "A1": new Audio("Pianonotes/A1.ogg"),
        "As1": new Audio("Pianonotes/As1.ogg"),
        "B1": new Audio("Pianonotes/B1.ogg"),
        "C2": new Audio("Pianonotes/C2.ogg"),
        "Cs2": new Audio("Pianonotes/C#2.ogg"),
        "D2": new Audio("Pianonotes/D2.ogg"),
        "Ds2": new Audio("Pianonotes/Ds2.ogg"),
        "E2": new Audio("Pianonotes/E2.ogg"),
        "F2": new Audio("Pianonotes/F2.ogg"),
        "Fs2": new Audio("Pianonotes/Fs2.ogg"),
        "G2": new Audio("Pianonotes/G2.ogg"),
        "Gs2": new Audio("Pianonotes/Gs2.ogg"),
        "A2": new Audio("Pianonotes/A2.ogg"),
        "As2": new Audio("Pianonotes/As2.ogg"),
        "B2": new Audio("Pianonotes/B2.ogg"),
        "C3": new Audio("Pianonotes/C3.ogg"),
        "Cs3": new Audio("Pianonotes/Cs3.ogg"),
        "D3": new Audio("Pianonotes/D3.ogg"),
        "Ds3": new Audio("Pianonotes/Ds3.ogg"),
        "E3": new Audio("Pianonotes/E3.ogg"),
        "F3": new Audio("Pianonotes/F3.ogg"),
        "Fs3": new Audio("Pianonotes/Fs3.ogg"),
        "G3": new Audio("Pianonotes/G3.ogg"),
        "Gs3": new Audio("Pianonotes/Gs3.ogg"),
        "A3": new Audio("Pianonotes/A3.ogg"),
        "As3": new Audio("Pianonotes/As3.ogg"),
        "B3": new Audio("Pianonotes/B3.ogg"),
        "C4": new Audio("Pianonotes/C4.ogg"),
        "Cs4": new Audio("Pianonotes/Cs4.ogg"),
        "D4": new Audio("Pianonotes/D4.ogg"),
        "Ds4": new Audio("Pianonotes/Ds4.ogg"),
        "E4": new Audio("Pianonotes/E4.ogg"),
        "F4": new Audio("Pianonotes/F4.ogg"),
        "Fs4": new Audio("Pianonotes/Fs4.ogg"),
        "G4": new Audio("Pianonotes/G4.ogg"),
        "Gs4": new Audio("Pianonotes/Gs4.ogg"),
        "A4": new Audio("Pianonotes/A4.ogg"),
        "As4": new Audio("Pianonotes/As4.ogg"),
        "B4": new Audio("Pianonotes/B4.ogg"),
        "C5": new Audio("Pianonotes/C5.ogg"),
        "Cs5": new Audio("Pianonotes/Cs5.ogg"),
        "D5": new Audio("Pianonotes/D5.ogg"),
        "Ds5": new Audio("Pianonotes/Ds5.ogg"),
        "E5": new Audio("Pianonotes/E5.ogg"),
        "F5": new Audio("Pianonotes/F5.ogg"),
        "Fs5": new Audio("Pianonotes/Fs5.ogg"),
        "G5": new Audio("Pianonotes/G5.ogg"),
        "Gs5": new Audio("Pianonotes/Gs5.ogg"),
        "A5": new Audio("Pianonotes/A5.ogg"),
        "As5": new Audio("Pianonotes/As5.ogg"),
        "B5": new Audio("Pianonotes/B5.ogg"),
        "C6": new Audio("Pianonotes/C6.ogg"),
        "Cs6": new Audio("Pianonotes/Cs6.ogg"),
        "D6": new Audio("Pianonotes/D6.ogg"),
        "Ds6": new Audio("Pianonotes/Ds6.ogg"),
        "E6": new Audio("Pianonotes/E6.ogg"),
        "F6": new Audio("Pianonotes/F6.ogg"),
        "Fs6": new Audio("Pianonotes/Fs6.ogg"),
        "G6": new Audio("Pianonotes/G6.ogg"),
        "Gs6": new Audio("Pianonotes/Gs6.ogg"),
        "A6": new Audio("Pianonotes/A6.ogg"),
        "As6": new Audio("Pianonotes/As6.ogg"),
        "B6": new Audio("Pianonotes/B6.ogg"),
        "C7": new Audio("Pianonotes/C7.ogg"),
        "Cs7": new Audio("Pianonotes/Cs7.ogg"),
        "D7": new Audio("Pianonotes/D7.ogg"),
        "Ds7": new Audio("Pianonotes/Ds7.ogg"),
        "E7": new Audio("Pianonotes/E7.ogg"),
        "F7": new Audio("Pianonotes/F7.ogg"),
        "Fs7": new Audio("Pianonotes/Fs7.ogg"),
        "G7": new Audio("Pianonotes/G7.ogg"),
        "Gs7": new Audio("Pianonotes/Gs7.ogg"),
        "A7": new Audio("Pianonotes/A7.ogg"),
        "As7": new Audio("Pianonotes/As7.ogg"),
        "B7": new Audio("Pianonotes/B7.ogg"),
        "C8": new Audio("Pianonotes/C8.ogg")
    };

    if (notes[note]) 
        {
        notes[note].currentTime = 0; // I set this to 0 so the notes play like a real piano
        notes[note].play();
        }
}
