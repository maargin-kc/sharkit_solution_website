if(document.querySelector(`form#seo-package-form`)){

    document.querySelector(`form#seo-package-form`).addEventListener(`submit`, function(event){

        event.preventDefault();

        const form = $(this);
        const button = $(`button#seo-package-button`);

        button.attr(`disabled`, true);
        button.html(`. . .`);

        $.ajax({
            url: `/ajax/seo-subscription`,
            data: form.serialize(),
        })
        .done(function(response){

            if(response.success){ 
                form[0].reset(); 
                window.location = "/online-payment";
            }

            button.attr(`disabled`, false);
            button.html(`Pay Now`);


        })
        .fail(function(error){

            showErrors(error);
            button.attr(`disabled`, false);
            button.html(`Pay Now`);

        });

    });
    
}



if(document.querySelector(`form#social-media-package-form`)){

    document.querySelector(`form#social-media-package-form`).addEventListener(`submit`, function(event){

        event.preventDefault();

        const form = $(this);
        const button = $(`button#social-media-package-button`);

        button.attr(`disabled`, true);
        button.html(`. . .`);

        $.ajax({
            url: `/ajax/social-media-subscription`,
            data: form.serialize(),
        })
        .done(function(response){

            if(response.success){ 
                form[0].reset(); 
                window.location = "/online-payment";
            }

            button.attr(`disabled`, false);
            button.html(`Pay Now`);


        })
        .fail(function(error){

            showErrors(error);
            button.attr(`disabled`, false);
            button.html(`Pay Now`);

        });

    });

}



if(document.querySelector(`form#seo-custom-package-form`)){

    document.querySelector(`form#seo-custom-package-form`).addEventListener(`submit`, function(event){

        event.preventDefault();

        const form = $(this);
        const button = $(`button#seo-custom-package-button`);

        button.attr(`disabled`, true);
        button.html(`. . .`);

        $.ajax({
            url: `/ajax/custom-package`,
            data: form.serialize(),
        })
        .done(function(response){

            if(response.success){

                form[0].reset(); 

                $(`div#alert-message`)
                .html(`<div class="alert alert-info alert-dismissible fade show" role="alert">
                        <span>${response.message}</span>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`);

            }

            button.attr(`disabled`, false);
            button.html(`Submit`);


        })
        .fail(function(error){

            showErrors(error);
            button.attr(`disabled`, false);
            button.html(`Submit`);

        });

    });

}


if(document.querySelector(`form#social-media-custom-package-form`)){

    document.querySelector(`form#social-media-custom-package-form`).addEventListener(`submit`, function(event){

        event.preventDefault();

        const form      = $(this);
        const button    = $(`button#social-media-custom-package-button`);

        button.attr(`disabled`, true);
        button.html(`. . .`);

        $.ajax({
            url: `/ajax/custom-package`,
            data: form.serialize(),
        })
        .done(function(response){

            if(response.success){

                form[0].reset(); 

                $(`div#alert-message`)
                .html(`<div class="alert alert-info alert-dismissible fade show" role="alert">
                        <span>${response.message}</span>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`);

            }

            button.attr(`disabled`, false);
            button.html(`Submit`);


        })
        .fail(function(error){

            showErrors(error);
            button.attr(`disabled`, false);
            button.html(`Submit`);

        });

    });

}


if(document.querySelector(`form#seo-premium-plus-package-form`)){

    document.querySelector(`form#seo-premium-plus-package-form`).addEventListener(`submit`, function(event){

        event.preventDefault();

        const form      = $(this);
        const button    = $(`button#seo-premium-plus-package-button`);

        button.attr(`disabled`, true);
        button.html(`. . .`);

        $.ajax({
            url: `/ajax/disucss-project`,
            data: form.serialize(),
        })
        .done(function(response){

            if(response.success){

                form[0].reset(); 

                $(`div#alert-message-seo-premium`)
                .html(`<div class="alert alert-info alert-dismissible fade show" role="alert">
                        <span>${response.message}</span>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`);

            }

            button.attr(`disabled`, false);
            button.html(`Submit`);


        })
        .fail(function(error){

            showErrors(error);
            button.attr(`disabled`, false);
            button.html(`Submit`);

        });

    });

}