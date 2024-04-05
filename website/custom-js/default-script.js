$.ajaxSetup({
	headers:{
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    },
	type: "POST",
	dataType: "json"
});


/***************** Show Error *************/
function showErrors(error, that) {

    let data = JSON.parse(error.responseText);

    if (data.errors != undefined) {

        Object.entries(data.errors).forEach((val, index) => {

            $(`span.${val[0]}`).show();
            $(`span.${val[0]}`).html(val[1][0]);

        });

    }

    // showAlertMessage(data.message);

}


$(document).ready(function(){
    $(`input`).focus(function(event){

        if($(`span.${event.target.name}`)){
            $(`span.${event.target.name}`).html(``);
            $(`span.${event.target.name}`).hide();
        }

    });

});
