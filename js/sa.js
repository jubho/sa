$(document).ready(function(){
	
	//��ܸ޴� ���콺������_ ���׸� �����޴� �����̵�
	$(".mainMenu").mouseenter(function(){
		$(".mainMenu").removeClass("active");
		//���� ������ �ö� �� {display:none;}
		$(".subMenu").stop().slideUp();
		//�װ�(���콺������)�� �������
		$(this).next(".subMenu").stop().
		slideDown();
	});
	/*�����޴��� ���콺 ���ٴ_ ���θ޴� Ȱ������ */
	$(".subMenu").mouseenter(function(){
		$(this).prev().addClass("active");
		
	});
	/*�����޴� ���콺�ƿ���_ �ö󰣴�*/
	$("header>nav").mouseleave(function(){
		$(".mainMenu").removeClass("active");
		$(".subMenu").stop().slideUp();
	});
	
	
//���ʹ��� �ڵ� �����̵�
	setInterval(leftMove, 2000);
	function leftMove(){
		$("#sliding div").stop().animate({left:"-1100px"}, 1000,function(){
			$(this).append( $(this).children().first() );
			$(this).css("left" , 0);
		});		
	}
	
	
	
	
	
	
	
	
});