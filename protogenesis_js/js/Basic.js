//封装常用的功能

//实例化
var $ = function () {
	return new Basic()
}

//构造函数对象
function Basic() {
	this.els = [],
	this.arrbool = new Array(
		this.mailbox_bool = false,
		this.nickname_bool = false,
		this.phnumber_bool = false,
		this.password1_bool = false,
		this.password2_bool = false
	)

}


//实现了连缀语法
//获取dom元素
Basic.prototype.getId = function (id) {
	var el = document.getElementById(id)
	this.els.push(el)
	return this
}
Basic.prototype.getTagName = function (TagName) {
	var el = document.getElementsByTagName(TagName)
	for (var i in el) {
		this.els.push(el[i])
	}
	return this
}
Basic.prototype.getClassName = function (ClassName) {
	var el = document.getElementsByClassName(ClassName)
	for (var i in el) {
		this.els.push(el[i])
	}
	return this
}

//在元素中添加文字、也可以是标签
Basic.prototype.html = function (str) {
	for (var i in this.els) {
		this.els[i].innerHTML = str
	}
	return this
}

//为元素添加css样式
//attr:css属性、例"color"
//value:css值、例"red"
//使用.style
Basic.prototype.css = function (attr, value) {
	for (var i in this.els) {
		this.els[i].style[attr] = value
	}
	return this
}
//为元素添加类名
//DOM.classList.add("类名")
//不会覆盖
Basic.prototype.addClass = function (className) {
	for (var i in this.els) {
		var el = this.els[i]
		el.className += " " + className
	}
	return this
}
//移除class类名
Basic.prototype.removeClass = function (className) {
	for (var i in this.els) {
		var el = this.els[i]
		el.classList.remove(className)
	}
	return this
}


//封装下拉菜单的主要功能
//1、隐藏
//2、显示
//3、鼠标悬浮时的hover

//元素隐藏
Basic.prototype.hide = function () {
	for (var i in this.els) {
		var el = this.els[i]
		el.style.display = "none"
	}
	return this
}

//元素显示
Basic.prototype.show = function () {
	for (var i in this.els) {
		var el = this.els[i]
		el.style.display = "block"
	}
	return this
}
//鼠标经过元素时触发的事件
Basic.prototype.hover = function (over, out) {
	for (var i in this.els) {
		var el = this.els[i]
		el.onmouseover = over
		el.onmouseout = out
	}
	return this
}

//弹窗
Basic.prototype.click = function (fn) {
	for (var i in this.els) {
		var el = this.els[i]
		el.onclick = fn
	}
	return this
}
//盒子处于屏幕中心
Basic.prototype.center = function () {
	for (var i in this.els) {
		var el = this.els[i]
		//获取样式表中的属性和值
		var el_w = parseFloat(window.getComputedStyle(el, null)['width'])
		var el_h = parseFloat(window.getComputedStyle(el, null)['height'])
		//获取页面高度
		var h = ((window.innerHeight || document.documentElement.clientHeight) / 2) - el_h / 2
		var w = ((window.innerWidth || document.documentElement.clientWidth) / 2) - el_w / 2
		el.style.top = h + "px"
		el.style.left = w + "px"
	}
	return this
}

//禁止滚动条事件
Basic.prototype.scrollBar = function () {
	//禁止键盘控制滚动条
	document.body.onkeydown = function (e) {
		if (e.keyCode == 38 || e.keyCode == 40) {
			return this, false;
		}
	}
	//禁止鼠标滚轮控制滚动条
	if (typeof addEventListener != "undefined") {
		document.addEventListener('DOMMouseScroll', scrollFunc) //火狐
		document.body.addEventListener("mousewheel", scrollFunc, { //chrome
			passive: false
		})
	} else {
		document.body.onmousewheel = scrollFunc //ie
	}

	function scrollFunc(evt) {
		evt = evt || window.event;
		if (evt.preventDefault) {
			// Firefox
			evt.preventDefault();
		} else {
			// IE
			evt.returnValue = false;
		}
	}

	return this
}

