var str = `
/*
 * 画一只皮卡丘给你看
 * 先画皮卡丘的眼睛
 */
.eye{
	width: 48px;
	height: 48px;
	border-radius: 50%;
	border: 2px solid #000;
	background: #2E2E2E;
	position: absolute;
	top: 0;
}
/*
 * 然后画皮卡丘的眼珠
 */
.eye::before{
	content: '';
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 2px solid #000;
	background: #fff;
	position: absolute;
	top: -2px;
	left: 4px;
}
/*
 * 皮卡丘的左眼
 */
.eye.left{
	left: 45px;
}
/*
 * 皮卡丘的右眼
 */
.eye.right{
	right: 45px;
}
/*
 * 接下来，画皮卡丘的鼻子
 */
.nose{
	width: 0;
	border-width: 10px 13px;
	border-style: solid;
	border-color: transparent;
	border-top-color: #000;
	border-radius: 10px;
	position: absolute;
	top: 24px;
	left: 50%;
	transform: translateX(-50%);
}
/*
 * 现在画皮卡丘的脸蛋
 */
.face{
	width: 66px;
	height: 66px;
	background: #f00;
	border: 2px solid #000;
	border-radius: 50%;
	position: absolute;
	top: 82px;
}
/*
 * 左脸蛋
 */
.face.left{
	left: 0;
}
/*
 * 右脸蛋
 */
.face.right{
	right: 0;
}
/*
 * 画皮卡丘的上嘴唇
 */
.upperLip{
	width: 64px;
	height: 22px;
	border-bottom: 2px solid #000;
	border-left: 2px solid #000;
	position: absolute;
	top: 50px;
	left: 50%;
	background: #FFE600;
	z-index: 1;
}
.upperLip.left{
	transform: translateX(-100%) rotate(-20deg);
	border-bottom-left-radius: 90px 30px;
}
.upperLip.right{
	border-left: none;
	transform: rotate(20deg);
	border-bottom-right-radius: 90px 30px;
	border-right: 2px solid #000;
}
/*
 * 画皮卡丘的下嘴唇
 */
.lowerLipWrapper{
	width: 180px;
	height: 130px;
	overflow: hidden;
	position: absolute;
	top: 60px;
	left: 50%;
	transform: translateX(-50%);
}
.lowerLip{
	width: 170px;
	height: 1000px;
	background: #9B000A;
	border-radius: 100px/600px;
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	overflow: hidden;
}
/*
 * 画皮卡丘的小舌头
 */
.lowerLip::after{
	content: '';
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background: #FF485F;
	position: absolute;
	left: 50%;
	bottom: -90px;
	transform: translateX(-50%);
}
/*
 * 现在，这只皮卡丘画完了，送给你
 */`

var n = 0
var id = setInterval(function(){
	n ++
	code.innerHTML = str.substring(0,n)
	code.scrollTop = code.scrollHeight
	styleTag.innerHTML = str.substring(0,n)
	if(n >= str.length){
		clearInterval(id)
	}
},10)	