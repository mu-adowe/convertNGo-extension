
chrome.runtime.onInstalled.addListener(() => {
  console.log("units variables loaded");

  // chrome.scripting.executeScript({
  //   target: { tabId: tab.id },
  //   files: ['dropdownSrc.js']
  // });

});


// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tabs) {
  
//      // console.log(changeInfo.url);
//       chrome.scripting.insertCSS( {
//         target: { tabId: tabId },
//         files: ['css/cssmanip.css']
//       });
// });





// function getword(info,tab) {
//     console.log("Word " + info.selectionText + " was clicked.");
//     chrome.tabs.create({  
//       url: "http://www.google.com/search?q=" + info.selectionText
//     });
//   }
//   chrome.contextMenus.create({
//     id: "2",
//     title: "Search: %s", 
//     contexts:["selection"]
    
//   });




  
