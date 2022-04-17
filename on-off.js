$(document).ready(()=>{
    $("#aman1").on('click',function(){
        $(this).css('color','green')
    })
    $("#aman1").dblclick(()=>{
        $("#aman1").off("click")
    })
   
      

})