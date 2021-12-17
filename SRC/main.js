// Fetch swedish radio API
async function getChannelData() {
  try {
    let response = await fetch(
      "http://api.sr.se/api/v2/channels?format=json&indent=true&pagination=false"
    );
    let channelData = await response.json();
    console.log(channelData);
    return channelData;
  } catch (error) {
    console.log("error :", error);
  }
}

// create a function that loops through the api and selects the features that i want

async function displayAudio() {
  let audioData = await getChannelData();

  //  create a container to import features into innerHTML
  let myDiv = document.getElementById("container");

  for (let i = 0; i < audioData.channels.length; i++) {
    // console.log("for loop is running");

    console.log(audioData.channels[i].liveaudio.url);
    // Create string interpolations for the features to be sent to innerHtml
    myDiv.innerHTML += `<div class="logoWrapper">
    <a href="${audioData.channels[i].liveaudio.url}"><img id="images" 
    src="${audioData.channels[i].image}" alt="logo of radio channel: ${audioData.channels[i].name}" /> </a>
    </div>`;
  }
}
displayAudio();

// Things to improve on my app

// 1 build an actual music player page that looks presentable
// that you can enter once you have selected a specific radio station.

//i want to have a better understanding on how to place what i have fetched into specific places via html
// understandimng how to use functions alot better in a way and why they work certain ways.
// understanding what i can get out of an api and being able to apply it
// understanding the structure of javaScript and knowing what goes where
