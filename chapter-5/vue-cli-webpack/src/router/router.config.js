import Home from '../components/home'
import News from '../components/news'

const routes = [{
    path: '/home',
    component: Home
}, {
    path: '/news/:username',
    component: News
}]

export default routes