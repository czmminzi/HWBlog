function check() {
	form = document.getElementsByTagName("form");
	username = form[0].username.value;
	var usnpatten = new RegExp(/^[0-9|a-z|A-Z]{6,8}$/);
	password = form[0].password.value;	
	var pswpatten = new RegExp(/^[0-9|a-z|A-Z]{8,12}$/);
	var space = new RegExp(/^[ ]+$/);	
	if( !usnpatten.test(username) )
	  alert("�û�����ʽ����ȷ��");
	if( !pswpatten.test(password) )
	  alert("�����ʽ����ȷ��");	
	if( form[0].repassword ){
		repassword = form[0].repassword.value;
		if ( repassword == null || repassword == "" || space.test(repassword) )
		  alert("������ȷ�����룡");
		else if( repassword != password )
		  alert("���������벻ͬ��");
	}
	if( form[0].nickname ){
		nickname = form[0].nickname.value;
		if( getBytesLength(nickname)<1 || getBytesLength(nickname) >10 )
		  alert("�ǳƸ�ʽ����ȷ��");
	}
	if( form[0].pswquestion ){
		question = form[0].pswquestion;
		index = question.selectedIndex;
		pswquestion = question[index].value;
		var pwqpatten = new RegExp(/^[1-4]{1}$/);
		if( !pwqpatten.test(pswquestion) )
		  alert("��ѡ���ܱ�����!");
	}
	if( form[0].pswanswer ){
		pswanswer = form[0].pswanswer.value;
		if( pswanswer == null || pswanswer == "" || space.test(pswanswer) )
		  alert("�ܱ��𰸲���Ϊ�գ�");
	}
}


function getBytesLength(str) {
  return str.replace(/[^\x00-\xff]/g, 'xx').length;
}