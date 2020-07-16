console.log("Hello! ");

// const nav = document.querySelector(".nav");

// console.log(nav);

// window.onscroll = function () {
//   var top = window.scrollY;
//   console.log(top);
//   if (top >= 40) {
//     nav.classList.add("active");
//   } else {
//     nav.classList.remove("active");
//   }
// };
//select

//click and strike
// var click= document.querySelectorAll(".todo_list li");
// var selected=false;

// for(i=0;i<click.length;i++){
//     click[i].addEventListener("click",function(){
//         if(selected){
//             this.style.color="grey";
//             this.style.textDecoration="line-through";
//         }
//         else{
//             this.style.color="black";
//             this.style.textDecoration="none";
//         }
//        selected=!selected;
//     });
// }

//click and strike
$("#lists").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//delete a todo
// var todos=document.querySelectorAll(".todo_list span");

// for(j=0;j<todos.length;j++){
//     todos[j].addEventListener("click",function(event){
        
//         event.stopPropagation();
//         this.parentElement.remove();
//         //alert("Yyayy");
//     })
// }

//delete a todo
$("#lists").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//add a new todo

 var input=document.querySelector("#kritikTodo input").addEventListener("keydown",function(e){
    if(e.keyCode===13){
        var todovalue= this.value;
        $(this).val("");
        $("#lists").append("<li><span><i class='fa fa-trash'></i></span> "+todovalue+"</li>");
        localStorage.getItem("todo","input");
    }
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
});

