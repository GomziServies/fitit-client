//Auth Checking
if (localStorage.getItem("authorization")) {
    if (localStorage.getItem("authorization") == null) {
        window.location.href = 'login.html'
    }

    $.get({
        url: `${BASE_URL}/get-profile`,
        dataType: 'json',
        headers: {
            "authorization": `${localStorage.getItem("authorization")}`,
        },
        success: (result) => {
            var result = result.data;
            localStorage.setItem('access_list', JSON.stringify(result.access_list));
            localStorage.setItem('type', JSON.stringify(result.type));

            $("#lbl_profileName").html(result.full_name)
            $("#img_admin_profile_image").html(result.profile_image)
        },
        error: (error) => {
            if (error.responseJSON) {
                if (error.responseJSON.status == 401)
                    toastrError('Error', 'Please login again');
            }
            return logout();
        }
    });
} else {
    window.location.href = 'login.html'
}


//Logout
function logout() {
    localStorage.removeItem("authorization");
    localStorage.removeItem("access_list");
    localStorage.removeItem("type");
    window.location.reload();
}