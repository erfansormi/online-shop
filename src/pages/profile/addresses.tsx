import React from 'react'

// zustand store
import useAddressValues from '../../store/userAddress';

// components
import { Button, Divider } from '@mui/material';
import TabContentTitle from '../../components/data_display/tabContentTitle';
import ProfileContainer from '../../components/profile/profileContainer'
import ProfileContentContainer from '../../components/profile/profileContentContainer';
import CustomizedModal from '../../components/utils/modal/customizedModal';
import AddressDetailModal from '../../components/profile/pages/addresses/addressDetail/addressDetailModal';
import Mapbox from '../../components/profile/pages/addresses/map/mapbox';
import RegisteredAddresses from '../../components/profile/pages/addresses/registeredAddresses';

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