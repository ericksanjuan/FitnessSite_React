import React from "react";
import {
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Button,
  Menu,
} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkIcon from '@mui/icons-material/Link';

export default function DropdownShareButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openBtn = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  const handleShare = (e) => {
    e.preventDefault();

    const ahref = window.location.href;
    const encodedAhref = encodeURIComponent(ahref);
    var link;

    switch (e.currentTarget.id) {
      case "facebook":
        link = `https://www.facebook.com/sharer/sharer.php?u=${ahref}`;
        open(link);
        break;

      case "twitter":
        link = `https://twitter.com/intent/tweet?url=${encodedAhref}`;
        open(link);
        break;

      case "reddit":
        link = `https://www.reddit.com/submit?url=${encodedAhref}`;
        open(link);
        break;

      case "copy":
        navigator.clipboard.writeText(ahref);
        break;

      default:
        break;
    }
  };

  const open = (socialLink) => {
    window.open(socialLink, "_blank");
  };

  return (
    <>
        <Button
        id='demo-positioned-button'
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        >
        Share Workout
        </Button>
        <Menu id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={openBtn}
        onClose={handleClose}
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
        }}
        transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
        }}>
            <MenuList dense={true}>
            <MenuItem button id='facebook' onClick={handleShare}>
                <ListItemIcon>
                <FacebookIcon />
                </ListItemIcon>
                <ListItemText primary='Facebook' />
            </MenuItem>
            <MenuItem button id='twitter' onClick={handleShare}>
                <ListItemIcon>
                <TwitterIcon />
                </ListItemIcon>
                <ListItemText primary='Twitter' />
            </MenuItem>
            <MenuItem button id='reddit' onClick={handleShare}>
                <ListItemIcon>
                <RedditIcon />
                </ListItemIcon>
                <ListItemText primary='Reddit' />
            </MenuItem>
            <MenuItem button id='copy' onClick={handleShare}>
                <ListItemIcon>
                <LinkIcon />
                </ListItemIcon>
                <ListItemText primary='Copy Link' />
            </MenuItem>
            </MenuList>
         </Menu>
         </>
  );
}
