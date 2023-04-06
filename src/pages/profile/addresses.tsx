import React from 'react'

// zustand store
import useAddressValues from '../../store/userAddress';

// components
import { Button } from '@mui/material';
import TabContentTitle from '../../components/data_display/tabContentTitle';
import ProfileContainer from '../../components/profile/profileContainer'
import ProfileContentContainer from '../../components/profile/profileContentContainer';
import CustomizedModal from '../../components/utils/modal/customizedModal';
import AddressDetailModal from '../../components/profile/pages/addresses/addressDetail/addressDetailModal';
import Mapbox from '../../components/profile/pages/addresses/map/mapbox';

const Addresses = () => {
    const { map } = useAddressValues((state) => state);

    return (
        <ProfileContainer>
            <ProfileContentContainer>
                <div className='flex justify-between py-20'>
                    {/* title */}
                    <TabContentTitle title='addresses' />

                    {/* register location button */}
                    <Button variant="outlined" onClick={() => map.setModal(true)}>
                        register new address
                    </Button>
                </div>
            </ProfileContentContainer>

            {/* map box modal */}
            <CustomizedModal
                title='new address'
                handleClose={() => map.setModal(false)}
                open={map.modal}
                description='specify the address location.'
                maxWidth="md"
            >
                <Mapbox />
            </CustomizedModal>

            {/* address detail modal */}
            <AddressDetailModal />
        </ProfileContainer>
    )
}

export default Addresses;