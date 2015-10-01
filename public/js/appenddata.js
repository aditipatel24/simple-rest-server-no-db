//by id append

/*$('document').ready(function(){
		//$('.btn').button();
		$('#add').on("click",function(){
			var a=$(this);
			console.log(a);
			var ad=$('#additem').val();
			console.log(ad);
			$('p').append($('#additem').val());
			$('p').append("<br/>"+$('#desc').val());
			$('#k').append($('#price').val())
		});
});*/

//by jumbtron append 
/*$('document').ready(function(){
		//$('.btn').button();
		$('#add').on("click",function(){
			var a=$(this);
			console.log(a);
			var ad=$('#additem').val();
			console.log($("#new"));
			var aa=a.find('#new');
			console.log(aa);
			$('.jumbotron').prepend("<p>"+ad+"</p>");
			$('.jumbotron').prepend("<p>"+$('#desc').val()+"</p>");
			$('#k').append($('#price').val());
		});
});*/


$(document).ready(function(){
    var a = $("input");
    var b = $("#myDiv");
    var c = $("#myData");
    var x = {};
    console.log(a);
    $("#mySave").on("click",function(){
        console.log(a);
        $("input").each(function(i){
            x[$(a[i]).attr("name")]= $(a[i]).val();
            $(a[i]).val("");
        });
        $.ajax({
            url : "/users",
            type : "post",
            data : x,
            success : function(result){
            //    c.append("<table border="1"></table>")
                c.append("<li> Firstname :" +result.Firstname+"</li>");
                c.append("<li> Lastname :" +result.Lastname+"</li>");
                c.append("<li> Address :" +result.Address+"</li>");
                c.append("<li> Cellno :" +result.Cellno+"</li>");
                c.append("<br>");
               
                }
        });
    });
})