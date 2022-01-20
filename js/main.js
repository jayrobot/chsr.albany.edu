function initImg(){
	var img_list = document.getElementById('img-list');
	if(img_list){
		img_list = img_list.innerHTML;
		img_list = img_list.split(';');
		var _r = Math.floor(Math.random() * (img_list.length -1));
		var _img = document.createElement('img');
		_img.src = img_list[_r];
		_img.alt = 'Scenes from the University at Albany';
		document.getElementById('img-list').parentNode.insertBefore(_img, document.getElementById('img-list'));
		document.getElementById('img-list').parentNode.removeChild(document.getElementById('img-list'));
	}
}
if (window.addEventListener) window.addEventListener("load", initImg, false);
else if (window.attachEvent && !window.opera) window.attachEvent("onload", initImg);


function initRandom(){
	var _hold = document.getElementById('gallery');
	if(_hold){
		var _list = _hold.getElementsByTagName('li');
		var _r = Math.floor(Math.random() * _list.length);
		_list[_r].style.display = 'block';
	}
}