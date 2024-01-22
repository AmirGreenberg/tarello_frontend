import { HomePage } from './pages/HomePage.jsx'
import { Workspace } from './pages/Workspace.jsx'
import { BoardApp } from './pages/BoardApp.jsx'
import { TaskDetails } from './pages/TaskDetails.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home',
    },
    {
        path: '/workspace',
        component: <Workspace />,
        label: 'Workspace',
    },
    {
        path: '/board/:boardId/',
        component: <BoardApp />,
        label: 'BoardApp',
    },
    {
        path: '/board/:boardId/:groupId/:taskId',
        component: <TaskDetails />,
        label: 'TaskDetails',
    },
    {
        path: '/auth',
        component: <LoginSignup />,
        label: 'auth',
    },
]

export default routes
