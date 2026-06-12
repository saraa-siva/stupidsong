const lyric = document.getElementById("lyric");

const scenes = [

{
text:"press space ♡",
className:""
},

{
text:"you're a spark in the dark ✦",
className:"spark"
},

{
text:"and my clothes all caught aflame",
className:"glow"
},

{
text:"you should feel how i feel",
className:""
},

{
text:`
when somebody says

<div style="
font-size:1.5em;
color:#ff6ea7;
">
your name ♡
</div>
`,
className:"big"
},

{
text:"i'm a car speeding down<br>the boulevard",
className:""
},

{
text:"WITHOUT A BRAKE",
className:"big brake"
},

{
text:"and i want you more",
className:"big"
},

{
text:"than any stupid song<br>could ever say ♫",
className:""
},

{
text:"i'm a heart made of wax ♡",
className:""
},

{
text:"and i'm melting in the sun ☀",
className:"glow"
},

{
text:"i'm a thread on your shirt",
className:""
},

{
text:"that is coming undone...",
className:""
},

{
text:"i feel right",
className:""
},

{
text:"i feel wrong",
className:""
},

{
text:"i feel totally insane",
className:"big insane"
},

{
text:`
<div style="line-height:1.15">
and i want you more<br>
than any stupid song<br>
could ever say ♡
</div>
`,
className:"big glow"
}

];

let current = 0;

function nextScene(){

    current++;

    if(current >= scenes.length){
        current = scenes.length - 1;
        return;
    }

    lyric.style.opacity = 0;

    setTimeout(() => {

        lyric.className = "lyric pop";

        lyric.innerHTML = scenes[current].text;

        if(scenes[current].className){

            lyric.classList.add(
                ...scenes[current].className.split(" ")
            );

        }

        lyric.style.opacity = 1;

    },200);

}

document.addEventListener("keydown",(e)=>{

    if(e.code === "Space"){

        e.preventDefault();

        nextScene();

    }

});
