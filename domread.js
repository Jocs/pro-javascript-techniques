
function domReady(fn){
	if(domReady.done) return fn;
	if(domReady.timer){
		domReady.watch.push(fn);
	} else {
		window.addEventListener('load', function(){
			isDomReady();
		});
		domReady.watch = [fn];
		domReady.timer = setInterval(function(){
			isDomReady();
		},13);
	}
}
function isDomReady(){
	if(domReady.done) return false;
	if(document && 
	  document.getElementById && 
	  document.getElementsByTagName && 
	  document.body){
		for(var i = 0; i < domReady.watch.length; i ++){
			domReady.watch[i]();
		}
		
		clearInterval(domReady.timer);
		domReady.timer = null;

		domReady.done = true;
		domReady.watch = null;
	}
}