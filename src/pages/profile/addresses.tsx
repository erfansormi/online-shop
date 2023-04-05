import { Button } from '@mui/material';
import React, { useState } from 'react'
import TabContentTitle from '../../components/data_display/tabContentTitle';
import RegisterAddressModal from '../../components/profile/pages/addresses/registerAddressModal';

// components
import ProfileContainer from '../../components/profile/profileContainer'
import ProfileContentContainer from '../../components/profile/profileContentContainer';

const Addresses = () => {
    const [mapOpen, setMapOpen] = useState(false);

    const handleClose = () => {
        setMapOpen(false);
    }

    return (
        <ProfileContainer>
            <ProfileContentContainer>
                <div className='flex justify-between py-20'>
                    {/* title */}
                    <TabContentTitle title='addresses' />

                    {/* register location button */}
                    <Button variant="outlined" onClick={() => setMapOpen(true)}>
                        register new address
                    </Button>
                </div>
            </ProfileContentContainer>

            {/* register location modal */}
            <RegisterAddressModal handleClose={handleClose} open={mapOpen} />
        </ProfileContainer>
    )
}

export default Addresses;