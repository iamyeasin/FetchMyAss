// function sendSelected( tab ){
//   let msg= {
//     'selected': 'clickData.selectionText'
//   }
//   chrome.tabs.sendMessage(tab.id,msg);
//   //sendData(); 
// }

// function httpGet(theUrl){
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//     xmlHttp.send( null );
//     return xmlHttp.responseText;
// }

// chrome.contextMenus.create(contextMenuItem);
// chrome.contextMenus.onClicked.addListener(function(clickData){
//   let pre = "https://amzn";
//   pre="Your"
//   if(clickData.menuItemId == "TowelReviewer" && clickData.selectionText ){
//     if( (clickData.selectionText+"").startsWith(pre)){
// 		url = "http://localhost/db1/getdata.php?link=";
// 		url = url + clickData.selectionText;
// 		alert( httpGet(url) );
//       	alert(clickData.selectionText);
//     }
//   }
// })
