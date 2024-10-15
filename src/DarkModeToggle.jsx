import React from "react";
import { Card, CardContent, CardMedia, Typography, Paper } from "@mui/material";
import Img from "./assets/images/one.png";

const ImageCard = ({ darkMode, toggleDarkMode }) => {
  return (
    <Paper
      style={{
        backgroundColor: darkMode ? "#424242" : "#fff",
        color: darkMode ? "#fff" : "#000",
        padding: 16,
      }}
    >
      <Card
        style={{
          maxWidth: 345,
          margin: "auto",
        }}
      >
        <CardMedia component="img" height="140" image={Img} alt="Card image" />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hello World
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ullam
            vitae porro, incidunt perferendis sapiente velit corrupti deserunt
            placeat molestias sunt, officiis, quos ex voluptas repellat. Dicta
            assumenda atque aperiam.
          </Typography>
        </CardContent>
      </Card>

      <div style={{ marginTop: 16, textAlign: "center" }}>
        <button
          onClick={toggleDarkMode}
          style={{
            padding: "8px 16px",
            borderRadius: 4,
            backgroundColor: darkMode ? "#90caf9" : "#1976d2",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </Paper>
  );
};

export default ImageCard;
