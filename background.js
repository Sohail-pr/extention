console.log('Hi its background here!');
chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked(tab){
    console.log('keyPressed');
    let  msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id,msg);
}