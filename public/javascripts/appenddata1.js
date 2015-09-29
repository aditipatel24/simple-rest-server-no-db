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


$('document').ready(function(){
	var a = $("input");
	console.log(a);
    var c = $("#myData");
    $("#add").on("click",function(){
		var x={
			Firstname: $("input[type=text]").val(),
		};
		console.log(x);
        $.ajax({
            url : "/users",
            type : "post",
            data : x,
            success : function(result){
				console.log(result);
                c.append("<li> Firstname :" +result.Firstname+"</li>");
               
            }
        });
    });
});