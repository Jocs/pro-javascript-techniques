Function.prototype.method = function(name, func){
	this.prototype[name] = func;
	return this;
};
HTMLElement.method('next', function(){
	var ele = this.nextSibling;
	while(ele && ele.nodeType === 3){
		ele = ele.nextSibling;
	}
	return ele;
});
HTMLElement.method('prev', function(){
	var ele = this.previousSibling;
	while(ele && ele.nodeType === 3){
		ele = ele.previousSibling;
	}
	return ele;
});
HTMLElement.method('first', function(){
	var ele = this.firstChild;
	while(ele && ele.nodeType !== 1){
		ele = ele.nextSibling;
	}
	return ele;
});
HTMLElement.method('last', function(){
	var ele = this.lastChild;
	while(ele && ele.nodeType !== 1){
		ele = ele.previousSibling;
	}
	return ele;
});
HTMLElement.method('parent', function(){
	var ele = this.parentNode;
	return ele;
});




