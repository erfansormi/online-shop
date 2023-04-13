import { create } from "zustand";

interface UseCheckout {
    deliveryAddressModal: boolean,
    selectedAddressId: string,
    setDeliveryAddressModal: (isOpen: boolean) => void,
    setSelectedAddressId: (addressId: string) => void,
}

const useCheckout = create<UseCheckout>((set, get) => ({
    // initial values
    deliveryAddressModal: false,
    selectedAddressId: "",

    // functions
    setDeliveryAddressModal: (isOpen: boolean) => set(() => ({
        deliveryAddressModal: isOpen
    })),
    setSelectedAddressId: (addressId: string) => set(() => ({
        selectedAddressId: addressId
    }))
}))

export default useCheckout;