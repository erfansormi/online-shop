import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// components
import CustomizedModal from '../../../utils/modal/customizedModal';
const Mapbox = dynamic(() => import("./mapbox"), {
    ssr: false
});

// types
interface Props {
    handleClose: () => void,
    open: boolean,
}

const RegisterAddressModal = ({ handleClose, open }: Props) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/greggs.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}&bbox=-0.227654%2C51.464102%2C0.060737%2C51.553421&limit=10`;

    const [locations, setLocations] = useState<any[]>([]);
    useEffect(() => {
        const fetchLocations = async () => {
            await fetch(url).then((response) =>
                response.text()).then((res) => JSON.parse(res))
                .then((json) => {
                    setLocations(json.features);
                }).catch((err) => console.log({ err }));
        };
        fetchLocations();
    }, []);

    return (
        <CustomizedModal
            title='new address'
            handleClose={handleClose}
            open={open}
            description='specify the address location.'
            maxWidth="md"
        >
            <Mapbox />
        </CustomizedModal>
    )
}

export default RegisterAddressModal;