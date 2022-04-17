// tag inside tag

// $(document).ready(()=>{
//     $("ul li").click(()=>{
//         console.log("you click inside the ul list item")
//     })
// })

// multiple tags
// $(document).ready(()=>{
//     $("div,ul").click(()=>{
//         console.log("you click inside div or ul")
//     })
// })

// pseudo class
 $("li:even").click(()=>{
     console.log("hello")
 })
//  simiarly we xan also give li:odd


// we can also do li:first,li:last