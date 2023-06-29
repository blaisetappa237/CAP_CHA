import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import "./Modal.css";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const phoneNumber = "+22893497713";

  const menuOptions = [
    {
      text: "Accueil",
      icon: <HomeIcon />,
      target: "home",
    },
    {
      text: "A propos",
      icon: <InfoIcon />,
      target: "about"
    },
    {
      text: "Commentaires",
      icon: <CommentRoundedIcon />,
      target: "comments"
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      target: "contact"
    },
  ];

  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <nav className="sticky-nav">
<div className="nav-logo-container" style={{ display: "flex", justifyContent: "center" }}>
  <img src={Logo} alt="" />
</div>
      <div className="navbar-links-container">
        
        <a href="#about">A propos</a>
        <a href="#comments">Commentaires</a>
        <a href="#contact">Contact</a>


      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
 <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Dialog className="Dialog" open={openPopup} onClose={() => setOpenPopup(false)}>
  <DialogTitle >
    MERCI DE NOUS FAIRE CONFIANCE
  </DialogTitle>
  <DialogContent >
    <p>Veuillez écrire à ce numéro et votre commande sera gérée à la minute ! </p>
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiOutlineWhatsApp/>
      Contactez-nous sur WhatsApp
    </a>
  </DialogContent>
  <DialogActions >
    <Button onClick={() => setOpenPopup(false)}>Fermer</Button>
  </DialogActions>
</Dialog>
    </nav>
  );
};
/*        <button className="primary-button" onClick={() => setOpenPopup(true)}>
          Commandez maintenant !
        </button>
        <a href="#home">Accueil</a>*/

export default Navbar;
