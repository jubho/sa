$(document).ready(function(){
	
	//상단메뉴 마우스오버시_ 각항목별 하위메뉴 슬라이드
	$(".mainMenu").mouseenter(function(){
		$(".mainMenu").removeClass("active");
		//위로 서서히 올라간 후 {display:none;}
		$(".subMenu").stop().slideUp();
		//그것(마우스갖대댄거)의 다음요소
		$(this).next(".subMenu").stop().
		slideDown();
	});
	/*하위메뉴에 마우스 갖다댈때_ 메인메뉴 활성유지 */
	$(".subMenu").mouseenter(function(){
		$(this).prev().addClass("active");
		
	});
	/*하위메뉴 마우스아웃시_ 올라간다*/
	$("header>nav").mouseleave(function(){
		$(".mainMenu").removeClass("active");
		$(".subMenu").stop().slideUp();
	});
	
	
//왼쪽방향 자동 슬라이드
	setInterval(leftMove, 2000);
	function leftMove(){
		$("#sliding div").stop().animate({left:"-1100px"}, 1000,function(){
			$(this).append( $(this).children().first() );
			$(this).css("left" , 0);
		});		
	}
	
	
	
	
	
	
	
	
});