import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import joi from "joi-browser";
import { createMuiTheme , Paper} from "@material-ui/core";
import FileBase64 from "react-file-base64";
import { TextInputField } from "../../Common/FormComponents";
import { AddPosts } from "../../../HttpServices/Posts";
import { toast } from "react-toastify";
import { green, purple } from "@material-ui/core/colors";
// import IconButton from 'material-ui/IconButton'; 
// import ActionHome from 'material-ui/svg-icons/action/home';

import Image from '../../../images/logo192.png'

const styles = {
  paperContainer : {
    backgroudImage: `url(${Image})`
  }
};


const theme = createMuiTheme ({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

export default function AddPost(props) {
  let item=JSON.parse(localStorage.getItem('user'))
  const [formValidationError, setFormValidationError] = useState("");
  const [state, setState] = useState({
    data: {
      username:item.username,
      title: "",
      imageFileSet: "",
      description: "",
    },
    errors: {},
  });

  const schema = {
    username: joi.string().required().label("username").min(5),
    title: joi.string().required().label("Title").min(5),
    imageFileSet: joi.string().required().label("Image"),
    description: joi.string().required().label("Description"),
  };

  const handleOnChange = ({ target }) => {
    const { data, errors } = state;
    console.log(data)
    const { error } = joi.validate(data[target.name], schema[target.name], {
      abortEarly: true,
    });
    !error
      ? (errors[target.name] = "")
      : (errors[target.name] = error.details[0].message);
    data[target.name] = target.value;
    setState({ data, errors });
  };

  const validate = () => {
    let errorObj = {};
    let { error } = joi.validate(state.data, schema, { abortEarly: false });

    !error
      ? (errorObj = {})
      : error.details.map((item) => (errorObj[item.path] = item.message));
    return errorObj;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let errors = validate();
    let { data } = state;
    setState({ data, errors });

    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      ///app post request logic
      AddPosts({ data })
        .then(() => {
          console.log("Post Added Successfully");
          toast.success("Post Added Successfully");
          //reset Form
          setState({
            data: {
              title: "",
              imageFileSet: "",
              description: "",
            },
            errors: {},
          });
          //navigate to /posts
          props.history.push("/posts");
        })
        .catch((e) => {
          console.log("error", e);
          setFormValidationError(e.message);
        });
    }
  };

  return (
    <Container maxWidth='md' component={Box} mt={4} style={styles.paperContainer}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'>
        <Grid item xs={12} sm={6}>
          <Box mt={2} mb={2}>
            <Typography variant='h6' color='primary' align='center'>
              Add a Blog 
            </Typography>
            <Typography variant='subtitle2' color='error' align='center'>
              {formValidationError}
            </Typography>
          </Box>
          <form onSubmit={handleOnSubmit}>
            <Box mt={2} mb={1}>
              <TextInputField
                state={state}
                name='title'
                onChange={handleOnChange}
              />
            </Box>
            <Box mt={2} mb={1}>
              <FileBase64
                onDone={(e) => {
                  let { data, errors } = state;

                  data.imageFileSet = e.base64;
                  errors.imageFileSet = "";
                  setState({ data, errors });
                }}
              />
              <Typography variant='subtitle2' color='error'>
                {state.errors.imageFileSet ? state.errors.imageFileSet : null}
              </Typography>
            </Box>
            <Box mt={2} mb={1}>
              <TextInputField
                state={state}
                name='description'
                onChange={handleOnChange}
                multiline
                rows={4}
              />
            </Box>
            <Box mt={2} mb={1}>
              <Button
                color='primary'
                variant='outlined'
                type='submit'
                fullWidth>
                {" "}
                Submit{" "}
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}
