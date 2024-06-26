import Navigation from '@/components/Navigation/Navigation'
import { memo } from 'react'
import { Outlet } from 'react-router-dom'

type GuestProfileLayoutProps = unknown
export const GuestProfileLayout: React.FC<GuestProfileLayoutProps> = memo(() => {
    return (
        <div className='flex flex-col h-screen'>
            <div className="h-[90%] overflow-auto">
                <Outlet />
            </div>
            <div className="h-[10%]">
                <Navigation />
            </div>
        </div>
    )
})
GuestProfileLayout.displayName = 'GuestProfileLayout'
