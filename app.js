document.querySelector("body").style.backgroundColor="#94bfac";


var arr=["About","Gallary","Details"];
var arr2=["#section-1","#section-2","#section-3"];
var arr4=["nav-1","nav-2","nav-3"];
function arrToUl(){
    var ul=document.createElement("ul");
 for(var i in arr,arr2,arr4)
 {
    var li=document.createElement("li");
    li.setAttribute("id",arr4[i]);
    var a=document.createElement("a");
    a.href=arr2[i];
    li.appendChild(a).style.textDecoration="none";
    li.appendChild(a).style.color="white";
    a.appendChild(document.createTextNode(arr[i]));
    ul.appendChild(li).style.border="1px solid white";
    ul.appendChild(li).style.fontSize="large";
    ul.appendChild(li).style.fontFamily="Arial, Helvetica, sans-serif";
    ul.appendChild(li).style.display="inline";
    ul.appendChild(li).style.padding="20px";
 }
 return ul;
}

function slider(){
   //JSON
   var dImg_1={"details":"26.00$ (50% offer) white floral shirred tiered skater dress"};
   var dImg_2={"details":"21.00$ (50% offer) red floral print puff sleeve midaxi dress"};
   var dImg_3={"details":"14.00$ (50% offer) pink floral print ruched bust milkmaid dress"};
   var dImg_4={"details":"25.00$ (50% offer) blush floral print split hem midi dress"};
   var dImg_5={"details":"26.00$ (50% offer) green printed midi wrap dress"};
   var dImg_6={"details":"26.00$ (50% offer) red floral frill waist v neck smock dress"};
   var dImg_7={"details":"37.00$ (50% offer) taupe mesh rushed puff sleeve mini dress"};
   var dImg_8={"details":"22.0$ (50% offer) tail brown animal print milkmaid midaxi dress"};
   var obj=[ dImg_1, dImg_2, dImg_3, dImg_4, dImg_5, dImg_6, dImg_7, dImg_8];

   var arr3=["./images/IMG_20210818_1.jpg","./images/IMG_20210818_2.jpg"
   ,"./images/IMG_20210818_3.jpg","./images/IMG_20210818_4.jpg","./images/IMG_20210818_5.jpg"
    ,"./images/IMG_20210818_6.jpg","./images/IMG_20210818_7.jpg","./images/IMG_20210818_8.jpg"];

    var arr5=["IMG-1","IMG-2","IMG-3","IMG-4","IMG-5","IMG-6","IMG-7","IMG-8"];

    var imgg= document.createElement("img");
    var text;
   for(var j in arr3,arr5,obj)
   {
       var interval= setInterval(function(){
         imgg.src=arr3[j];
         imgg.setAttribute("id",arr5[j]);
         text=document.createTextNode(obj[j].details);
         imgg.addEventListener("click",function()
         {
            clearInterval(interval);
            document.getElementById("DETAILS").appendChild(text);
         })
         imgg.setAttribute("width","400px");
         imgg.setAttribute("height","600px");
         
         if(j==(arr3.length)-1)
         {
            j=0;
         }
         j++;
      }
      ,5000);
      document.getElementById("gallary").appendChild(imgg);
   }
}
 document.getElementById("DIV").appendChild(arrToUl(arr,arr2,arr4));

 if(document.getElementById("nav-1").addEventListener("click",function(){
   document.getElementById("nav-1").classList.add("myStyle");
   document.getElementById("nav-2").classList.remove("myStyle");
   document.getElementById("nav-3").classList.remove("myStyle");
   
 })){

 }

 else if(document.getElementById("nav-2").addEventListener("click",function(){
   document.getElementById("nav-2").classList.add("myStyle");
   document.getElementById("nav-1").classList.remove("myStyle");
   document.getElementById("nav-3").classList.remove("myStyle");
   slider(); 
 }))
 {

 }

 else if(document.getElementById("nav-3").addEventListener("click",function(){
   document.getElementById("nav-3").classList.add("myStyle");
   document.getElementById("nav-1").classList.remove("myStyle");
   document.getElementById("nav-2").classList.remove("myStyle");
 })){
   
 }

 document.getElementById("DIV").style.display="inline-block";
 document.getElementById("DIV").style.position="fixed";
 document.getElementById("DIV").style.marginTop="-4px";
 document.getElementById("DIV").style.width="100%";
 document.getElementById("DIV").style.height="60px";
 document.getElementById("DIV").style.backgroundColor="black";
 document.body.style.margin="0px";
 document.body.style.padding="0px";

document.getElementById("section-1").style.marginLeft="40px";
document.getElementById("section-2").style.marginLeft="40px";
document.getElementById("section-3").style.marginLeft="40px";
document.getElementById("hrr-1").style="width:55%;";
document.getElementById("hrr-1").style.marginLeft="-2px";
document.getElementById("hrr-2").style="width:55%";
document.getElementById("hrr-2").style.marginLeft="-2px";
document.getElementById("hrr-3").style="width:55%";
document.getElementById("hrr-3").style.marginLeft="-2px";
document.getElementById("p").style.fontSize="large";




