import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200
      },
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  }));

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:3200/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(data => console.log(data));
    console.log("user submited");
  }

  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        required
        id="outlined-required"
        label="Email"
        defaultValue=""
        variant="outlined"
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        onChange={e => setPassword(e.target.value)}
      />
      <Button variant="outlined" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default Login;
