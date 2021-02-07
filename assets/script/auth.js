$('.login-btn').click(function (e) {
    e.preventDefault();

    let login = $('input[name="username"]').val(),
        password = $('input[name="password"]').val();

    $.ajax({
        url: '../../php/signin.php',
        type: 'POST',
        dataType: 'json',
        data: {
            login: login,
            password: password
        },
        success (data) {

            if (data.status) {
                document.location.href = '/profile.php';
            } else {
                if (data.type === 1) {
                    data.fields.forEach(function (field) {
                        $(`input[name="${field}"]`).addClass('error');
                    });
                }
            }

        }
    });
});