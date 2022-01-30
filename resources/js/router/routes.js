function view (path) {
    return () => import(/* webpackChunkName: '' */ `../views/${path}`).then(m => m.default || m)
}

export default [
    { path: '', name: 'home', component: view('home') },
    { path: '/pro-nas', name: 'about', component: view('about') },
    {
        path: '/новини',
        component: view('admin/login'),
        children: [
            { path: '', redirect: { name: 'news.institution' }},
            { path: 'новини-закладу', name: 'news.institution', component: view('news/institution') },
            { path: 'новини-керівника', name: 'admin.password', component: view('admin/password.vue') }
        ]
    },

    { path: '/admin/login', name: 'login', component: view('admin/login') },
    { path: '/admin/register', name: 'register', component: view('admin/register') },
    // { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
    // { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
    // { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
    // { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },
    //
    // { path: '/home', name: 'home', component: page('home.vue') },
    // {
    //     path: '/admin',
    //     component: view('admin/login'),
    //     children: [
    //         { path: '', redirect: { name: 'admin.login' }},
    //         { path: 'login', name: 'admin.login', component: view('admin/login'), meta:{ layout: "no-layout" } },
    //         { path: 'password', name: 'admin.password', component: view('admin/password.vue') }
    //     ]
    // },
    //
    // { path: '*', component: page('errors/404.vue') }
]
