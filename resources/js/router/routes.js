function view (path) {
    return () => import(/* webpackChunkName: '' */ `../views/${path}`).then(m => m.default || m)
}

export default [
    { path: '', name: 'home', component: view('home') },
    { path: '/про-нас', name: 'about', component: view('about') },
    {
        path: '/новини',
        component: view('admin/login'),
        children: [
            { path: '', name: 'news.all', component: view('news/institution') },
            { path: 'новини-закладу', name: 'news.institution', component: view('news/institution') },
            { path: 'керівник', name: 'news.head', component: view('news/institution') },
            { path: 'методист', name: 'news.methodist', component: view('news/institution') },
            { path: 'медсестра', name: 'news.nurse', component: view('news/institution') },
            { path: 'психолог', name: 'news.psychologist', component: view('news/institution') },
            { path: 'музичний-керівник', name: 'news.musicDirector', component: view('news/institution') },
            { path: 'керівник-гуртка-англійської-мови', name: 'news.englishClassHead', component: view('news/institution') },
        ]
    },
    { path: '/харчування', name: 'food', component: view('food') },
    { path: '/установчі-документи', name: 'documents', component: view('documents') },
    { path: '/контакти', name: 'contacts', component: view('contacts') },

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
