import React from 'react';
import {
  Typography,
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  styled,
  Box,
  ListItemButton,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Files = () => {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Contabilidade anual
      </Typography>
      <Demo>
        <List dense={false}>
          {generate(
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Single-line item" secondary="Gerado em 10/10/2023" />
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemButton>,
          )}
        </List>
      </Demo>
    </Box>
  );
};

export default Files;
