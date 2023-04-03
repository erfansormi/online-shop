import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import SellerPerformance from "../../../data_display/sellerPerformance";

// context
import { useProductContext } from '../../productContainer';

// components
import SellerSymbol from "../../../utils/seller/sellerSymbol";
import Consent from "../../../data_display/consent";
import DiscountPercentage from "../../../utils/price/discountPercentage";
import Price from "../../../utils/price/price";
import OldPrice from "../../../utils/price/oldPrice";
import CustomizedModal from "../../../utils/modal/customizedModal";

// icons
import { BsCheckCircle } from "react-icons/bs";

// toast
import { toastify } from "../../../utils/toastify/toastifyFunc";

// types
import { Variant } from "../../../../types/product/productTypes";

interface Props {
  changeSeller: boolean;
  setChangeSeller: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangeSellerModal = ({ changeSeller, setChangeSeller }: Props) => {
  // context
  const { productInfo, setProductInfo } = useProductContext();

  const handleClose = () => {
    setChangeSeller(false);
  };

  return (
    <>
      <CustomizedModal
        maxWidth={"md"}
        open={changeSeller}
        handleClose={handleClose}
        title="change seller"
      >
        <div>

          {/* seller list */}
          <div className="flex flex-col">
            {productInfo.product.sellers.map(({ seller, variants }, index) => (
              <div
                key={index * 37}
                className="border-b-2 border-gray-200 last:border-0 border-solid border-x-0 border-t-0 flex items-center justify-between p-5 even:bg-gray-100 overflow-x-auto"
              >

                {/* seller */}
                <div className="w-60 lg:w-1/4 mr-6 last:mr-0 flex items-center">
                  {/* seller logo */}
                  <div className="flex mr-1">
                    <SellerSymbol shop_name={seller.shop_name} />
                  </div>

                  {/* shop name */}
                  <span className="flex leading-[1.8] w-max capitalize text-gray-700 font-[500]">
                    {seller.shop_name}
                  </span>
                </div>

                {/* performance */}
                <div className="w-60 lg:w-1/4 mr-6 last:mr-0 items-center flex flex-col capitalize text-xs gap-y-1">
                  <div className="flex items-center">
                    <SellerPerformance performance={seller.performance} />
                  </div>

                  <div className="flex items-center">
                    <span className="text-gray-600 mr-2">
                      consent
                    </span>
                    <Consent number={+seller.satisfaction_percentage} />
                  </div>
                </div>

                {/* product price */}
                <div className="w-60 lg:w-1/4 mr-6 last:mr-0 flex items-center justify-center gap-x-2">

                  {/* old price */}
                  <OldPrice variant={variants} className="leading-[1.8] text-sm" />

                  {/* current price */}
                  <Price variant={variants} className="leading-[1.8] md:text-xl text-lg" />

                  {/* discount percentage */}
                  <DiscountPercentage variant={variants} />

                </div>

                {/* select seller product */}
                <div className="w-60 lg:w-1/4 mr-6 justify-center last:mr-0 flex">
                  {
                    // check if selected seller?
                    productInfo.selectedSeller.seller._id === seller._id ?
                      <div className="flex items-center gap-x-1 text-green-500">
                        <span className="flex">
                          Selected
                        </span>
                        <BsCheckCircle />
                      </div>
                      :
                      <div className="w-max">
                        <Button
                          onClick={() => {
                            setProductInfo({
                              ...productInfo,
                              selectedSeller: productInfo.product.sellers[index],
                              selectedVariant: {
                                ...productInfo.product.sellers[index].variants.find(item => item.available) as Variant,
                                selectedColor: (productInfo.product.sellers[index].variants.find(item => item.available) as Variant).colors[0]
                              }
                            })

                            // send toast
                            toastify("seller changed successfully!", "light", "success")

                            // close modal
                            handleClose()
                          }}
                          variant="outlined"
                        >
                          select seller
                        </Button>
                      </div>
                  }
                </div>

              </div>
            ))}
          </div>
        </div>
      </CustomizedModal>
    </>
  );
};

export default ChangeSellerModal;
