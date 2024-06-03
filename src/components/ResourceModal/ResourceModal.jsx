import { useState } from "react";

import { Modal, Typography, Box, Button } from "@mui/material";

import "./ResourceModal.scss";

export function ResourceModal() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="resource-modal__title"
                aria-describedby="resource-modal__content"
            >
                <Box 
                    sx={{
                        margin:"0.75rem 1rem",
                        border:"2px solid #000000",
                        borderRadius:"0.25rem",
                        boxShadow:"#000000 4px 4px 0 0",
                        backgroundColor:"#FFF5E1"
                    }}
                >
                    <Typography id="resource-modal__title" variant="h6" component="h2" >
                        Modal Title
                    </Typography>
                    <Typography id="resource-modal__content">
                        words words words
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}