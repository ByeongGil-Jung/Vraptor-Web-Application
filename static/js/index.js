window.onload = function () {
    $('.nodes_temp').hide();
    $('.nodes_status').hide();

    $('.node_1_on').hide();
    $('.node_1_off').hide();

    $('.node222').hide();


};

function node_change() {
    $(document).ready(function () {
        $('.node111').hide();
        $('.node222').show();
    });
}

function node_change2() {
    $(document).ready(function () {
        $('.node222').hide();
        $('.node111').show();
    });
}

function console_click(){
    $('.btn-example').click(function () {
        var $href = $(this).attr('href');
        layer_popup($href);
    });
}

function layer_popup(el) {

    let $el = $(el);        //레이어의 id를 $el 변수에 저장
    let isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

    isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

    let $elWidth = ~~($el.outerWidth()),
        $elHeight = ~~($el.outerHeight()),
        docWidth = $(document).width(),
        docHeight = $(document).height();

    // 화면의 중앙에 레이어를 띄운다.
    if ($elHeight < docHeight || $elWidth < docWidth) {
        $el.css({
            marginTop: -$elHeight / 2,
            marginLeft: -$elWidth / 2
        })
    } else {
        $el.css({ top: 0, left: 0 });
    }

    $el.find('a.btn-layerClose').click(function () {
        isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
        return false;
    });

    $('.layer .dimBg').click(function () {
        $('.dim-layer').fadeOut();
        return false;
    });

}

$('.example-default-value').each(function() {
    let default_value = this.value;
    $(this).focus(function() {
        if(this.value == default_value) {
            this.value = '';
        }
    });
    $(this).blur(function() {
        if(this.value == '') {
            this.value = default_value;
        }
    });
});

let input = document.getElementById("example-textarea");
if (input) {
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("#myBtn").click();
        }
    });
}
