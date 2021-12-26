var li = document.getElementsByTagName("li");

li[0].onclick = function() {
	$("#echarts2,#carousel").show();
	$("#echarts3").hide();
}

li[1].onclick = function() {
	$("#echarts2,#carousel").hide();
	$("#echarts3").show();
	bar1();
	echarts.init(document.getElementById("echarts3")).setOption(bar_option, true);
}

li[2].onclick = function() {
	$("#echarts2,#carousel").hide();
	$("#echarts3").show();
	bar2();
	echarts.init(document.getElementById("echarts3")).setOption(bar_option, true);
}

li[3].onclick = function() {
	$("#echarts2,#carousel").hide();
	$("#echarts3").show();
	line();
	echarts.init(document.getElementById("echarts3")).setOption(line_option, true);
}

li[4].onclick = function() {
	$("#echarts2,#carousel").hide();
	$("#echarts3").show();
	area();
	echarts.init(document.getElementById("echarts3")).setOption(area_option, true);
}

$('#answer-top').click(function(){
	$("html,body").animate({scrollTop:"0px"},800);
})
$('#answer-bottom').click(function(){
	$('html,body').animate({scrollTop:$('#bottom').offset().top}, 800);
})

var list = "";

function json() {
	let requestURL = 'json/TOP250.json';
	let request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'text';
	request.send();
	request.onload = function() {
		/*XHR对象获取到返回信息后执行*/
		if (request.status == 200) {
			/*返回状态为200，即为数据获取成功*/
			list = JSON.parse(request.responseText).list;
			var str = "";

			for (var i = 0; i < list.length; i++) {
				str += '<a target="_black" href="' + list[i]['lj'] + '"><div class="item">' +
					'<div class="id"><p>' + list[i]['id'] + '</p></div>' +
					'<img src="' + list[i]['tp'] + '" alt="" />' +
					'<div>' +
					'<p class="bj">' + list[i]['zname'] + '	' + list[i]['ename'] + '</p>' +
					'<div class="pj">' +
					'<p>' + list[i]['pj'] + '分</p>' +
					'<p>' + list[i]['pf'] + '人评价</p>' +
					'</div>' +
					'<p class="jj">' + list[i]['jj'] + '</p>' +
					'<p class="dj">' + list[i]['dj'] + '</p>' +
					'</div>' +
					'</div></a>';
			}

			for (var i = 0; i < 3; i++) {
				$('#gd').append('<a class="pic" href="' + list[i]['lj'] + '" target="_blank">' +
					'<div class="pic-div-1">' +
					'<img class="pic-img-1" src="' + list[i]['tp'] + '" />' +
					'<img class="pic-img-2" src="img/play.png" />' +
					'<div class="pic-div-2">' +
					'<p>' + list[i]['zname'] + '</p>' +
					'<p>' + list[i]['pj'] + '分</p>' +
					'<p>' + list[i]['pf'] + '评</p>' +
					'<p>' + list[i]['dj'] + '</p>' +
					'</div>' +
					'</div>' +
					'<p class="pic-name">' + list[i]['zname'] + '</p>' +
					'</a>');
			}
			$('#echarts2').html(str);
		}
	}
}

var num1 = 0;
var num2 = 3;

function before() {
	if (num1 == 0) {
		alert("没有更多了");
	} else {
		num1 -= 1;
		num2 -= 1;
		$("#gd a:last").css("transform", "translateY(-140px)");
		$("#gd a:last").fadeOut(500, function() {
			$(this).remove();
			$('#gd').prepend('<a class="pic" href="' + list[num1]['lj'] + '" target="_blank">' +
				'<div class="pic-div-1">' +
				'<img class="pic-img-1" src="' + list[num1]['tp'] + '" />' +
				'<img class="pic-img-2" src="img/play.png" />' +
				'<div class="pic-div-2">' +
				'<p>' + list[num1]['zname'] + '</p>' +
				'<p>' + list[num1]['pj'] + '分</p>' +
				'<p>' + list[num1]['pf'] + '评</p>' +
				'<p>' + list[num1]['dj'] + '</p>' +
				'</div>' +
				'</div>' +
				'<p class="pic-name">' + list[num1]['zname'] + '</p>' +
				'</a>');
		});
	}
}

function after() {
	if (num2 == 249) {
		window.clearInterval(time);
	} else {
		num1 += 1;
		num2 += 1;
		$("#gd a:first").css("transform", "translateY(-140px)");
		$("#gd a:first").fadeOut(500, function() {
			$(this).remove();
			$('#gd').append('<a class="pic" href="' + list[num2]['lj'] + '" target="_blank">' +
				'<div class="pic-div-1">' +
				'<img class="pic-img-1" src="' + list[num2]['tp'] + '" />' +
				'<img class="pic-img-2" src="img/play.png" />' +
				'<div class="pic-div-2">' +
				'<p>' + list[num2]['zname'] + '</p>' +
				'<p>' + list[num2]['pj'] + '分</p>' +
				'<p>' + list[num2]['pf'] + '评</p>' +
				'<p>' + list[num2]['dj'] + '</p>' +
				'</div>' +
				'</div>' +
				'<p class="pic-name">' + list[num2]['zname'] + '</p>' +
				'</a>');
		});
	}
}
$("#left").click(function() {
	before();
});
$("#right").click(function() {
	after();
});
var time = setInterval(after, 3000);
