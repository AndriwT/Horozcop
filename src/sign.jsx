import "./App.css";
import { useState } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";

//------------------------------------------------------------Material UI Styling

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

//------------------------------------------------------------Material UI Styling

const signs = [
  "Aries: The Ram",
  "Taurus: The Bull",
  "Gemini: The Twins",
  "Cancer: The Crab",
  "Leo: The Lion",
  "Virgo: The Virgin",
  "Libra: The Scales",
  "Scorpio: The Scorpion",
  "Sagittarius: The Archer",
  "Capricorn: The Goat",
  "Aquarius: The Water Bearer",
  "Pisces: The Fish",
];

const imgSigns = {
  "Libra: The Scales": "/images/libra.jpeg",
  "Aries: The Ram": "/images/aries.jpeg",
};

const GetSign = () => {
  const [date, setDate] = useState("");
  const [h1, setH1] = useState("");
  const [img, setImg] = useState("");

  const classes = useStyles();

  const inputDate = (e) => {
    setDate(e.target.value);
  };

  const getDate = () => {
    return new Date(date);
  };

  const giveMeSign = (date) => {
    let sign =
      Number(
        new Intl.DateTimeFormat("fr-TN-u-ca-persian", {
          month: "numeric",
        }).format(getDate(date))
      ) - 1;
    const foundSign = signs[sign];
    setH1(foundSign);
    setImg(imgSigns[foundSign]);
  };

  const handleSubmit = () => {
    if (date) {
      giveMeSign(date);
    } else {
      alert("Please enter a valid Birthdate");
      // setH1("No valid Date");
    }
  };

  // const getImage = (signs[sign]) => {
  //   if (signs[sign] === "Aries: The Ram") {
  //     setImg("/images/aries.jpeg");
  //   }
  // };

  //   if (img === "/images/libra.jpeg") {
  //     return (
  //       <div>
  //         <img src="/images/libra.jpeg" atl="" />
  //       </div>
  //     );
  //   } else if (img === "/images/aries.jpeg") {
  //     return (
  //       <div>
  //         <img src="/images/aries.jpeg" atl="" />)
  //       </div>
  //     );
  //   }
  // };

  return (
    <Container id="main_container" style={{ height: "100%" }}>
      <div id="container">
        <Card id="input_container">
          <TextField
            id="outlined-number"
            label="Enter Birthdate"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={inputDate}
            className={classes.root}
          />
          <Button id="submit_button" variant="contained" onClick={handleSubmit}>
            What is my Sing?
          </Button>
        </Card>
      </div>
      <div id="container">
        <h1>{h1}</h1>
      </div>
      <div>{!!img && <img src={img} atl="" />}</div>
    </Container>
  );
};

export default GetSign;
