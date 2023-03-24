import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// general context
import { useGeneralContext } from '../../../context/generalContext';

const LoadingAfterChngLink = () => {
    const router = useRouter()

    const { general, setGeneral } = useGeneralContext();

    useEffect(() => {
        const handleRouteChange = () => {
            setGeneral({
                ...general,
                loading: true
            })
            return;
        }
        const handleRouteComplete = () => {
            setGeneral({
                ...general,
                loading: false
            })
        }
        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', handleRouteComplete)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router])

    return (
        <></>
    )
}

export default LoadingAfterChngLink;