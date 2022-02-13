import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import createPost from '../hooks/createPost';
import swal from 'sweetalert';




export default function FormCreatePost({ user, handleClose }) {

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const handleGuardar = async () => {
    try {
      console.log(user.uid, title, body);

      const guardar = await createPost(user.uid, title, body);
      console.log(guardar);
      handleClose();
      swal({
        title: "Exitoso",
        text: "Se ha guardado exitosamente",
        icon: "success"
      })
    }
    catch (error) {
      swal({
        title: "Error",
        text: "No ha guardado",
        icon: "error"
      })
      console.log('error');
      return error.message;

    }
  };



  return (
    <Box mt={2} mb={2}>
      <Typography mb={2}>CREAR POST</Typography>
      <form>
        <Box mb={2}>
          <TextField
            label="titulo"
            variant="outlined"
            sx={{ mb: 2 }}
            placeholder="titulo"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            label="body"
            variant="outlined"
            sx={{ mb: 2 }}
            placeholder="body"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </Box>
        <Box>
          <Button variant="contained"
            onClick={(e) => { handleGuardar() }}
          >
            Guardar</Button>
        </Box>
      </form>
    </Box>
  );
}