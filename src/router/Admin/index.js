import Admin from '@/views/Admin/index.vue'
import Products from '@/views/Admin/Products/index.vue'


export default [
    {
        path: '/admin',
        component: Admin,
        name: 'admin',
        children: [
            {
                path: 'products',
                component: Products,
                name: 'products'
            }
        ]
    }
]
