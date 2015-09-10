window.onload = function(){
	/*
	* cleanWhiteSpace  用于去除document文档中的所有空节点（
	* nodeType ===3 && /^\s*$/.test(cur.nodeValue)
	* 通过递归遍历整个文档树，把所有的空节点存在一个whitespacetext 数组中。
	* 最后在遍历这一数组，移除数组中的所有空节点。
	* －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
	* 使用的时候需注意：每次删除或添加dom元素后，都需要run一遍这个函数。防止
	* DOM操作添加了空节点。
	*/
	function cleanWhiteSpace(){
		var whiteSpaceText = [];
		(function colectWhiteSpace(element){
			element = element || document;
			var cur = element.firstChild;
			while(cur != null){
				if(cur.nodeType == 3 && !/\S/.test(cur.nodeValue)){
					Array.prototype.push.call(whiteSpaceText, cur);
				} else if(cur.nodeType == 1){
					colectWhiteSpace(cur);
				}
				cur = cur.nextSibling;
		
			}
		})();
		for(var node of whiteSpaceText ){
			node.parentNode.removeChild(node);
		}
		whiteSpaceText = null;

	}
	cleanWhiteSpace();
	//如果不run cleanWhiteSpace函数，下面打印出来就是空节点
	console.log(document.body.firstChild)

};