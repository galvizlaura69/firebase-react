import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import { Grid, Typography } from "@mui/material";

import getPostListAll from "../hooks/getPostListAll";

import CardPost from "../components/CardPost";
import FormCreatePost from "../components/FormCreatePost";
import { styleModal } from "../styles/modal";

const AllPostList = ({user}) => {

  const [listaPost, setListaPost] = useState([]);
  const [open, setOpen] = useState(false);
 

  const getList = async () => {
    const posts = await getPostListAll();
    setListaPost(posts);
  };

  useEffect(() => {
    getList();
  }, []);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    getList();
    setOpen(false);
  };

  return (
    <>
      <Box m={2} p={2}>
        <Typography  variant="h4" component="h4" mb={8} mt={4} color="blue">ÚLTIMOS 20 POST</Typography>
        <Button variant="contained"  onClick={handleOpen}>CREAR NUEVO</Button>
        <Grid container spacing={2}>
          {listaPost.map((post) => (
            <Grid item xs={3} key={post.id}>
                <Box m={2} p={2}>
                    <CardPost post={post} />
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
          <FormCreatePost user={user} handleClose={handleClose}/>
          <Button  onClick={handleClose}>Cerrar</Button>
        </Box>
      </Modal>
    </>
  );
};

export default AllPostList;
