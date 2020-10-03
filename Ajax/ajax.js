//封装Ajax
/* 1、需要的参数：请求方式，url，是否异步、超时时间、数据类型
 * 2、传参使用对象进行传参
 * 3、解析对象，将所需的参数提取出来
 */
function ajax(options) {
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
}