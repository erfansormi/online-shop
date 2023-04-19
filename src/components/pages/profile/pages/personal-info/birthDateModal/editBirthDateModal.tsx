import React, { useState } from 'react';

// react date picker
import { DateObject } from 'react-multi-date-picker';

// context
import { useGeneralContext } from '../../../../../../context/generalContext';

// axios
import { axiosInstance } from '../../../../../../functions/axiosInstance';

// react toastify
import { toastify } from '../../../../../utils/toastify/toastifyFunc';

// components
import { Autocomplete, Button, TextField } from '@mui/material';
import CustomizedModal from '../../../../../utils/modal/customizedModal';

// types
import { InitialPersonalInfoModal } from '../personalInfoData';
import { useUserContext } from '../../../../../../context/userContext';
import { User } from '../../../../../../types/user/userTypes';

interface Props {
    modalsInitialValues: InitialPersonalInfoModal,
    setModalsInitialValues: React.Dispatch<React.SetStateAction<InitialPersonalInfoModal>>
}

const EditBirthDateModal = ({ modalsInitialValues, setModalsInitialValues }: Props) => {
    // contexts
    const { closeLoading, openLoading } = useGeneralContext();
    const { user, setUser } = useUserContext();

    // birth date states
    const [year, setYear] = useState<null | number>(user && user.birth_date ? new Date(user.birth_date).getFullYear() : null);
    const [month, setMonth] = useState<null | any>(user && user.birth_date ? new DateObject(new Date(user.birth_date)).month : null);
    const [day, setDay] = useState<null | number>(user && user.birth_date ? new DateObject(new Date(user.birth_date)).day : null);

    // close modal func
    const handleClose = () => {
        setModalsInitialValues({
            ...modalsInitialValues,
            birthDate: false
        })
    }

    // date handle click
    const handleClick = async () => {
        if (day && month && year) {
            handleClose();
            openLoading();

            const date = new Date(year, month.index, day);

            setUser({
                ...user as User,
                birth_date: date
            })

            axiosInstance.put("/api/v1/users/edit-birth-date", {
                date
            })
                .then(res => {
                    toastify(res.data.message, "success");
                })
                .catch(err => {
                    toastify(err.response.data.message, "error");
                })
                .finally(() => {
                    closeLoading();
                })
        }
    }

    return (
        <CustomizedModal
            open={modalsInitialValues.birthDate}
            handleClose={handleClose}
            title='birth date'
        >
            <div className='flex flex-col mt-6 gap-y-6'>
                <div className='flex gap-x-4'>
                    <div className='sm:w-full w-[30%]'>
                        <Autocomplete
                            options={years()}
                            value={year}
                            onChange={(event: any, newValue: number | null) => {
                                setYear(newValue);
                            }}
                            getOptionLabel={(option) => option.toString()}
                            renderInput={(params) => <TextField variant='outlined'  {...params} label="Year" />}
                        />
                    </div>
                    <div className='sm:w-full w-[30%]'>
                        <Autocomplete
                            options={months()}
                            getOptionLabel={(option) => option.shortName}
                            value={month}
                            onChange={(event: any, newValue) => {
                                setMonth(newValue);
                            }}
                            renderInput={(params) => <TextField variant='outlined'  {...params} label="Month" />}
                        />
                    </div>
                    <div className='sm:w-full w-[30%]'>
                        <Autocomplete
                            options={days(month ? month.length : 30)}
                            getOptionLabel={(option) => option.toString()}
                            value={day}
                            onChange={(event: any, newValue: number | null) => {
                                setDay(newValue);
                            }}
                            renderInput={(params) => <TextField variant='outlined'  {...params} label="Day" />}
                            disabled={!month}
                        />
                    </div>
                </div>
                <div>
                    <Button variant="contained" disabled={!year || !month || !day} onClick={handleClick}>
                        register birth date
                    </Button>
                </div>
            </div>
        </CustomizedModal>
    )
}

export default EditBirthDateModal;

// handle date funcs (year , month and day)
const years = () => {
    const date = new DateObject();
    const currentYear = date.year;
    let years: number[] = [];

    for (let i = currentYear - 3; i >= currentYear - 100; i--) {
        years.push(i)
    }

    return years;
}

const months = () => {
    const date = new DateObject();
    const months = date.months;
    return months;
}

const days = (monthLength: number) => {
    let days = [];

    for (let i = 1; i <= monthLength; i++) {
        days.push(i)
    }
    return days;
}