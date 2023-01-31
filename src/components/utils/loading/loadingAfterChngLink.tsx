import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loading from './loading';

const LoadingAfterChngLink = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleRouteChange = () => {
            setLoading(true)
            return;
        }
        const handleRouteComplete = () => {
            setLoading(false)
        }
        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', handleRouteComplete)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router])

    return (
        <Loading loading={loading} />
    )
}

export default LoadingAfterChngLink;