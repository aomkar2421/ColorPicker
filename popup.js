let btn = document.getElementById("btn")

btn.addEventListener("click",async() => {
    let [tab] = await chrome.tabs.query({active:true, currentWindow:true});
    console.log("first");

    chrome.scripting.executeScript({
      target : {tabId :tab.id},
      function:colorPicker
    })

})

async function colorPicker (){
    try {

        let eyeDropper = new EyeDropper();
        let color = await eyeDropper.open();
        console.log(color)
        
    } catch (error) {
        console.log(error)
    }
}
