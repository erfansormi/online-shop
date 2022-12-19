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

const Modal = ({ open, setOpen, description, title, buttonFunc }: Props) => {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="modal-modal-description" sx={{ mt: 2 }}>
                        {description}
                    </DialogContentText>
                </DialogContent>
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

export default Modal;