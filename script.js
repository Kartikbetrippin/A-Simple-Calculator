var display=0;
var displayNumPrev=0;
var op='';

$(".btn").on("mouseenter", function(){
$(this).addClass("hover");
});
$(".btn").on("mousedown", function(){
    let num=parseInt(this.innerHTML);
    $(this).addClass("pressed");
    if($(this).hasClass("operator"))
    {
        
        console.log("prev="+displayNumPrev);
        console.log(this.innerHTML);
        operatorHandling(this.innerHTML);
    }
    else{
        if(display<99999999999 && display>-99999999999){
                display=(display*10)+num;
                console.log("display="+display);
                $(".display>p").html(display.toString());
            }
        }
    }
);

 $(".btn").on("mouseup", function(){
    $(this).removeClass("pressed");
});
$(".btn").on("mouseleave", function(){
    $(this).removeClass("hover");
});

function operatorHandling(input){


switch(input){
    
 case 'C':{
    display=0;
    displayNumPrev=0
    $(".display>p").html("0");
    $(".memdisplay>p").html("0");

}
break;
case '←':{
    display/=10;
    display=Math.floor(display);
    $(".display>p").html(display.toString());

}
 break;
 case'+':{
    displayNumPrev=display;
    $("#add").off("mouseup");
    $(".memdisplay>p").html(display.toString());
    display=0;
    $(".display>p").html(display.toString());
    $(".operator:not(.leave)").prop("disabled", true); 
    op='+';
 }
 break;

 case'×':{
    displayNumPrev=display;
    $("#multiply").off("mouseup");
    $(".memdisplay>p").html(display.toString());
    display=0;
    $(".display>p").html(display.toString());
    $(".operator:not(.leave)").prop("disabled", true); 
    op='×';
 }
 break;

 case '−':{
    {
        displayNumPrev=display;
        $("#subtract").off("mouseup");
        console.log("pahoch gaya hu idhar");
        $(".memdisplay>p").html(display.toString());
        display=0;
        $(".display>p").html(display.toString());
        $(".operator:not(.leave)").prop("disabled", true); 
        op='−';
     }

 }
 break;
 case '÷':{
    {
        displayNumPrev=display;
        $("#divide").off("mouseup");
        console.log("pahoch gaya hu idhar");
        $(".memdisplay>p").html(display.toString());
        display=0;
        $(".display>p").html(display.toString());
        $(".operator:not(.leave)").prop("disabled", true); 
        op='÷';
     }

 }
 break;
 case '=':{

    switch(op){

        case '+':{
            $("#add").removeClass("pressed");
            display=display+displayNumPrev;
            if(display<99999999999 && display>-99999999999){
            $(".display>p").html(display.toString());
            $(".operator:not(.leave)").prop("disabled", false); 
            op='';
            }else{
                display=0;
                displayNumPrev=0;
                $(".display>p").html("out of bounds");
                setTimeout(() => {
                    $(".display>p").html("0");
                    $(".memdisplay>p").html("0");
                }, 1000);
                $(".operator:not(.leave)").prop("disabled", false); 
               return;
               
                }
        }
        break;
        case '−':{
            $("#subtract").removeClass("pressed");
            display=displayNumPrev-display;
            if(display<99999999999 && display>-99999999999){
            $(".display>p").html(display.toString());
            $(".operator:not(.leave)").prop("disabled", false); 
            op='';
            }else{
                display=0;
                displayNumPrev=0;
                $(".display>p").html("out of bounds");
                setTimeout(() => {
                    $(".display>p").html("0");
                    $(".memdisplay>p").html("0");
                }, 1000);
                $(".operator:not(.leave)").prop("disabled", false); 
               return;
            }
        }
        break;
        case '×':{
            $("#multiply").removeClass("pressed");
            display=display*displayNumPrev;
            if(display<99999999999 && display>-99999999999){
            $(".display>p").html(display.toString());
            $(".operator:not(.leave)").prop("disabled", false); 
            op='';
            }else{
                display=0;
                displayNumPrev=0;
                $(".display>p").html("out of bounds");
                setTimeout(() => {
                    $(".display>p").html("0");
                    $(".memdisplay>p").html("0");
                }, 1000);
                $(".operator:not(.leave)").prop("disabled", false); 
               return;
            }
        }
        break;
        case '÷':{
            $("#divide").removeClass("pressed");
            display=Math.floor(displayNumPrev/display);
            if(display<99999999999 && display>-99999999999){
            $(".display>p").html(display.toString());
            $(".operator:not(.leave)").prop("disabled", false); 
            op='';
            }else{
                display=0;
                displayNumPrev=0;
                $(".display>p").html("out of bounds");
                setTimeout(() => {
                    $(".display>p").html("0");
                    $(".memdisplay>p").html("0");
                }, 1000);
                $(".operator:not(.leave)").prop("disabled", false); 
               return;
            }
        }
    }
    $(".btn").removeClass("pressed");
    
 }
 break;
}
}