chrome.runtime.onMessage.addListener(shuntasi);
function shuntasi(kipathaise, sender, sendresponse ){
	
	if( kipathaise.save === "savetitles"){
		var formData = new FormData();
		let cnt = 1;
		let url = document.URL + "";
		url = url.split('#')[0];

		document.querySelectorAll("h3").forEach(ink => {
		   let x = ink.querySelector("a");
		   let pre = "https://amzn";
		   let st = x + "";

		   if(x != null && st.startsWith(pre) ){
		    
		    // console.log( " "+ x.innerHTML + " " + x);
		    formData.append(  'id', cnt );
		    formData.append(  'product_name', x.innerHTML );
		    formData.append(  'product_link', x );
		    formData.append(  'page_link', url );
			sendMyAss(formData);
		 }
		});

		document.querySelectorAll("h2").forEach(ink => {
		   let x = ink.querySelector("a");
		   let pre = "https://amzn";
		   let st = x + "";

		   if(x != null && st.startsWith(pre) ){
		    
		    // console.log( " "+ x.innerHTML + " " + x);
		    formData.append(  'id', cnt );
		    formData.append(  'product_name', x.innerHTML );
		    formData.append(  'product_link', x );
		    formData.append(  'page_link', url );
			sendMyAss(formData);
		 }
		});

		document.querySelectorAll("h4").forEach(ink => {
		   let x = ink.querySelector("a");
		   let pre = "https://amzn";
		   let st = x + "";

		   if(x != null && st.startsWith(pre) ){
		    
		    // console.log( " "+ x.innerHTML + " " + x);
		    formData.append(  'id', cnt );
		    formData.append(  'product_name', x.innerHTML );
		    formData.append(  'product_link', x );
		    formData.append(  'page_link', url );
			sendMyAss(formData);
		 }

		});
		alert("All Data saved");
	}
	else if (kipathaise.from === "getinfo") {
		getMyAss(kipathaise.url);
		sendresponse({farewell: "Saved"});
	}
}

// function addModal() {
// alert("fuck");
//   $("body").append('<div class="modal fade" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Modal Header</h4></div><div class="modal-body"><p>Some text in the modal.</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div</div></div></div>');
// }


function getMyAss(urls){
	urls = urls+"";
	// console.log(urls);

	$.ajax({
    url: urls,
    type: 'GET',
    success: function(obj){
    	alert("Product : " + obj["Product"] + "\nPage: " + obj["Page"] );
    	// addModal();
    },
     error: function (xhr, ajaxOptions, thrownError) {
	    alert(xhr.status);
	    alert(thrownError);
	  }
	 });

}


function sendMyAss(formData){
	
	$.ajax({
          type: 'POST',
          url: 'http://localhost/db1/script.php',
          data: formData,
          processData: false,
          contentType: false,
          success: function(gotIt,status){
            ///console.log("Data Saved Successfully to the Model");
          },
          error : function(){
            // console.log('Something is Wrong with the server');
          }
        })
}


