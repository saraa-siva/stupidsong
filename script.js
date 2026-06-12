const lyric = document.getElementById("lyric");

const scenes = [

{
text: "you're a spark in the dark ✦",
className: "spark"
},

{
text: "and my clothes all caught aflame",
className: "glow"
},

{
text: "you should feel how i feel",
className: ""
},

{
text: "when somebody says your name",
className: "big"
},

{
text: "i'm a car speeding down the boulevard",
className: ""
},

{
text: "WITHOUT A BRAKE",
className: "shake big"
},

{
text: "and i want you more",
className: "big"
},

{
text: "than any stupid song could ever say ♫",
className: ""
},

{
text: "i'm a heart made of wax ♡",
className: ""
},

{
text: "and i'm melting in the sun ☀",
className: "melt"
},

{
text: "i'm a thread on your shirt",
className: ""
},

{
text: "that is coming undone...",
className: ""
},

{
text: "i feel right",
className: ""
},

{
text: "i feel wrong",
className: ""
},

{
text: "i feel totally insane",
className: "spin"
},

{
text: "and i want you more than any stupid song could ever say ♡",
className: "big"
},

{
text: "the end",
className: ""
}

];

let current = -1;

function nextScene(){

    current++;

    if(current >= scenes.length){
        current = 0;
    }

    lyric.style.opacity = 0;

    setTimeout(()=>{

        lyric.className = "lyric";

        lyric.innerHTML = scenes[current].text;

        if(scenes[current].className){
            lyric.classList.add(
                ...scenes[current].className.split(" ")
            );
        }

        lyric.style.opacity = 1;

    },300);
}

document.body.addEventListener("click", nextScene);
