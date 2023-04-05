import React, { Dispatch, SetStateAction } from 'react'

// types
import { SearchAddressResponse } from '../../../../types/user/userTypes';

interface Props {
    searchResponse: SearchAddressResponse[] | undefined;
    setSearchResponse: Dispatch<SetStateAction<SearchAddressResponse[] | undefined>>
    setSearchBarValue: Dispatch<SetStateAction<string>>;
    setViewport: Dispatch<SetStateAction<{
        latitude: number;
        longitude: number;
        zoom: number;
    }>>
}

const SearchedLocations = ({ setSearchBarValue, setSearchResponse, setViewport, searchResponse }: Props) => {
    return (
        <>
            {
                searchResponse !== undefined && searchResponse.length ?
                    <div className='absolute shadow-[0_5px_4px_1px_rgba(0,0,0,0.2)] top-10 rounded-md px-4 py-2 right-0 left-0 bg-white max-h-[250px] overflow-y-auto'>
                        {
                            searchResponse.map((item, index) =>
                                <div
                                    key={index * 78}
                                    className="flex flex-col px-2 py-2 border-b border-solid border-gray-200 border-x-0 border-t-0 last:border-b-0 cursor-pointer transition-colors duration-300 hover:bg-gray-100"
                                    onClick={() => {
                                        setViewport({
                                            latitude: item.geom.coordinates[1],
                                            longitude: item.geom.coordinates[0],
                                            zoom: 14
                                        });
                                        setSearchResponse([]);
                                        setSearchBarValue("");
                                    }}
                                >
                                    <div>
                                        <div className='text-gray-700 text-base font-medium mb-1'>
                                            <span>
                                                {item.province}
                                            </span>
                                        </div>
                                        <div className='text-gray-500 text-xs'>
                                            <p>
                                                {item.address}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    </div>
                    : null
            }
        </>
    )
}

export default SearchedLocations;