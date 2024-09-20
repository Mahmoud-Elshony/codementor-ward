import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Popover } from '@mui/material';

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenu, setSubMenu] = useState([]);

  const handleHover = (event, menuItems) => {
    setAnchorEl(event.currentTarget);
    setSubMenu(menuItems);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const mentorshipItems = ['AI / Data', 'Programming languages'];
  const programmingItems = ['JavaScript', 'Python'];

  return (
    <div>
      <Drawer variant="permanent" anchor="right">
        <List>
          <ListItem
            button
            onMouseEnter={(e) => handleHover(e, mentorshipItems)}
            // onMouseLeave={handleClose}
          >
            <ListItemText primary="Mentorship" />
          </ListItem>

          <ListItem
            button
            onMouseEnter={(e) => handleHover(e, programmingItems)}
            onMouseLeave={handleClose}
          >
            <ListItemText primary="Programming Languages" />
          </ListItem>
        </List>
      </Drawer>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <List>
          {subMenu.map((item, index) => (
            <ListItem key={index} button>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
};

export default Sidebar;