//允许滚动条事件
Basic.prototype.cannelScrollBar = function () {
	//允许键盘控制滚动条
	document.body.onkeydown = function (e) {
		if (e.keyCode == 38 || e.keyCode == 40) {
			return this, true;
		}
	}
	if (typeof addEventListener != "undefined") {
		document.addEventListener('DOMMouseScroll', scrollFunc) //火狐
		document.body.addEventListener("mousewheel", scrollFunc, { //chrome
			passive: true
		})
	} else {
		document.body.onmousewheel = scrollFunc //ie
	}

	function scrollFunc(e) {
		if (e.preventDefault) {
			return true
		} else {
			// IE
			e.returnValue = true;
		}
	}
	return this
}

//调节窗口大小
Basic.prototype.resize = function (fn) {
	window.onresize = fn;
	return this;
}

//注册事件

//几个问题
//1、多个元素注册同一个事件，会忽略前面的值留下最后一个事件？
//没有冒泡
Basic.prototype.addEvent = function (evt, fn) {
	for (var i in this.els) {
		var el = this.els[i]
		if (typeof addEventListener != "undefined") {
			el.addEventListener(evt, fn)
		} else {
			el.attachEvent("on" + evt, fn)
		}
		return this
	}
}

//盒子顶部可随鼠标移动
//需传递一个id值，这个id是要移动的元素
Basic.prototype.move = function (id) {
	for (var i in this.els) {
		var el = this.els[i]
		el.onmousedown = function (e) {
			//鼠标位置
			var x = e.pageX || e.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft)
			var y = e.pageY || e.clientX + (document.body.scrollTop || document.documentElement.scrollTop)
			//盒子位置
			var box_x = el.offsetLeft
			var box_y = el.offsetTop
			//鼠标在盒子里的位置
			var mouse_inbox_X = x - box_x
			var mouse_inbox_Y = y - box_y
			//盒子大小
			var box_sizeY = parseFloat(el.style.height || window.getComputedStyle(document.getElementById(id), null)['height'])
			var box_sizeX = parseFloat(el.style.width || window.getComputedStyle(document.getElementById(id), null)['width'])
			//页面大小
			h = document.documentElement.clientHeight || document.body.clientHeight
			w = document.documentElement.clientWidth || document.body.clientWidth
			//  ||
			function Move(e) {
				x = e.pageX || e.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft)
				y = e.pageY || e.clientX + (document.body.scrollTop || document.documentElement.scrollTop)
				var boxX = x - mouse_inbox_X
				var boxY = y - mouse_inbox_Y
				// alert(boxX)
				// && boxY + box_sizeY < h && boxX + box_sizeX < w
				if (boxX > 0 && boxY > 0 && boxY + box_sizeY < h && boxX + box_sizeX < w) {
					console.log("true")
					el.style.left = boxX + 'px'
					el.style.top = boxY + 'px'
				}
			}
			document.onmousemove = Move
			document.onmouseout = function () {
				document.onmousemove = Move
			}

		}
		el.onmouseup = function () {
			document.onmouseout = function () {
				document.onmousemove = null
			}
			document.onmousemove = null
		}
	}
	return this
}

//轮播图

// Basic.prototype.banner=function(options){
// 	options=options||{}
//	//是否添加小圆点  bool 默认true
//	//小圆点的位置  左中右 默认右
//	//小圆点的颜色
//	//小圆点的激活的颜色
//	//是否添加方向  bool 默认true
//	//图片  对象
// 	return this
// }

//设置计时器timer
//清除计时器timer
//轮播逻辑代码


