$('document').ready(function(e){
	function dispalyitem(e)
	{
	//get all data from server
		 $.ajax({
					   url: "/products",
					   dataType: "json",
					   type: "get",
					  
					   success:function(alldata)
					   {		var res=alldata;
								var i;
								var template = Handlebars.compile( $('#add_template').html());
								console.log(template);
								console.log(res);
						        $('div.page').append(template(alldata));
						  
				       }
			   });
	};
	dispalyitem(e);
	
	//append data on current page
	
    $("#add").on('click',function(e){
		e.preventDefault();
		
		var	itmname= $("#additem").val();
		var	itmdesc= $("#description").val();
		var	itmprice= $("#price").val();
			
		
		if( itmname == "" || itmdesc == "" || itmprice == "")
		{
			$('.error').fadeOut(1000).show();
		}
		else
		{
			$.ajax({
            url : "/products",
            type : "post",			
            data : {itmname,itmdesc,itmprice},
			success : function(result){
				var template = Handlebars.compile( $('#add_template').html() );
				$('div.page').append(template([result]));
				$("#additem").val("");
				$("#description").val("");
				$("#price").val("");
            }
			});
		}
    });
	
	//delete data
	$(".page").on('click','.glyphicon',function(e){
		var con=confirm("are you sure you want to delete???");
		if(con === true)
		{
			var deleteitem=$(this).prop('id');
			console.log(deleteitem);
			var deleteitem2=$(this).closest('div.alert');
			console.log(deleteitem2);
			$.ajax({
				url : '/products/'+deleteitem,
				type : "DELETE",
				data : {"id":deleteitem},
				success : function(){
					console.log($(this));
					deleteitem2.remove();				
				}
			});
		}
        
    });
});