import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import updatePost from "../hooks/updatePost";
import updateOrCreateFavorite from "../hooks/firebaseUpdateOrCreateFavorite";

function FormUpdatePost({post, handleClose}) {

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const handleUpdatePost = async () => {
    const response = await updatePost(post.id, title, body);
    const responseFirebase = await updateOrCreateFavorite(post.id, title, body);
    console.log(response, responseFirebase);
    handleClose();
  };
  useEffect(()=>{
    setTitle(post.title);
    setBody(post.body);
  },[]);

  return (
    <Box mt={2} mb={2}>
        <Typography mb={2}>Editar Post {post.id}</Typography>
      <form>
        <Box mb={2}>
            <TextField 
            label="titulo" 
            variant="outlined"
            sx={{mb:2}}
            placeholder="titulo"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField 
            label="body" 
            variant="outlined"
            sx={{mb:2}}
            placeholder="body"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </Box>
        <Button variant="contained"  onClick={()=>{handleUpdatePost()}}>actualizar</Button>
      </form>
    </Box>
  );
}
export default FormUpdatePost;