/* //表单验证
Basic.prototype.form = function () {
	//创建变量，储存各控件的返回值，bool
	this.arrbool = new Array(
		this.mailbox_bool = false,
		this.nickname_bool = false,
		this.phnumber_bool = false,
		this.password1_bool = false,
		this.password2_bool = false
	)
	for (var j in this.arrbool) {
		if (this.arrbool[i] != true) {
			alert('注册失败：请完善红色方框内的信息！');
			return false;
		}
	}

}

//nick验证
Basic.prototype.isNick = function () {
	for (var i in this.els) {
		var el = this.els[i]
		var re = /尼玛|逼|日|贱|垃圾|卧槽/g;
		if (el.value.length != 0 && !re.test(el.value)) {
			el.css('borderColor', '#39e962');
			this.nickname_bool = true;
			return this
		} else {
			el.css('borderColor', 'red');
			this.nickname_bool = false;
			return this
		}
	}
}

//pwd验证
Basic.prototype.isPwd = function () {
	for (var i in this.els) {
		var el = this.els[i]
		var re = /^[a-zA-Z\d_]{6,15}$/;
		if (el.value.length != 0 && re.test(el.value)) {
			$('#password1').css('borderColor', '#39e962');
			this.password1_bool = true;
			return this
		} else {
			$('#password1').css('borderColor', 'red');
			this.password1_bool = false;
			return this
		}
	}
}

//验证确认密码
Basic.prototype.confirmPwd = function (pwd1, pwd2) {
	var password1val = $().getId(pwd1).value
	for (var i in this.els) {
		var el = this.els[i]
		var password2val = el.value
		if (password2val.length != 0 && password2val == password1val) {
			el.css('borderColor', '#39e962');
			this.password2_bool = true;
			return this
		} else {
			el.css('borderColor', 'red');
			this.password2_bool = false;
			return this
		}
	}
}

//邮箱验证
Basic.prototype.isMail = function () {

	for (var i in this.els) {
		var el = this.els[i]
		var re = /^\w+@[0-9a-z]+\.[a-z]+$/i;
		if (el.value.length != 0 && re.test(el.value)) {
			el.css('borderColor', '#39e962');
			this.mailbox_bool = true;
			return this
		} else {
			el.css('borderColor', 'red');
			this.mailbox_bool = false;
			return this
		}
	}
}

//手机号验证
Basic.prototype.isPhone = function () {
	for (var i in this.els) {
		var el = this.els[i]
		var re = /^1[34578]\d{9}$/;
		if (el.value.length != 0 && re.test(el.value)) {
			el.css('borderColor', '#39e962');
			this.phnumber_bool = true;
			return this
		} else {
			el.css('borderColor', 'red');
			this.phnumber_bool = false;
			return this
		}
	}
} */
//qq号验证
//文件上传验证
//身份证号码验证
//验证码
//json转数组

//Ajax
Basic.prototype.ajax = function (options) {
	//从对象中提取所需参数
	options = options || {}
	options.type = options.type || "get" //请求的类型
	options.timeout = options.timeout || 0 //超时时间
	var params = jsonToUrl(options.data) //用于页面传递的参数
	//创建实例、考虑兼容性
	if (window.XMLHttpRequest) {
		// 高级浏览器和ie7以上
		var xhr = new XMLHttpRequest();
	} else {
		//ie6,7,8
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}

	//发送请求
	if (options.type == "get" || options.type == "GET") {
		xhr.open("get", options.url + "?" + params, true)
		xhr.send(null)
	} else if (options.type == "post" || options.type == "POST") {
		xhr.open("post", options.url, true)
		xhr.send(params)
	}

	//请求成功的回调函数
	xhr.onreadystatechange = function () {
		if (xhr.status == 200 && xhr.readyState == 4) {
			clearTimeout(timer)
			var arr = JSON.parse(xhr.responseText) //将后台传递过来的数据作json处理
			options.success && options.success(arr);
		} else {
			options.error && options.error(xhr.status);
		}
	}
	// 超时
	if (options.timeout) {
		var timer = setTimeout(function () {
			alert("超时了");
			xhr.abort(); // 终止
		}, options.timeout);
	}

	// json转url
	function jsonToUrl(json) {
		var arr = [];
		json.t = Math.random();
		for (var name in json) {
			arr.push(name + '=' + encodeURIComponent(json[name]));
		}
		return arr.join('&');
	}
	return this
}