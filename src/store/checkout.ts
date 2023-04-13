import { create } from "zustand";
import { DateObject } from "react-multi-date-picker";

interface UseCheckout {
    deliveryAddressModal: boolean,
    selectedAddressId: string,
    deliveryHour: string,
    deliveryDate: Date,

    setDeliveryAddressModal: (isOpen: boolean) => void,
    setSelectedAddressId: (addressId: string) => void,
    setDeliveryHour: (hour: string) => void,
    setDeliveryDate: (date: Date) => void
}

const useCheckout = create<UseCheckout>((set, get) => ({
    // initial values
    deliveryAddressModal: false,
    selectedAddressId: "",
    deliveryHour: "",
    deliveryDate: new Date(new DateObject().add(2, "day").format()),

    // functions
    setDeliveryAddressModal: (isOpen: boolean) => set(() => ({
        deliveryAddressModal: isOpen
    })),
    setSelectedAddressId: (addressId: string) => set(() => ({
        selectedAddressId: addressId
    })),
    setDeliveryHour: (hour: string) => set(() => ({
        deliveryHour: hour
    })),
    setDeliveryDate: (date) => set(() => ({
        deliveryDate: date
    }))
}))

export default useCheckout;