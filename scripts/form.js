function check() {
	form = document.getElementsByTagName("form");
	username = form[0].username.value;
	var usnpatten = new RegExp(/^[0-9|a-z|A-Z]{6,8}$/);
	password = form[0].password.value;	
	var pswpatten = new RegExp(/^[0-9|a-z|A-Z]{8,12}$/);
	var space = new RegExp(/^[ ]+$/);	
	if( !usnpatten.test(username) )
	  alert("用户名格式不正确！");
	if( !pswpatten.test(password) )
	  alert("密码格式不正确！");	
	if( form[0].repassword ){
		repassword = form[0].repassword.value;
		if ( repassword == null || repassword == "" || space.test(repassword) )
		  alert("请输入确认密码！");
		else if( repassword != password )
		  alert("与输入密码不同！");
	}
	if( form[0].nickname ){
		nickname = form[0].nickname.value;
		if( getBytesLength(nickname)<1 || getBytesLength(nickname) >10 )
		  alert("昵称格式不正确！");
	}
	if( form[0].pswquestion ){
		question = form[0].pswquestion;
		index = question.selectedIndex;
		pswquestion = question[index].value;
		var pwqpatten = new RegExp(/^[1-4]{1}$/);
		if( !pwqpatten.test(pswquestion) )
		  alert("请选择密保问题!");
	}
	if( form[0].pswanswer ){
		pswanswer = form[0].pswanswer.value;
		if( pswanswer == null || pswanswer == "" || space.test(pswanswer) )
		  alert("密保答案不能为空！");
	}
}


function getBytesLength(str) {
  return str.replace(/[^\x00-\xff]/g, 'xx').length;
}