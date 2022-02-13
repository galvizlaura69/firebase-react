import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import createPost from '../hooks/createPost';
import swal from 'sweetalert';




export default function FormCreatePost({user, handleClose}) {

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
    <div>
      <form>
        <Box mt={3} mb={4}>
          <label>
            Title
          </label>
          <input
            type="text"
            valvue={title}
            onChange={(e) => (setTitle(e.target.value))}
            requerid
          >
          </input>
        </Box>
        <Box mt={3} mb={4}>
          <label>
            Body
          </label>
          <input
            type="text"
            valvue={body}
            onChange={(e) => (setBody(e.target.value))}
            requerid
          >
          </input>
        </Box>
        <Box>
          <Button
            onClick={(e) => { handleGuardar() }}
          >
            Guardar</Button>
        </Box>
      </form>
    </div >
  );
}