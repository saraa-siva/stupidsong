const lyric = document.getElementById("lyric");
const body = document.body;
const sun = document.querySelector(".sun");

/* =======================
   SUNSET PROGRESSION
======================= */

const sunsets = [

{
top:"#f8d6ba",
mid:"#efb18f",
bottom:"#8fb0c7",
sun:"#ffd89d"
},

{
top:"#f6caa8",
mid:"#eaab83",
bottom:"#84a7c2",
sun:"#ffc88b"
},

{
top:"#f4bf98",
mid:"#e39878",
bottom:"#7d9ebf",
sun:"#ffb576"
},

{
top:"#efb088",
mid:"#da866f",
bottom:"#7594b7",
sun:"#ff9f68"
},

{
top:"#e59f84",
mid:"#c97773",
bottom:"#6c89ad",
sun:"#ff8d72"
},

{
top:"#d58e8e",
mid:"#b06d80",
bottom:"#647fa4",
sun:"#ff7f8c"
},

{
top:"#c6809c",
mid:"#975e8a",
bottom:"#5b7398",
sun:"#ff7ca6"
}

];

/* =======================
   LYRICS
======================= */

const scenes = [

`
<div class="intro">
press space ♡
</div>
`,

`
you're a
<span class="spark-word">spark</span>
in the dark
`,

`
and my clothes all caught
<span class="aflame-word">aflame</span>
`,

`
you should feel how i feel
`,

`
when somebody says

<br><br>

<span class="your-name">
your name
</span>
`,

`
i'm a car speeding down

<br>

the boulevard
`,

`
WITHOUT A

<br>

<span class="brake-word">
BRAKE
</span>
`,

`
and i want you more
`,

`
than any stupid song

<br>

could ever say
`,

`
i'm a heart made of wax ♡
`,

`
and i'm

<span class="melt-word">
melting
</span>

in the sun
`,

`
i'm a thread on your shirt
`,

`
that is coming

<span class="thread-word">
undone
</span>
`,

`
i feel right
`,

`
i feel wrong
`,

`
i feel totally

<span class="insane-word">
INSANE
</span>
`,

`
and i want you more

<br>

than any stupid song

<br>

could ever say ♡
`

];

let current = 0;

/* =======================
   INITIAL STATE
======================= */

lyric.innerHTML = scenes[0];

/* =======================
   UPDATE SUNSET
======================= */

function updateSunset(){

    const stage =
        Math.min(
            current,
            sunsets.length - 1
        );

    const colors = sunsets[stage];

    body.style.setProperty(
        "--top",
        colors.top
    );

    body.style.setProperty(
        "--mid",
        colors.mid
    );

    body.style.setProperty(
        "--bottom",
        colors.bottom
    );

    sun.style.background = `
    radial-gradient(
        circle,
        #fff6b3,
        ${colors.sun}
    )
    `;

    sun.style.transform =
        `scale(${1 + stage * 0.02})`;
}

/* =======================
   NEXT SCENE
======================= */

function nextScene(){

    current++;

    if(current >= scenes.length){

        current = scenes.length - 1;
        return;

    }

    lyric.style.opacity = 0;

    lyric.style.transform =
        "translateY(15px)";

    setTimeout(() => {

        lyric.innerHTML =
            scenes[current];

        lyric.classList.remove(
            "fade-in"
        );

        void lyric.offsetWidth;

        lyric.classList.add(
            "fade-in"
        );

        lyric.style.opacity = 1;

        lyric.style.transform =
            "translateY(0px)";

        updateSunset();

    },250);

}

/* =======================
   SPACEBAR
======================= */

document.addEventListener(
    "keydown",
    (e)=>{

        if(
            e.code === "Space"
        ){

            e.preventDefault();

            nextScene();

        }

    }
);
