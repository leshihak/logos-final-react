import React from 'react';
import {
    makeStyles,
    Theme,
    createStyles,
    Button,
    Modal,
    Backdrop,
    Fade,
} from '@material-ui/core';

interface Props {
    handleCloseModal: () => void;
    showModal: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '500px',
            margin: '0 auto',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            color: 'black',
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    })
);

export default function FoodModal({ handleCloseModal, showModal }: Props) {
    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={showModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={showModal}>
                    <div className={classes.paper}>
                        <Button color='secondary' onClick={handleCloseModal}>
                            Close
                        </Button>
                        <h2 id='transition-modal-title'>Lorem ipsum</h2>
                        <p id='transition-modal-description'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Autem est delectus voluptates facilis
                            consequatur inventore doloribus, culpa maiores
                            tempora, eum laborum voluptatum quaerat optio sit.
                            Totam optio eveniet architecto pariatur?
                        </p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
