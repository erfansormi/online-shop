import { useEffect, useMemo, useState } from 'react';

// react map gl lib
import ReactMapGL, { Marker, GeolocateControl, FullscreenControl, NavigationControl, ViewStateChangeEvent } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

// components
import Input from '../../../data_entry/input/input';
import SearchedLocations from './searchedLocations';
import { Button, Divider } from '@mui/material';

// icons
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoIosArrowForward } from "react-icons/io";

// types
import { SearchAddressResponse } from '../../../../types/user/userTypes';

const Mapbox = () => {
    const [viewport, setViewport] = useState({
        // The latitude and longitude of the center of Tehran
        latitude: 35.68198040704668,
        longitude: 51.38973403791937,
        zoom: 10
    });
    const memoizedViewport = useMemo(() => {
        return {
            ...viewport
        }
    }, [viewport])

    // search bar input value
    const [searchBarValue, setSearchBarValue] = useState("");

    // search response
    const [searchResponse, setSearchResponse] = useState<SearchAddressResponse[] | undefined>([]);

    // address detail modal
    const [detailModal, setDetailModal] = useState(false);

    // handle move map
    const handleMove = (e: ViewStateChangeEvent) => {
        setViewport(e.viewState);
    }

    // handle search location response
    const handleFetch = async () => {
        const config: any = {
            "x-api-key": process.env.MAP_IR_TOKEN as string,
            "content-type": "application/json"
        }

        await fetch("https://map.ir/search/v2/", {
            method: "POST",
            body: JSON.stringify({ text: searchBarValue }),
            headers: config
        })
            .then(res => res.json())
            .then(data => setSearchResponse(data.value))
            .catch(err => console.log(err))
    }

    // if typing, fetch searched location not working
    useEffect(() => {
        const handleIsTyping = setTimeout(() => {
            if (searchBarValue.length) {
                handleFetch();
            }
            else {
                setSearchResponse([]);
            }
        }, 1500)

        return () => clearTimeout(handleIsTyping)
    }, [searchBarValue])


    return (
        <div className='w-full h-[470px] flex flex-col gap-y-4'>
            <ReactMapGL
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN as string}
                {...memoizedViewport}
                onMove={handleMove}
                scrollZoom={true}
            >
                {/* map buttons */}
                <FullscreenControl position="top-right" />
                <NavigationControl position="top-right" />
                <GeolocateControl position='bottom-right' />

                {/* marker */}
                <Marker longitude={viewport.longitude} latitude={viewport.latitude} anchor="bottom" />

                <div className='absolute top-6 right-16 left-16'>

                    {/* search bar */}
                    <div className='relative right-0 left-0 top-0'>
                        <Input
                            className="bg-white h-[3rem] shadow-md focus:outline-0 relative z-40 rounded-b-none"
                            placeholder='search address'
                            value={searchBarValue}
                            onChange={(e) => setSearchBarValue(e.target.value)}
                        />

                        {/* remove input value */}
                        <span
                            className='absolute right-5 cursor-pointer inset-y-1/4 z-50 h-fit text-gray-500 text-2xl'
                            onClick={() => {
                                setSearchBarValue("");
                                setSearchResponse([]);
                            }}
                        >
                            <AiFillCloseCircle />
                        </span>
                        <Divider />

                        {/* city searched */}
                        <SearchedLocations
                            searchResponse={searchResponse}
                            setSearchBarValue={setSearchBarValue}
                            setSearchResponse={setSearchResponse}
                            setViewport={setViewport}
                        />
                    </div>
                </div>
            </ReactMapGL>
            <Divider />
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-gray-600 text-sm'>
                        your parcels will be sent to this position
                    </p>
                </div>
                <Button
                    variant="contained"
                    endIcon={<IoIosArrowForward />}
                >
                    confirm and continue
                </Button>
            </div>
        </div>
    )
}
export default Mapbox;