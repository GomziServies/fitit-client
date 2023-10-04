let navHTML = `<nav class="hk-nav hk-nav-dark mt-4">
<a href="javascript:void(0);" id="hk_nav_close" class="hk-nav-close"><span class="feather-icon"><i data-feather="x"></i></span></a>
<div class="nicescroll-bar">
    <div class="navbar-nav-wrap">
    <ul class="navbar-nav flex-column">
        <li class="nav-item menu_dashboard mb-2" style="border:none;">
            <p class="ml-2" style="font-size:12px">Main</p>
            <a class="nav-link align-items-baseline" href="admin.html?menu_item=menu_dashboard">
                <i class="fas fa-home"></i>
                <span class="nav-link-text">Dashboard</span>
            </a>
        </li>
        <li class="nav-item menu_admin mb-2" style="border:none;">
            <p class="ml-2" style="font-size:12px">Admin</p>
            <a class="nav-link align-items-baseline" href="admins.html?menu_item=menu_admin">
                <i class="fas fa-user-cog" aria-hidden="true"></i>
                <span class="nav-link-text">Admin Profile</span>
            </a>
        </li>
        <li class="nav-item menu_client_admin mb-2" style="border:none;">
            <p class="ml-2" style="font-size:12px">Client</p>
            <a class="nav-link align-items-baseline" href="client-admins.html?menu_item=menu_client_admin">
                <i class="fas fa-users"></i>
                <span class="nav-link-text">Client Admins</span>
            </a>
        </li>
        <li class="nav-item menu_lead_admin mb-2" style="border:none;">
            <p class="ml-2" style="font-size:12px">Lead</p>
            <a class="nav-link align-items-baseline" href="lead.html?menu_item=menu_lead_admin">
                <i class="fas fa-user-edit"></i>
                <span class="nav-link-text">Lead Details</span>
            </a>
        </li>
        <li class="nav-item">
            <p class="ml-2" style="font-size:12px">Finance</p>
            <ul class="nav flex-column mb-2">
                <li class="nav-item">
                    <ul class="nav flex-column">
                        <li class="nav-item menu_sales_dashboard">
                            <a class="nav-link" href="sales-dashboard.html?menu_item=menu_sales_dashboard">
                            <i class="fas fa-hand-holding-usd"></i>
                            <span class="nav-link-text">Total Sales</span>
                            </a>
                        </li>
                        <li class="nav-item menu_create_invoice">
                            <a class="nav-link" href="create-invoice.html?menu_item=menu_create_invoice">
                            <i class="fas fa-edit"></i>
                            <span class="nav-link-text">Generate Invoice</span>
                            </a>
                        </li>
                        <li class="nav-item menu_expense">
                            <a class="nav-link" href="all-expenses.html">
                            <i class="far fa-credit-card"></i>
                            <span class="nav-link-text">Expense</span>
                            </a>
                        </li>
                    </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="nav-item menu_feature menu_plan_bundle menu_membership_plan">
            <p class="ml-2" style="font-size:12px">Fitness</p>
                <a class="nav-link align-items-baseline" href="javascript:void(0);" data-toggle="collapse" data-target="#dash_drp6_3">
                    <i class="fas fa-utensils"></i>
                    <span class="nav-link-text">Diet</span>
                </a>
                <ul id="dash_drp6_3" class="nav flex-column collapse collapse-level-1">
                    <li class="nav-item">
                        <ul class="nav flex-column">
                            <li class="nav-item menu_food">
                                <a class="nav-link" href="food.html?menu_item=menu_food"><i class="fa fa-hamburger" aria-hidden="true"></i> Food</a>
                            </li>
                            <li class="nav-item diet_plan">
                                <a class="nav-link" href="diet-plan.html?menu_item=diet_plan">
                                <i class="ion ion-ios-calendar"></i>
                                    <span class="nav-link-text">Diet</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <a class="nav-link align-items-baseline mb-2" href="javascript:void(0);" data-toggle="collapse" data-target="#dash_drp6_4">
                <i class="fas fa-dumbbell"></i>
                <span class="nav-link-text">Exercise</span>
                </a>
                <ul id="dash_drp6_4" class="nav flex-column collapse collapse-level-1">
                <li class="nav-item">
                    <ul class="nav flex-column">    
                        <li class="nav-item menu_exercise_plan">
                            <a class="nav-link" href="exercise-plans.html?menu_item=menu_exercise_plan"><i class="fas fa-shoe-prints" aria-hidden="true"></i>Exercise Plan</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="nav-item mb-2" style="border:none;">
            <p class="ml-2" style="font-size:12px">Logout</p>
            <a class="nav-link align-items-baseline" onclick="logout()" href="javascript:void(0);">
                <i class="fas fa-sign-out-alt"></i>
                <span class="nav-link-text">Logout</span>
            </a>
        </li>
        </ul>
    </div>
</div>
</nav>`

