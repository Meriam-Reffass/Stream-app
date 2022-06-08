import { Box, Card, CardContent, Grow, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { postStyles } from "./style";
import "./SinglePost.css";

export default function SinglePost({ item }) {
  const classes = postStyles();
  return (
    
    <Grow in>
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <Card className="card overflow-hidden h-100 shadow">
      <div >
        <Box className={classes.cardImageContainer}>
         
         <img
            src={item.imageFileSet}
            alt={item.title}
            className="card-img"
          />
        </Box>
        </div>
        <CardContent className="par">
          <Link to={`/posts/${item._id}`} className={classes.Link}>
            
            <Typography variant='body1' component='h6' color='textPrimary'>
              {item.username}
            
            </Typography>
            <Typography variant='body1' component='h6' color='textPrimary'>
          
              {item.title}
            </Typography>
          </Link>
        </CardContent>
      </Card></div>
    </Grow>
  );
}
