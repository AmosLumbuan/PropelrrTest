$(document).ready(function () {
    $("form").submit(function (event) {
        $(".form-group").removeClass("has-error");
        $(".help-block").remove();
        var formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            mobileNo: $("#mobileNo").val(),
            birthdate: $("#birthdate").val(),
            gender: $("#gender").val(),
        };
    
        $.ajax({
            type: "POST",
            url: "backend.php",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data) {
            console.log(data);
            
            if (!data.success) {
                if (data.errors.name) {
                $("#name-group").addClass("has-error");
                $("#name-group").append(
                    '<div class="help-block">' + data.errors.name + "</div>"
                );
                }
        
                if (data.errors.email) {
                $("#email-group").addClass("has-error");
                $("#email-group").append(
                    '<div class="help-block">' + data.errors.email + "</div>"
                );
                }

                if (data.errors.mobileNo) {
                $("#email-group").addClass("has-error");
                $("#email-group").append(
                    '<div class="help-block">' + data.errors.mobileNo + "</div>"
                );
                }
        
                if (data.errors.birthdate) {
                $("#birthdate-group").addClass("has-error");
                $("#birthdate-group").append(
                    '<div class="help-block">' + data.errors.birthdate + "</div>"
                );
                }

                if (data.errors.gender) {
                    $("#gender-group").addClass("has-error");
                    $("#gender-group").append(
                        '<div class="help-block">' + data.errors.gender + "</div>"
                    );
                }
            } else {
                $("form").html(
                '<div class="alert alert-success">' + data.message + "</div>"
                );
            }
            
        })
        .fail(function (data) {
            $("form").html(
              '<div class="alert alert-danger">Could not reach server, please try again later.</div>'
            );
          });
    
        event.preventDefault();
    });
  });