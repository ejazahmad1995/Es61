const api_key = "AIzaSyDvAIEVY-vwSwDzqTwQ1L1ZZmGQZuPDGnA"

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=Thor&key=[YOUR_API_KEY];


let search =async () =>{
    // let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;

    try{
        let query= document.getElementById("query").value

        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;

    let res = await fetch(url);

    let data = await res.json();

    append(data.items);

    //  console.log(data);

    }
    catch(error){
        console.log(error);
    }

    
};

// Append
let append = (data)=>{

    let container = document.getElementById("results");

    // console.log(data);

    data.forEach(({id:{videoID}, snippet:{title , thumbnails}}) => {

        let div=document.createElement("div");

        let iframe = document.createElement("iframe");
        iframe.src=`https://www.youtube.com/embed/${videoID}`;
        iframe.allow="fullscreen";

        let h3=document.createElement("h3");

        h3.innerText=title;

        div.append(iframe,h3);

        //container.append(div);

        let video={
            title,
            videoID
        };

        div.onclick = () =>{
            playVideo(video);
        };

        container.append(div);

        
    });



   
};

let playVideo = (video) =>{
    

    localStorage.setItem("video",JSON.stringify(video));
    console.log(video);

   // window.location.href="video.html";
}


 /* <iframe width="560" height="315" src="https://www.youtube.com/embed/xf2J-0mWvXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/
