import { FaCommentDots, FaRoad, FaHandHoldingUsd } from 'react-icons/fa'
import { Bs123 } from 'react-icons/bs'
import { AiFillHome, AiFillSchedule } from 'react-icons/ai'
import { ImUsers } from 'react-icons/im'
import { IoCarSharp, IoHammerSharp } from 'react-icons/io5'
import { BsBellFill } from 'react-icons/bs'



const sidebarMenu = [
    {
        icon: AiFillHome,
        link: {
            href: '/dashboard/1',
            text: 'Home'
        }
    },
    {
        icon: FaCommentDots,
        link: {
            href: '/dashboard/1/comments-and-ratings',
            text: 'comments and ratings'
        }
    },
    {
        icon: ImUsers,
        link: {
            href: '/dashboard/1/drivers',
            text: 'drivers'
        }
    },
    {
        icon: IoCarSharp,
        link: {
            href: '/dashboard/1/vehicles',
            text: 'vehicles'
        }
    },
    {
        icon: FaHandHoldingUsd,
        link: {
            href: '/dashboard/1/earnings',
            text: 'earnings'
        }
    },
    {
        icon: BsBellFill,
        link: {
            href: '/dashboard/1/notifications',
            text: 'notifications'
        },
        iconClass: 'rotate-45'
    },
    {
        icon: IoHammerSharp,
        link: {
            href: '/dashboard/1/policies',
            text: 'policies'
        }
    },
    {
        icon: Bs123,
        link: {
            href: '/dashboard/1/promo-code',
            text: 'promo code'
        }
    },
    {
        icon: AiFillSchedule,
        link: {
            href: '/dashboard/1/schedule',
            text: 'schedule'
        }
    },
    {
        icon: FaRoad,
        link: {
            href: '/dashboard/1/trips',
            text: 'trips'
        }
    },
]

export default sidebarMenu