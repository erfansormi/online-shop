import React, { useEffect, useState } from 'react'

// contexts
import { useUserContext } from '../../context/userContext'

// types
import { Product } from '../../types/product/productTypes'

// axios
import { axiosInstance } from '../../functions/axiosInstance'

// components
import ProfileContentContainer from '../../components/pages/profile/profileContentContainer'
import TabContentSlider from '../../components/utils/sliders/tabContentSlider'
import ProfileContainer from '../../components/pages/profile/profileContainer'
import ProductSkeletonSlider from '../../components/utils/sliders/productSkeletonSlider'

const Profile = () => {
    const { user } = useUserContext();

    // states
    const [recentVisits, setRecentVisits] = useState<Product[] | null>(null);

    useEffect(() => {
        axiosInstance.get("/api/v1/users/recent-visits")
            .then((res) => {
                setRecentVisits(res.data.recentVisits);
            })
    }, [])

    return (
        <>
            {
                user ?
                    <>
                        <ProfileContainer>
                            {/* recent products visits */}
                            <ProfileContentContainer>
                                {
                                    // skeleton loading
                                    recentVisits === null ?
                                        <ProductSkeletonSlider title='recent visits' /> :

                                        // data
                                        <TabContentSlider data={user.activities.recent_visits} title="recent visits" />
                                }
                            </ProfileContentContainer>

                            {/* favorites list */}
                            <ProfileContentContainer>
                                <TabContentSlider data={user.favorites_list} title="favorites list" />
                            </ProfileContentContainer>
                        </ProfileContainer>
                    </>
                    :
                    //  skeleton loading 
                    <ProfileContainer >
                        <ProfileContentContainer>
                            <ProductSkeletonSlider title='recent visits' />
                        </ProfileContentContainer>

                        <ProfileContentContainer>
                            <ProductSkeletonSlider title='favorites list' />
                        </ProfileContentContainer>
                    </ProfileContainer>
            }
        </>
    )
}

export default Profile