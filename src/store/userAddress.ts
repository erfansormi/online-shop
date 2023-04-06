import { create } from "zustand";

export interface AddressDetailValues {
    postal_address: string,
    province: string,
    city: string,
    plaque: string,
    unit: string,
    postal_code: string
}

interface MapViewport {
    latitude: number;
    longitude: number;
    zoom: number;
}

interface SearchedAddresses {
    province: string,
    county: string,
    district: string,
    city: string,
    region: string,
    neighborhood: string,
    title: string,
    address: string,
    type: string,
    fclass: string,
    geom: {
        type: string,
        coordinates: [
            number,
            number
        ]
    }
}

interface State {
    map: {
        modal: boolean,
        setModal: (open: boolean) => void,
        viewport: MapViewport,
        setViewport: (lon: number, lat: number, zoom: number) => void,
        searchInputValue: string,
        setSearchInputValue: (text: string) => void,
        searchedAddresses: undefined | SearchedAddresses[],
        setSearchedAddresses: (addresses: undefined | SearchedAddresses[]) => void;
    }
    addressDetail: {
        modal: boolean,
        setModal: (open: boolean) => void,
        addressDetailValues: AddressDetailValues,
        setAddressDetailValues: (addressDetailValues: AddressDetailValues) => void,
        loading: boolean,
        setLoading: (isLoading: boolean) => void
    }
}

const useAddressValues = create<State>(set => ({

    // *****************  map  *****************
    map: {

        // map modal
        modal: false,
        setModal: (open: boolean) => set(state => ({
            ...state,
            map: {
                ...state.map,
                modal: open
            }
        })),

        // map viewport
        viewport: {
            latitude: 35.68198040704668,
            longitude: 51.38973403791937,
            zoom: 10
        },
        setViewport: (lon, lat, zoom) => set(state => ({
            ...state,
            map: {
                ...state.map,
                viewport: {
                    longitude: lon,
                    latitude: lat,
                    zoom: zoom
                }
            }
        })),

        // address search bar value
        searchInputValue: "",
        setSearchInputValue: (text) => set(state => ({
            ...state,
            map: {
                ...state.map,
                searchInputValue: text
            }
        })),

        // searched addresses response
        searchedAddresses: undefined,
        setSearchedAddresses: (addresses) => set(state => ({
            ...state,
            map: {
                ...state.map,
                searchedAddresses: addresses
            }
        }))
    },

    // *****************  address detail  *****************
    addressDetail: {

        // address detail modal
        modal: false,
        setModal: (open) => set(state => ({
            ...state,
            addressDetail: {
                ...state.addressDetail,
                modal: open
            }
        })),

        // address detail inputs values
        addressDetailValues: {
            postal_address: "",
            province: "",
            city: "",
            plaque: "",
            unit: "",
            postal_code: ""
        },
        setAddressDetailValues: (addressDetailValues) => set(state => ({
            ...state,
            addressDetail: {
                ...state.addressDetail,
                addressDetailValues: addressDetailValues
            }
        })),

        // address detail loading
        loading: false,
        setLoading: (isLoading) => set(state => ({
            ...state,
            addressDetail: {
                ...state.addressDetail,
                loading: isLoading
            }
        }))
    }
}))

export default useAddressValues;