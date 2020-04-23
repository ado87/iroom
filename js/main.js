// main.js

function visual_change(num) {
    alert(num);
}
function visual_change(num) {
    //  alert(num);
    $('.img img').css('display', 'none');

    // 해당 이미지만 표시
    $('.img img')
        .eq(num - 1)
        .css('display', 'block');

    // 하단 메이저 랩 업데이트
    $('#visual_pager > a').removeClass('selected');
    $('#visual_pager > a').eq(num-1).addClass('selected');
}
$(function(){
    // 비주얼 자동 재생
    var visual_count = 1; // 이미지 카운터
    setInterval(function(){
        // 이미지 변경(1,2,3)
        if(visual_count > 3) { visual_count = 1;}
        visual_change(visual_count);
        visual_count++; // 다음 이미지로
    }, 5000);

    // 비주얼 버튼 클릭
    $('#visual_pager > a').click(function(){
        // 클래스 제거(상태 초기화)
        $('#visual_pager > a').removeClass('selected');

        // 클래스 추가
        $(this).addClass('selected');

        // a태그 하이퍼링크 기본 이벤트 해제
        return false;
    });
});