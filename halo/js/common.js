//include 
$(document).ready(function() {
	$("#header").load("/halo/inc_header.htm");
	$("#settingTabMenu").load("/halo/inc_settingTabMenu.htm");

});


// graph cylinder에서 현재값이 임계치를 넘으면 녹색에서 빨간색으로 변경
$(document).ready(function() {
	thresholdColor();
});
function thresholdColor() {
	$('.cylinder .currentBar').each( (idx,obj) => {
		if( $(obj).width() >= $(obj).parent().children('.threshold').width() ){
			$(obj).addClass('overThreshold');
			$(obj).parent().parent().parent().addClass('warning');
		}else {
			$(obj).removeClass('overThreshold');
		}
	});
};


// input type file custom
$(document).ready(function(){
	var fileTarget = $('#file');  
	fileTarget.on('change', function(){  // 값이 변경되면
		if(window.FileReader){  // modern browser
		var filename = $(this)[0].files[0].name;
		} 
		else {  // old IE
		var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
		}      
		// 추출한 파일명 삽입
		$(this).siblings('.upload-name').val(filename);
	});
}); 


// 로그인 페이지 tab
// function fn_tabOpen(id,t){
// 	$(t).parent().children().removeClass("active");
// 	$(t).addClass("active");
// 	$("#"+id).parent().children().removeClass("open").addClass("close");
// 	$("#"+id).removeClass("close").addClass("open");
// };

// 모달창 X  버튼으로 닫기
$(function(){ 
    $(".modal .xBtn, .modal .close").click(function(){
        $(".modal").hide();
    });
});


// form select  ui
$(document).ready(function(){ 
    var select = $('.selectDiv select');
    select.change(function(){
        var select_name = $(this).children('option:selected').text();
        $(this).siblings("label").text(select_name);
    });
});



