window.onload= function(){

    let button= document.getElementById("btn");
    let result = document.getElementById("result")
    let searchAct = document.getElementById("search");

    button.addEventListener("click", function(e){
        
        httpReq= new XMLHttpRequest();
        var url ="http://localhost/info2180-lab4/superheroes.php?query="+searchAct.value+"";
        httpReq.open('GET',url);
        httpReq.send();
        httpReq.onreadystatechange= response;
    });

    function response(){
        if(httpReq.readyState=== XMLHttpRequest.DONE){
            if(httpReq.status===200){
                result.innerHTML=httpReq.responseText;
            }   else{
                alert('There was an Error')
                }
            }
            
    }
}
