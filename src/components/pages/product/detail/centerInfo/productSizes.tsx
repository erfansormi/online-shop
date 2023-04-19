import React from 'react'

// mui
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select'

// context
import { useProductContext } from '../../productContainer';

const ProductSizes = () => {

    // context
    const { productInfo, setProductInfo } = useProductContext();
    const { selectedVariant, selectedSeller } = productInfo;

    // check conditional
    if (selectedSeller.variants.length <= 1) {
        return null
    }

    return (
        <div>
            <div className='capitalize text-gray-800 font-bold flex gap-x-1 mb-4 text-lg'>
                <h4 className="text-lg">size:</h4>
                <span className='uppercase'>{selectedVariant.size}</span>
            </div>
            <FormControl sx={{ minWidth: 150 }}>
                <Select
                    value={selectedVariant.size}
                    inputProps={{ 'aria-label': 'Without label' }}
                    className='capitalize'
                    color='info'
                >
                    {
                        selectedSeller.variants.map((item, index) => {
                            if (item.available && item.size) {
                                return <MenuItem
                                    className={`capitalize ${selectedVariant.size === item.size ? "bg-inherit text-cyan-500 font-bold" : ""}`}
                                    value={item.size}
                                    key={index * 47}
                                    onClick={() => {
                                        setProductInfo({
                                            ...productInfo,
                                            selectedVariant: {
                                                ...selectedSeller.variants[index],
                                                selectedColor: selectedVariant.colors[0]
                                            }
                                        })
                                    }}
                                >
                                    {item.size}
                                </MenuItem>
                            }
                        }
                        )}
                </Select>
            </FormControl>
        </div>
    )
}

export default ProductSizes;