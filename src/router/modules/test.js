const test = ()=> import('@/view/test')

export default [
  {
    path: '/',
    name: 'test',
    component: test,
    meta: {title: 'test', showRouteFlag: false}
  },{
    path: '/test',
    name: 'test',
    component: test,
    meta: {title: 'test', showRouteFlag: false}
  }
]

