import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import yellowOrb from "../Images/yellowOrb.png";
import AllEnglishProfessions from "./EnglishList";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function YellowEnglish() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        <img src={yellowOrb} className="orb"></img>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">English</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Professions which apply Language Arts include:
          </DialogContentText>
          <DialogContent>
            <AllEnglishProfessions />
          </DialogContent>
        </DialogContent>
      </Dialog>
    </div>
  );
}
