$(function(){
    // 비주얼 버튼 클릭
    $('#sub > ul > li').click(function(){
        // 클래스 제거(상태 초기화)
        $('#sub > ul > li').removeClass('selected');

        // 클래스 추가
        $(this).addClass('selected');

        return false;
    });
});