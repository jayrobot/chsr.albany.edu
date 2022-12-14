var a_tab = '';
function detectTabs(){
	a_tab = document.location.toString().split('?tab=')[1];
	var t_list = document.getElementsByTagName('ul');
	for(var i = 0; i < t_list.length; i++){
		if(t_list[i].className.indexOf('tabset') != -1)	initTabs(t_list[i]);
	}
}
function initTabs(nav_h){
	var _btn = [];
	var _a = -1;
	var t_btn = nav_h.getElementsByTagName('a');
	for(var i = 0; i < t_btn.length; i++){
		if(t_btn[i].className.indexOf('tab') != -1){
			t_btn[i]._box = document.getElementById(t_btn[i].href.substr(t_btn[i].href.indexOf("#") + 1));
			_btn.push(t_btn[i]);
			if(t_btn[i]._box) if(t_btn[i]._box.id == a_tab) _a = t_btn[i];
		}
	}
	for(var i = 0; i < _btn.length; i++){
		_btn[i]._i = i;
		if(_a != -1){
			if(_btn[i] != _a) _btn[i].className = _btn[i].className.replace('active', '');
			else if(_btn[i].className.indexOf('active') == -1) _btn[i].className += ' active';
		}
		if(_btn[i].className.indexOf('active') != -1){
			_a = i;
			if(_btn[i]._box){ _btn[i]._box.style.display = 'block';}
		}
		else if(_btn[i]._box){ _btn[i]._box.style.display = 'none';}
		_btn[i].onclick = function(){
			if(this._i != _a){
				_btn[_a].className = _btn[_a].className.replace('active','');
				if(_btn[_a]._box) _btn[_a]._box.style.display = 'none';
				if(this.className.indexOf('active') == -1) this.className += ' active';
				if(this._box) this._box.style.display = 'block';
				_a = this._i;
			}
			return false;
		}
	}
}
if (window.addEventListener) window.addEventListener("load", detectTabs, false);
else if (window.attachEvent) window.attachEvent("onload", detectTabs);