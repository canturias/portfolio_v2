

fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC_DxKc3pGsBW24x2I7zsVJA&maxResults=10&order=date&key=AIzaSyDyQifgxoQYZnc3rjZFeOYS6GUoHUymEIU")
.then((result)=>{
  return result.json()
}).then ((data)=>{
  console.log(data)
  let videos = data.items
  videoLink = "https://youtube.com/watch?v=" + videoID

  for(video of videos){
    videoContainer.innerHTML += `
      <h3>${video.snippet.title}</h3>

    `
  }
    
})