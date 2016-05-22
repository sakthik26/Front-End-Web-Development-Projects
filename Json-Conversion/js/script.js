$(function(){

	/*$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

  $("#submit").click(function(){
	    var json = JSON.stringify($('form').serializeObject());
      alert(json);
	})

  $("#add").click(function(){
     
  })
*/

function appendChildren() {
  var allDivs = document.getElementsByTagName("div");
  alert(allDivs.length);
  for (var i = 0; i < allDivs.length; i++) {
    var node = allDivs[i];
    var newDiv = document.createElement("div");
    decorateDiv(newDiv);
    node.appendChild(newDiv);
  }
}

// Mock of decorateDiv function for testing purposes
function decorateDiv(div) {
  div.innerHTML = "<span>Hello</span>";
}

appendChildren();

	
})
