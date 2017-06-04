window.onload = function() {

	// 获得内容区
	var con = document.getElementById('contents');
	// 获得图片区
	var picCon = document.getElementById('picture');
	// 获得图片区里的所有li
	var pic = picCon.getElementsByTagName('li');
	// 获得内容区中的所有简介
	var strs = con.getElementsByTagName('dl');

	con.onclick = function(e) {
		
		e = e || window.event;

		// 获得真正事件源
		var currObj = e.target || e.srcElement;

		// 筛选符合条件的事件源（父元素名称为li，即选中图片）
		if(currObj.parentNode.nodeName == 'LI'){

			//重置所有样式
			for (var i = 0;i < pic.length;i ++){
				
				// 设置自定义属性
				pic[i].setAttribute('index',i);

				//除去所有高亮 
				pic[i].className = '';

				// 隐藏所有简介
				strs[i].style.display = 'none';
			}

			// 设置选中项高亮
			currObj.parentNode.className = 'active';

			// 获得选中项的自定义属性
			var index = currObj.parentNode.getAttribute('index');

			// 显示选中项对应简介
			strs[index].style.display = 'block';
		}
	}

}
