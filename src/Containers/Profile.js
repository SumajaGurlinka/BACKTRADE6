import React from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import { Avatar, Box, Button, Divider } from "@mui/material";
import { Grid } from "@mui/joy";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { Switch } from "@mui/joy";
import StopIcon from "@mui/icons-material/Stop";
import jwtDecode from "jwt-decode";
import PauseIcon from "@mui/icons-material/Pause";

import Typography from "@mui/joy/Typography";

const Profile = () => {
  const details = localStorage.getItem("token");
  const userDetails = jwtDecode(details);
  const firstName = userDetails.firstname;
  const lastName = userDetails.lastname;
  const formattedFirstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const formattedLastName =
    lastName.charAt(0).toUpperCase() + lastName.slice(1);
  const formattedName = `${formattedFirstName} ${formattedLastName}`;
  console.log("token values", userDetails);
  return (
    <>
      <Box
        sx={{
          height: "88.5vh",
          width: "980px",
          background: "#FCFCFC",

          marginLeft: "1px",

         
          overflow: "auto !important",
          "@media (max-width: 600px)": {
            width: "100%",
            height: "1330px",
            marginLeft: "0px",
          },
        }}
      >
        <Box
          sx={{
            height: "60px",

            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            marginRight: "10px",
            fontSize: "20px",
          }}
        >
          <div style={{fontWeight:'bold'}}> Profile</div>
        </Box>
        <Divider margin="10px" />
        <Box sx={{ display: "flex", flexwrap: "wrap" }}>
          <Avatar sx={{ color: "black", margin: "20px" }}>
            {" "}
            {`${userDetails.firstname
              ?.charAt(0)
              .toUpperCase()}${userDetails.lastname
              ?.charAt(0)
              .toUpperCase()}`}
          </Avatar>
          <div
            style={{
              margin: "10px",
              display: "flex",
              alignItems: "center",
              color: "black",
              fontSize: "18px",
            }}
          >
            {formattedName}
          </div>
        </Box>
        <Box
          sx={{
            height: "50x",

            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <div
         
            style={{
              margin: "10px",
              marginBottom:"20px",
              display: "flex",
              alignItems: "center",
              color: "black",
              fontSize:"19px",
              fontWeight:"bold"
            }}
          >
            Account
          </div>
        </Box>
        <Divider margin="10px" />
        <Grid
          container
          style={{
            marginLeft: "20px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
        >
          <Grid item xs={5} sm={5}>
            <div style={{ fontSize:"19px",
              fontWeight:"bold"}}>Email</div>
          </Grid>
          <Grid item xs={7} sm={7}>
            <div>{userDetails.sub}</div>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            marginLeft: "20px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
        >
          <Grid item xs={5} sm={5}>
            <div style={{fontWeight:"bold",fontSize:"18px"}}>Phone</div>
          </Grid>
          <Grid item xs={7} sm={7}>
            <div>{userDetails.phone}</div>
          </Grid>
        </Grid>
        <div
         
          style={{
            margin: "20px",
          }}
        >
        
        </div>
        <Divider margin="10px" />
        
      </Box>
    </>
  );
};

export default Profile;