// for SUB ADMIN

// get type from localstorage parse
let type = JSON.parse(localStorage.getItem('type'));

if (type === 'SUB' || type === 'TRIAL') {
    let navHTMLSUB = `<nav class="hk-nav hk-nav-dark">
    <a href="javascript:void(0);" id="hk_nav_close" class="hk-nav-close"><span class="feather-icon"><i data-feather="x"></i></span></a>
    <div class="nicescroll-bar">
        <div class="navbar-nav-wrap">
        <ul class="navbar-nav flex-column">
            <li class="nav-item menu_dashboard mb-2" style="border:none;">
                <p class="ml-2" style="font-size:12px">Main</p>
                <a class="nav-link align-items-baseline" href="admin.html?menu_item=menu_dashboard">
                    <i class="fas fa-home"></i>
                    <span class="nav-link-text">Dashboard</span>
                </a>
            </li>
            <li class="nav-item menu_lead_admin mb-2" style="border:none;">
                <p class="ml-2" style="font-size:12px">Lead</p>
                <a class="nav-link align-items-baseline" href="lead.html?menu_item=menu_lead_admin">
                    <i class="fas fa-user-edit"></i>
                    <span class="nav-link-text">Lead Details</span>
                </a>
            </li>
            <li class="nav-item">
                <p class="ml-2" style="font-size:12px">Finance</p>
                <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                        <ul class="nav flex-column">
                            <li class="nav-item menu_sales_dashboard">
                                <a class="nav-link" href="sales-dashboard.html?menu_item=menu_sales_dashboard">
                                <i class="fas fa-hand-holding-usd"></i>
                                <span class="nav-link-text">Total Sales</span>
                                </a>
                            </li>
                            <li class="nav-item menu_create_invoice">
                                <a class="nav-link" href="create-invoice.html?menu_item=menu_create_invoice">
                                <i class="fas fa-edit"></i>
                                <span class="nav-link-text">Generate Invoice</span>
                                </a>
                            </li>
                            <li class="nav-item menu_expense">
                                <a class="nav-link" href="all-expenses.html">
                                <i class="far fa-credit-card"></i>
                                <span class="nav-link-text">Expense</span>
                                </a>
                            </li>
                        </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="nav-item menu_feature menu_plan_bundle menu_membership_plan">
                <p class="ml-2" style="font-size:12px">Fitness</p>
                    <a class="nav-link align-items-baseline" href="javascript:void(0);" data-toggle="collapse" data-target="#dash_drp6_3">
                        <i class="fas fa-utensils"></i>
                        <span class="nav-link-text">Diet</span>
                    </a>
                    <ul id="dash_drp6_3" class="nav flex-column collapse collapse-level-1">
                        <li class="nav-item">
                            <ul class="nav flex-column">
                                <li class="nav-item menu_food">
                                    <a class="nav-link" href="food.html?menu_item=menu_food"><i class="fa fa-hamburger" aria-hidden="true"></i> Food</a>
                                </li>
                                <li class="nav-item diet_plan">
                                    <a class="nav-link" href="diet-plan.html?menu_item=diet_plan">
                                    <i class="ion ion-ios-calendar"></i>
                                        <span class="nav-link-text">Diet</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <a class="nav-link align-items-baseline mb-2" href="javascript:void(0);" data-toggle="collapse" data-target="#dash_drp6_4">
                    <i class="fas fa-dumbbell"></i>
                    <span class="nav-link-text">Exercise</span>
                    </a>
                    <ul id="dash_drp6_4" class="nav flex-column collapse collapse-level-1">
                    <li class="nav-item">
                        <ul class="nav flex-column">    
                            <li class="nav-item menu_exercise_plan">
                                <a class="nav-link" href="exercise-plans.html?menu_item=menu_exercise_plan"><i class="fas fa-shoe-prints" aria-hidden="true"></i>Exercise Plan</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="nav-item mb-2" style="border:none;">
                <p class="ml-2" style="font-size:12px">Logout</p>
                <a class="nav-link align-items-baseline" onclick="logout()" href="javascript:void(0);">
                    <i class="fas fa-sign-out-alt"></i>
                    <span class="nav-link-text">Logout</span>
                </a>
            </li>
            </ul>
        </div>
    </div>
    </nav>`
    $('#navHTML').html(navHTMLSUB);
} else if (type == 'CLIENT') {
    let navHTMLClient = `<nav class="hk-nav hk-nav-dark">
    <a href="javascript:void(0);" id="hk_nav_close" class="hk-nav-close"><span class="feather-icon"><i data-feather="x"></i></span></a>
    <div class="nicescroll-bar">
        <div class="navbar-nav-wrap">
        <ul class="navbar-nav flex-column">
            <li class="nav-item menu_dashboard mb-2" style="border:none;">
                <p class="ml-2" style="font-size:12px">Main</p>
                <a class="nav-link align-items-baseline" href="admin.html?menu_item=menu_dashboard">
                    <i class="fas fa-home"></i>
                    <span class="nav-link-text">Dashboard</span>
                </a>
            </li>
            <li class="nav-item menu_lead_admin mb-2" style="border:none;">
                <p class="ml-2" style="font-size:12px">Lead</p>
                <a class="nav-link align-items-baseline" href="lead.html?menu_item=menu_lead_admin">
                    <i class="fas fa-user-edit"></i>
                    <span class="nav-link-text">Lead Details</span>
                </a>
            </li>
            <li class="nav-item">
                <p class="ml-2" style="font-size:12px">Finance</p>
                <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                        <ul class="nav flex-column">
                            <li class="nav-item menu_sales_dashboard">
                                <a class="nav-link" href="sales-dashboard.html?menu_item=menu_sales_dashboard">
                                <i class="fas fa-hand-holding-usd"></i>
                                <span class="nav-link-text">Total Sales</span>
                                </a>
                            </li>
                            <li class="nav-item menu_create_invoice">
                                <a class="nav-link" href="create-invoice.html?menu_item=menu_create_invoice">
                                <i class="fas fa-edit"></i>
                                <span class="nav-link-text">Generate Invoice</span>
                                </a>
                            </li>
                            <li class="nav-item menu_expense">
                                <a class="nav-link" href="all-expenses.html">
                                <i class="far fa-credit-card"></i>
                                <span class="nav-link-text">Expense</span>
                                </a>
                            </li>
                        </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="nav-item menu_feature menu_plan_bundle menu_membership_plan">
                <p class="ml-2" style="font-size:12px">Fitness</p>
                    <a class="nav-link align-items-baseline" href="javascript:void(0);" data-toggle="collapse" data-target="#dash_drp6_3">
                        <i class="fas fa-utensils"></i>
                        <span class="nav-link-text">Diet</span>
                    </a>
                    <ul id="dash_drp6_3" class="nav flex-column collapse collapse-level-1">
                        <li class="nav-item">
                            <ul class="nav flex-column">
                                <li class="nav-item menu_food">
                                    <a class="nav-link" href="food.html?menu_item=menu_food"><i class="fa fa-hamburger" aria-hidden="true"></i> Food</a>
                                </li>
                                <li class="nav-item diet_plan">
                                    <a class="nav-link" href="diet-plan.html?menu_item=diet_plan">
                                    <i class="ion ion-ios-calendar"></i>
                                        <span class="nav-link-text">Diet</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <a class="nav-link align-items-baseline mb-2" href="javascript:void(0);" data-toggle="collapse" data-target="#dash_drp6_4">
                        <i class="fas fa-dumbbell"></i>
                        <span class="nav-link-text">Exercise</span>
                    </a>
                    <ul id="dash_drp6_4" class="nav flex-column collapse collapse-level-1">
                    <li class="nav-item">
                        <ul class="nav flex-column">
                            <li class="nav-item menu_exercise_plan">
                                <a class="nav-link" href="exercise-plans.html?menu_item=menu_exercise_plan"><i class="fas fa-shoe-prints" aria-hidden="true"></i>Exercise Plan</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="nav-item mb-2" style="border:none;">
                <p class="ml-2" style="font-size:12px">Logout</p>
                <a class="nav-link align-items-baseline" onclick="logout()" href="javascript:void(0);">
                    <i class="fas fa-sign-out-alt"></i>
                    <span class="nav-link-text">Logout</span>
                </a>
            </li>
            </ul>
        </div>
    </div>
    </nav>`
    $('#navHTML').html(navHTMLClient);
} else if (type == 'MASTER') {
    $('#navHTML').html(navHTML);
}
$(document).ready(() => {
    let searchNavParams = new URLSearchParams(window.location.search);
    if (searchNavParams.has('menu_item') && searchNavParams.get('menu_item') != '') {
        let itemClass = searchNavParams.get('menu_item');

        try {
            let allElems = $(`.${itemClass}`)

            Object.values(allElems).forEach(elem => {
                if ($(elem)) {
                    $(elem).addClass('active')
                }
            });
        } catch (error) {
            console.log(error)
        }
    }
})

