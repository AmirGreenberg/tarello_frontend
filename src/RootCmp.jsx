import { Routes, Route, useLocation } from 'react-router'
import ColorThief from '/node_modules/colorthief/dist/color-thief.mjs'

import { AppHeader } from './cmps/AppHeader'
import { HomePage } from './pages/HomePage'
import { Workspace } from './pages/Workspace'
import { BoardApp } from './pages/BoardApp'
import { TaskDetails } from './pages/TaskDetails'
import { LoginSignup } from './pages/LoginSignup'
import { SideBarLeft } from './cmps/SideBarLeft'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import { utilService } from './services/util.service'

export function RootCmp() {
    const backgroundImage = useSelector(state => state.boardModule.board?.style.backgroundImage)
    const refImg = useRef()
    const location = useLocation()

    const isHomepage = location.pathname === '/'

    return (
        <section className={`root-cmp`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <img
                crossOrigin="anonymous"
                src={backgroundImage}
                style={{ display: 'none' }}
                ref={refImg}
                onLoad={() => {
                    const colorThief = new ColorThief()
                    const c = colorThief.getColor(refImg.current)
                    if (utilService.checkLight(c)) document.body.classList.remove('dark-mode')
                    else document.body.classList.add('dark-mode')
                    const color = `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0.9)`
                    document.body.style.setProperty('--themeBGcolor', color);
                }}
            />
            {!isHomepage && <AppHeader />}
            {!isHomepage && <SideBarLeft />}
            <main className="main-screen">
                <Routes>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={'/auth'} element={<LoginSignup />} />
                    <Route path={'/workspace'} element={<Workspace />} />
                    <Route path={'/board/:boardId/'} element={<BoardApp />}>
                        <Route path={':groupId/:taskId'} element={<TaskDetails />} />
                    </Route>
                    <Route path={'/login'} element={<LoginSignup />} />
                </Routes>
            </main>
        </section>
    )
}