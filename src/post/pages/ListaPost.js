import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import { Button, Grid, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';

import getPostList from "../hooks/getPostList";
import FormUpdatePost from "../components/FormUpdatePost";
import CardPost from "../components/CardPost";
import { styleModal } from "../styles/modal";


const ListaPost = ({ user }) => {

  

  const [listaPost, setListaPost] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    getList();
  };

  const [postSelected, setPostSelected] =useState(1);

  const getList = async () => {
    const posts = await getPostList(user.uid);
    setListaPost(posts);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <Box m={2} p={2}>
      <Typography sx={{ fontWeight: 'bold'}} align="center" variant="h4" component="h4" mb={8} mt={4} color="blue">MIS POST</Typography>
        <Grid container spacing={2}>
          {listaPost.map((post) => (
              <Grid item xs={3} key={post.id}>
                  <Box m={2} p={2}>
                      <CardPost 
                      post={post}
                      handleOpen={handleOpen}
                      setPostelected={setPostSelected}
                      />
                  </Box>
              </Grid>
          ))}
        </Grid>
      </Box>

      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <Typography  variant="h6" component="h2">
            <FormUpdatePost post={postSelected} handleClose={handleClose} />
            </Typography>
            <Button onClick={handleClose}>Cerrar</Button>
          </Box>
      </Modal>

    </>
  );
};

export default ListaPost;
