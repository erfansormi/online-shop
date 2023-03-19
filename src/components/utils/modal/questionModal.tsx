import * as React from 'react';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@mui/material';

// type
interface Props {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    title: string,
    description: string,
    buttonFunc: any
}

const QuestionModal = ({ open, setOpen, description, title, buttonFunc }: Props) => {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className='p-10'
            >

                {/* title */}
                <DialogTitle className='text-gray-800' variant='h2' id="alert-dialog-title" sx={{ paddingTop: "10px" }}>
                    {title}
                </DialogTitle>

                {/* description */}
                <DialogContent>
                    <DialogContentText id="modal-modal-description" sx={{ mt: 2 }} className="text-lg">
                        {description}
                    </DialogContentText>
                </DialogContent>

                {/* buttons */}
                <DialogActions>
                    <Button
                        onClick={handleClose}
                    >
                        cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => buttonFunc()}
                    >
                        yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default QuestionModal;