import React from "react";
import { AppBar, Toolbar, Typography, Avatar, Box } from "@mui/material";

export default function Header({ name }: { name: string }) {
  const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        {/* Left side of the header */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>

        {/* Right side: Name and Avatar */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            {name}
          </Typography>
          <Avatar sx={{ bgcolor: "#ff5722" }}>{getInitials(name)}</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
