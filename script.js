console.log("hi everyone welcome to spotify made by aman");
let songindex=0;
let progress;
let audioelement= new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar = document.getElementById('bar');
 let playgif=document.getElementById('playgif');
 let songname= Array.from(document.getElementsByClassName('songitem'));
 let playitem= Array.from(document.getElementsByClassName('playbtn'));
 let forward=document.getElementById('forward');
 let backward=document.getElementById('backward');
 let mastertext=document.getElementById('mastertext');
 let flip=document.getElementsByClassName('back')[0];


let songs= [
    {songname:"Shiv mantra",filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songname:"Ajj Din Chadeya",filepath:"songs/2.mp3", coverpath:"covers/2.jpg"},
    {songname:"Baarishein",filepath:"songs/3.mp3", coverpath:"covers/3.jpg"},
    {songname:"Looriyan",filepath:"songs/4.mp3", coverpath:"covers/4.jpg"},
    {songname:"O Saathi",filepath:"songs/5.mp3", coverpath:"covers/5.jpg"},
    {songname:"Tera Hone Laga Hu",filepath:"songs/6.mp3", coverpath:"covers/6.jpg"},
    {songname:"Tu hai Kaha",filepath:"songs/7.mp3", coverpath:"covers/7.jpg"}
]
let arstist=[`it is composed by Shri Adi Shankracharya`,
    `Ajj Din chadeya is written by the famous written and composer Pritam chakraborty nad was given voise by the famous singer Rahat Fateh Ali Khan `,`Baarishein song is written and sing by the famous Indie Artist Anuv jain `,`Looriyan song is written and sing  by Spectra and Panther in the famous reality show Hustle season 2 `, `O Saathi song is written by the famous writter Arko Pravo Mukherjee and sung by the Famous singer Atif Aslam for Baaghi movie`, `Tera Hone Laga Hoon song is written by DJ Suketu and sing by the famous singer Atif Aslam for the movie Ajab Prem Ki Ghazab Kahani`,`Tu Hai Kahan song lyrics are penned down by Usama Ali, Ahad Khan while music is composed by Raffey Anwar and video has been also directed by Raffey Anwar. This song is sing by Uraan`
]

songname.forEach((element , index) => {
    
    element.querySelectorAll('img')[0].src=songs[index].coverpath;
    element.getElementsByClassName('songname')[0].innerText=songs[index].songname;
});
// handling palay/pause
masterplay.addEventListener('click',() => {
    if(audioelement.paused || audioelement.currentTime==0){
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        playgif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        playgif.style.opacity=0;
        
    }
    //managing the bar
    audioelement.addEventListener('timeupdate',()=>{
        progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
        myprogressbar.value=progress;
    })
    // changing the song with bar
    myprogressbar.addEventListener('change',()=>{
        audioelement.currentTime= myprogressbar.value * audioelement.duration/100;
    })
})
 const makeallplay=()=>{
    playitem.forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
//  list button update
playitem.forEach((element)=>{
    element.addEventListener('click',()=>{
        if(audioelement.paused){
        songindex= parseInt(element.id);
        makeallplay();
        element.classList.remove('fa-play');
        element.classList.add('fa-pause');
        audioelement.src=`songs/${songindex+1}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');}
        else{
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
            audioelement.pause();
        }
    mastertext.innerText=songs[songindex].songname;
    playgif.style.opacity=1;
    flip.innerText=arstist[songindex];
   
        
    })
})
//forward button

forward.addEventListener('click',()=>{
    if(songindex>=6){
        songindex=0;
    }
    else{
        songindex+=1
    }
    mastertext.innerText=songs[songindex].songname;

    audioelement.src=`songs/${songindex+1}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    playgif.style.opacity=1;
    flip.innerText=arstist[songindex];

})
backward.addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1
    }
    flip.innerText=arstist[songindex];

    mastertext.innerText=songs[songindex].songname;
    audioelement.src=`songs/${songindex+1}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    playgif.style.opacity=1;
})

