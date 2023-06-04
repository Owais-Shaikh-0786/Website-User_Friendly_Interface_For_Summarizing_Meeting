$(document).ready(function(){
    $(".op_set_1").click(function(){
      $("#uploadFile").click()
    });

    $('#uploadFile').bind('change', function() {

        if(this.files[0].size > 100000000) {
            alert("Please upload file less than 100MB. Thanks!!");
            $(this).val('');
        } else {
            var fileName = $(this).val().split("\\").pop();
            $('.name_1').text(fileName);

            var file = this.files[0];
            var fileSize = file.size / 1024 / 1024;
            fileSize = parseFloat(fileSize.toFixed(2));
            $('.file_desc').text(fileSize + 'MB');

            $('.file-upload-next-btn').prop('disabled', false);
        }
      
    });

    $('.file-upload-next-btn').on('click', function() {
        window.location.href = "./modal.html";
    });


});