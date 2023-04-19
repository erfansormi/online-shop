import React from 'react'

// zustand store
import useAddressValues from '../../store/userAddress';

// components
import { Button } from '@mui/material';
import TabContentTitle from '../../components/data_display/tabContentTitle';
import ProfileContainer from '../../components/pages/profile/profileContainer'
import ProfileContentContainer from '../../components/pages/profile/profileContentContainer';
import AddressDetailModal from '../../components/pages/profile/pages/addresses/addressDetail/addressDetailModal';
import Mapbox from '../../components/pages/profile/pages/addresses/map/mapbox';
import RegisteredAddresses from '../../components/pages/profile/pages/addresses/registeredAddresses';

const Addresses = () => {
    const { map } = useAddressValues((state) => state);

    return (
        <ProfileContainer>
            <ProfileContentContainer>
                <div className='flex flex-col gap-y-4 py-8 px-2'>
                    {/* header */}
                    <div className='flex justify-between'>
                        <TabContentTitle title='addresses' />

                        {/* register location button */}
                        <Button variant="outlined" onClick={() => map.setModal(true)}>
                            register new address
                        </Button>
                    </div>

                    {/* registered addresses */}
                    <RegisteredAddresses />

                </div>

            </ProfileContentContainer>

            {/* map box modal */}
            <Mapbox />

            {/* address detail modal */}
            <AddressDetailModal />
        </ProfileContainer>
    )
}

export default Addresses;