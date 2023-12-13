"use client"

import { selectToken } from '@/app/store/features/token/tokenSlice'
import { useAppSelector } from '@/app/store/hooks'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const AuthProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const router = useRouter()
    const access_token = useAppSelector(selectToken)

    useEffect(() => {
        if(access_token === undefined || access_token === ""){
            router.push('/sign-in')
        }
    }, [access_token, router])
    return (
        <>{children}</>
    )
}

export default AuthProvider