$(function(){
    var index=0;
    var auto;
    var sw=false;
    moveSlider(index);
    autoSlider();
    $('.control_button').click(function(){
        index=$(this).index();
        moveSlider(index);
    });
    $('.left_control').click(function(){    
        index--;
        moveSlider(index);
    });
  
    $('.right_control').click(function(){
        index++;
        moveSlider(index);
    });
 
    function moveSlider(index){
        
        $('.slider_panel').animate({
            left:-(index*1080)
        },'slow');
        $('.control_button').removeClass('active');
        $('.control_button').eq(index).addClass('active');
    }
    //자동 이미지 슬라이드 함수
    function autoSlider(){
        auto=setInterval(function(){
            if(index<3 && sw==false){
                $('.right_control').trigger('click');
            }else{
                sw=true; 
            }if(index > 0 && sw==true){
                $('.left_control').trigger('click');
            }else{
                sw=false;
            }
        },5000)
    };
});
    //체크박스 함수
    $(function(){
        $('#checkAll').click(function(){
            if($('#checkAll').prop('checked')){
                $('#join2 input[type=checkbox]').prop('checked',true);
            }else{
                $('#join2 input[type=checkbox]').prop('checked',false);
            }
        });
        $('#agreeEssYn1').click(function(){
            if($('input[name=agreeEssYn1]:checked').length==4){
                $('#checkAll').prop('checked',true);
            }else{
                $('#checkAll').prop('checked',false);
            }
        });
        $('#agreeEssYn2').click(function(){
            if($('input[name=agreeEssYn1]:checked').length==4){
                $('#checkAll').prop('checked',true);
            }else{
                $('#checkAll').prop('checked',false);
            }
        });
        $('#agreeEssYn3').click(function(){
            if($('input[name=agreeEssYn1]:checked').length==4){
                $('#checkAll').prop('checked',true);
            }else{
                $('#checkAll').prop('checked',false);
            }
        });
        $('#agreeEssYn4').click(function(){
            if($('input[name=agreeEssYn1]:checked').length==4){
                $('#checkAll').prop('checked',true);
            }else{
                $('#checkAll').prop('checked',false);
            }
        });
    });
    //약관 펼쳐보기
    $(function(){
        $('.arr1').click(function(){
            $('.serviceUsemore1').slideToggle('fast');
        });
      });
      $(function (){
        $('.arr2').click(function(){
            $('.serviceUsemore2').slideToggle('fast');
        });
      });
      $(function(){
        $('.arr3').click(function(){
            $('.serviceUsemore3').slideToggle('fast');
        });
      });
      $(function(){
        $('.arr4').click(function(){
            $('.serviceUsemore4').slideToggle('fast');
        });
      });
      $(function(){
            $('select[name=sel_email1Address3]').change(function(){
                if($(this).val()=="99"){
                    $('#email1Address3').val("");
                    $("#email1Address3").attr("readonly", false);
                } 
                    else {
                        $('#email1Address3').val($(this).val());
                        $("#email1Address3").attr("readonly", true);
                    }
                });
            });
    

      //게시판 스위칭
      $(function(){
        $('.notbtn').click(function(){
             $('.del2').hide();
             $('.del').show();
        });
        $('.notbtn2').click(function(){
             $('.del2').show();
             $('.del').hide();
        });
    });
    
     