export default router =>{
    router.addRoute({
        name: 'user',
        path:'/user',
        component: new component,
        children:[
            {name:'', path:'', component: new component}
        ]
    })
}