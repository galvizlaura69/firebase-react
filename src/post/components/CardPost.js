import React, { useState } from "react";
import deletePost from "../hooks/deletePost";
import firebaseDeleteFavorite from '../hooks/firebaseDeleteFavorite';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import updateOrCreateFavorite from "../hooks/firebaseUpdateOrCreateFavorite";


export default function CardPost({ post, handleOpen, setPostelected }) {
  const { id, title, body } = post;
  let history = useHistory();

  const goToPost = (idPost) => {
    console.log(idPost);
    history.push("/post/" + idPost);
  };
  const handleFavorito = async(post) => {
    try{
    const response = await updateOrCreateFavorite(post.id, post.title, post.body);
    console.log(response);
    swal({
      title: "Añadido a favoritos",
      text: "Se ha añadido a favoritos exitosamente",
      icon: "success"
    });
    }catch(e){
      console.log(e);
      swal({
        title: "Ups",
        text: "No se pudo añadir a favoritos",
        icon: "error"
      })
    }

  };
  
  const handleEliminar = async () => {
    try {
      console.log(id);
      const eliminar = await deletePost(id);
      const elimnarDeFireBase = await firebaseDeleteFavorite(id);
      console.log(eliminar);
      console.log(elimnarDeFireBase);

      swal({
        title: "Borrado Exitoso",
        text: "Se ha borrado exitosamente",
        icon: "success"
      });
    }
    catch (error) {
      swal({
        title: "Error",
        text: "No se ha podido borrar",
        icon: "error"
      });

      console.log('error');
      return error.message;

    }
  };

  return (
    <Card variant="outlined" sx={{ minHeight: 200 }}>
      <CardContent>
        <Typography variant="h6"> {title} {id} </Typography>
        <Typography variant="p" >{body} </Typography>
      </CardContent>
      <CardActions>
        <Button  onClick={() => {goToPost(id);}}>
          <VisibilityIcon />
        </Button>
        <Button onClick={() => {handleFavorito(post)}}>
          <FavoriteIcon />
        </Button>
        {setPostelected ? (
        <>
          <Button  onClick={() => {setPostelected(post);handleOpen();}}>
            <EditIcon />
          </Button>
          <Button  onClick={() => { handleEliminar() }}>
            <DeleteIcon />
          </Button>
        </>
        ) : ("")}
      </CardActions>
    </Card>
  );
}
