chrome.browserAction.onClicked.addListener(saveData);

function saveData( tab ){
	let msg= {
		save : "savetitles"
	}
	chrome.tabs.sendMessage(tab.id,msg);
}


chrome.runtime.onMessage.addListener(function(response,sender,sendresponse){
  if( response.send == 'sendtoserver'){
    var formData = new FormData();
    formData.append(  'product_name', response.product_name );
    formData.append(  'product_link', response.product_link  );
    formData.append(  'page_link', response.page_link );
    sendMyAss(formData);
  } 
});


function sendMyAss(formData){
  // url = "http://localhost/db1/script.php";
  url = "https://turtseo.com/proreveler/script.php";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log("fuckit");
    }
  };
  xhttp.open("POST", url, true);
  xhttp.send(formData);
}


// ******************** Context Menu Codes **********************


let contextMenuItem ={
  "id":"FetchMyAss",
  "title": "Fetch My Ass",
  "contexts":["selection"]
};


// I  use background script
// Do not use content script,
// CORB policy problems
// in PHP server I had add header("Access-Control-Allow-Origin: *") to allow CORS sharing

function make(urls){
  // alert(urls)
  var xhr = new XMLHttpRequest();
  xhr.open("GET", urls, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var resp = JSON.parse(xhr.responseText);
      console.log(resp);
      alert(resp["Product"] + "\n" + resp["Page"] );
      // return resp;
    }
  }
  xhr.send();
}



chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(function(clickData){
  let pre = "https://amzn";
  if(clickData.menuItemId == "FetchMyAss" && clickData.selectionText ){
    if( (clickData.selectionText+"").startsWith(pre)){
    // url = "http://localhost/db1/getdata.php?link=";
    url = "https://turtseo.com/proreveler/getdata.php?link=";
    url = url + clickData.selectionText;
    make(url);
    /* EXTRA PORTION 1*/
    }
  }
})









/*
EXTRA PORTION 1
// let msg = {
    //   "from" : "getinfo",
    //   "url" : url
    // } 

    // chrome.runtime.sendMessage(msg);
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //   chrome.tabs.sendMessage(tabs[0].id, msg, function(response) {
    //     // console.log(response.farewell);
    //     alert(resp);
    //   });
    // });

    //alert( httpGet(url) );
    //alert(clickData.selectionText);

*/




// function sendSelected( tab ){
//   let msg= {
//     'selected': 'clickData.selectionText'
//   }
//   chrome.tabs.sendMessage(tab.id,msg);
//   //sendData(); 
// }


// chrome.contextMenus.create(contextMenuItem,function(){
//   console.log("clicked");
// });

// chrome.contextMenus.onClicked.addListener(function(clickData){
//   let pre = "https://amzn";
//   pre="Your"
//   if(clickData.menuItemId == "TowelReviewer" && clickData.selectionText ){
//     if( (clickData.selectionText+"").startsWith(pre)){
//       //   chrome.tabs.sendMessage( {'selected': clickData.selectionText} , function(response){
//       //   console.log("Bal Fira aisi");
//       // });
//       sendSelected();
//     }
//   }
// })













// ******************** Context Menu Codes **********************

// function sendData(){


// 	var formData = new FormData();
// 	formData.append(  'image', 'image' );


//  	// $.ajax({
//   //         type: 'POST',
//   //         url: '/db1/script.php',
//   //         data: formData,
//   //         processData: false,
//   //         contentType: false,
//   //         success: function(gotIt,status){
//   //           ///console.log("Data Saved Successfully to the Model");
//   //           console.log(gotIt);
//   //           //await(100)
//   //           // window.location.href = 'http://' + window.location.host+ '/patient/plogin';
//   //         },
//   //         error : function(){
//   //           alert('Something is Wrong with the server');
//   //         }
//   //       })
// }