// $('ul > li').addClass('mt-5')

// Header Profile
// ui_header_profile
document.getElementById('ui_header_profile').innerHTML = `<li class="nav-item dropdown dropdown-authentication">
<a class="nav-link dropdown-toggle no-caret" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <div class="media">
        <div class="media-img-wrap">
            <div class="avatar">
                <img src="" id="img_originalLogo" alt="user" class="avatar-img rounded-circle" onerror='this.src="dist/img/fitit-logo-min.png"'>
            </div>
            <!-- <span class="badge badge-success badge-indicator"></span> -->
        </div>
        <div class="media-body">
            <span id="lbl_profileName">Admin Profile<i class="zmdi zmdi-chevron-down"></i></span>
        </div>
    </div>
</a>
<div class="dropdown-menu dropdown-menu-right" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
    <a class="dropdown-item" href="profile.html"><i class="dropdown-icon zmdi zmdi-account"></i><span>Profile</span></a>
    <a class="dropdown-item" onclick="logout()" href="javascript:void(0);"><i class="dropdown-icon zmdi zmdi-power"></i><span>Log out</span></a>
</div>
</li>`

$(document).ready(() => {
    getProfileAdmin();
});

let findAdmin_id

function getProfileAdmin() {
    $.get({
        url: BASE_URL + '/get-profile',
        success: (result) => {
            var result = result.data;
            findAdmin_id = result._id;
            getCompanyDetailId(findAdmin_id)
        },
        error: (error) => {
            window.location.href = 'login.html'
        }
    });
}

// Getting Company
function getCompanyDetailId(findAdmin_id) {
    $.get({
        url: BASE_URL + '/company/get',
        contentType: 'application/json',
        success: (result) => {
            var result = result.data;
            if (result) {
                for (var i = 0; i < result.length; i++) {
                    var tempUser = result[i];
                    if (tempUser.createdById == findAdmin_id) {
                        $('#img_originalLogo').attr('src', tempUser.company_logo_url)
                    }
                }
            }
        },
        error: (error) => {
            return error.responseJSON ? toastError('Error', error.responseJSON.message) : toastError();
        }
    });
}