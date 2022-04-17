// $(document).ready(()=>{
//     $("#suk1").click(()=>{
//        let a= $("#aman4").parent();
//        console.log(a);
//     })
// })

// i can give parents

// $(document).ready(()=>{
//     $("#suk1").click(()=>{  
//         // $("#aman4").parents("#aman2").css("background",'red');
//         console.log( $("#aman4").parents("#aman2"))
//     })
// })

// $(document).ready(()=>{
//     $("#suk1").click(()=>{
//         $("#aman4").parentsUntil("#aman1").css("background",'red')
//     })
// })


// closest div

// $(document).ready(()=>{
//         $("#suk1").click(()=>{
//             $("#aman4").closest("div").css("background",'red')
//         })
//     })

// offsetParent
$(document).ready(()=>{
        $("#suk1").click(()=>{
            $("#aman4").offsetParent("#aman1").css("background",'red')
        })
    })