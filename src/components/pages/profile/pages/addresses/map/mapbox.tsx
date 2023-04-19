import { useEffect } from 'react';
import axios from 'axios';

// react map gl lib
import ReactMapGL, { Marker, GeolocateControl, FullscreenControl, NavigationControl, ViewStateChangeEvent } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

// components
import Input from '../../../../../data_entry/input/input';
import SearchedLocations from './searchedLocations';
import { Button, Divider } from '@mui/material';
import CustomizedModal from '../../../../../utils/modal/customizedModal';

// icons
import { AiFillCloseCircle, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoIosArrowForward } from "react-icons/io";

// zustand store
import useAddressValues from '../../../../../../store/userAddress';

const MapboxModal = () => {
    const { addressDetail, map } = useAddressValues((state) => state);

    const { viewport,
        setViewport,
        searchInputValue,
        setSearchInputValue,
        setSearchedAddresses
    } = map;

    // handle move map
    const handleMove = (e: ViewStateChangeEvent) => {
        setViewport(e.viewState.longitude, e.viewState.latitude, e.viewState.zoom);
    }

    // handle searched locations response
    const handleFetch = async () => {
        const config: any = {
            "x-api-key": process.env.MAP_IR_TOKEN as string,
            "content-type": "application/json"
        }

        await fetch("https://map.ir/search/v2/", {
            method: "POST",
            body: JSON.stringify({ text: searchInputValue }),
            headers: config
        })
            .then(res => res.json())
            .then(data => setSearchedAddresses(data.value))
    }

    // if typing, fetch searched location not working
    useEffect(() => {
        const handleIsTyping = setTimeout(() => {
            if (searchInputValue.length) {
                handleFetch();
            }
            else {
                setSearchedAddresses(undefined);
            }
        }, 1500)

        return () => clearTimeout(handleIsTyping)
    }, [searchInputValue])

    // convert coordinates to address
    const coordinatesToAddress = async () => {
        addressDetail.setLoading(true);

        await axios.get(`https://map.ir/reverse?lat=${viewport.latitude}&lon=${viewport.longitude}`, {
            headers: {
                "x-api-key": process.env.MAP_IR_TOKEN as string,
                "content-type": "application/json"
            }
        })
            .then(res => {
                addressDetail.setAddressDetailValues({
                    ...addressDetail.addressDetailValues,
                    postal_address: res.data.address_compact,
                    province: res.data.province,
                    city: res.data.city
                })
            })
            .finally(() => {
                addressDetail.setLoading(false);
            })
    }


    return (
        <CustomizedModal
            title='new address'
            handleClose={() => map.setModal(false)}
            open={map.modal}
            description='specify the address location.'
            maxWidth="md"
        >
            <div className='w-full h-[470px] flex flex-col gap-y-4'>
                <ReactMapGL
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN as string}
                    {...viewport}
                    onMove={handleMove}
                    scrollZoom={true}
                >
                    {/* map buttons */}
                    <NavigationControl position="bottom-left" />
                    <FullscreenControl position="bottom-left" />
                    <GeolocateControl position='bottom-right' />

                    {/* marker */}
                    <Marker
                        longitude={viewport.longitude}
                        latitude={viewport.latitude}
                        anchor="center"
                        scale={0.8}
                        color='#222'
                    />

                    <div className='absolute top-6 sm:right-16 sm:left-16 right-4 left-4'>

                        {/* search bar */}
                        <div className='relative right-0 left-0 top-0'>
                            <Input
                                className="bg-white h-[3rem] shadow-md focus:outline-0 relative z-40 rounded-b-none"
                                placeholder='search address'
                                value={searchInputValue}
                                onChange={(e) => setSearchInputValue(e.target.value)}
                            />

                            {/* remove input value */}
                            <span
                                className='absolute right-5 cursor-pointer inset-y-1/4 z-50 h-fit text-gray-500 text-2xl'
                                onClick={() => {
                                    setSearchInputValue("");
                                    setSearchedAddresses(undefined);
                                }}
                            >
                                <AiFillCloseCircle />
                            </span>
                            <Divider />

                            {/* city searched */}
                            <SearchedLocations />
                        </div>
                    </div>
                </ReactMapGL>
                <Divider />
                <div className='flex flex-wrap gap-y-3 justify-between items-center'>
                    <div>
                        <p className='text-gray-600 text-sm'>
                            your parcels will be sent to this position
                        </p>
                    </div>
                    <Button
                        variant="contained"
                        endIcon={addressDetail.loading ? <AiOutlineLoading3Quarters className='animate-spin' /> : <IoIosArrowForward />}
                        disabled={addressDetail.loading}
                        onClick={async () => {
                            await coordinatesToAddress();
                            map.setModal(false);
                            addressDetail.setModal(true);
                        }}
                    >
                        confirm and continue
                    </Button>
                </div>
            </div>
        </CustomizedModal>
    )
}
export default MapboxModal;