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
            screen: "Register",
            childPath: "/register"
        },
    ]
}, {
    layout: "Mainlayout",
    path: "/main",
    isSecure: true,
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
    path: "/",
    redirectTo: "/auth/login",
    isSecure: false
  },
{
    component: "Page404",
    childPath: "*",
}

]