export const routes = [{
    layout: "Authlayout",
    path: "/auth",
    isSecure: false,
    children: [
        {
            screen: "Login",
            childPath: "/login"
        },
        {
            screen: "ForgetPassward",
            childPath: "/forgetPassward"
        },
        {
            screen: "Reset",
            childPath: "/reset"
        },
    ]
}, {
    layout: "Mainlayout",
    path: "/main",
    isSecure: false,
    children: [
        {
            screen: "Dashboard",
            childPath: "/dashboard"
        },
        {
            screen: "Services",
            childPath: "/services"
        },
        {
            screen: "Accounts",
            childPath: "/accounts"

        }]}
,{ 
    init: "/auth/login",
    childPath: "/"
},
{
    component: "Page404",
    childPath: "*"
}

]