import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Box,
  Avatar,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  postsContainer: {
    paddingTop: theme.spacing(3),
  },
  postTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
  pointer: {
    cursor: "pointer",
  },
}));

function Posts({ posts }) {
  const history = useHistory();
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  function goBack() {
    history.push("/");
  }

  return (
    <Container maxWidth="lg" className={classes.postsContainer}>
      <input
        style={{
          marginBottom: "20px",
          padding: "20px",
        }}
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <Typography variant="h4" className={classes.postTitle}>
        Comments
      </Typography>
      <Grid container spacing={3}>
        {posts
          .filter((post) => {
            if (searchTerm === "") {
              return post;
            } else if (
              post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              post.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
              post.body.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return post;
            }
          })
          .map((post) => {
            return (
              <Grid key={post.id} item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {post.body}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                      <Avatar />
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          {post.name}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="textSecondary"
                          component="p"
                        >
                          {post.email}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <ArrowBackIcon
                        className={classes.pointer}
                        onClick={goBack}
                      />
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}

export default Posts;
