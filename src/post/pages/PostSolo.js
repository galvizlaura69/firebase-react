import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import getPostById from '../hooks/getPostById';
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import FavoriteIcon from '@material-ui/icons/Favorite';

import updateOrCreateFavorite from "../hooks/firebaseUpdateOrCreateFavorite";
import swal from "sweetalert";

const PostSolo = () => {

    let {id} = useParams();

    const [postMostrar, setPostMostrar] = useState();
    const [open, setOpen] = useState(false);

    const postOne = async () => {
        const postsId = await getPostById(id);
        console.log(id + 1);
        console.log(postsId);
        setPostMostrar(postsId);
    };


    useEffect(() => {
        postOne();
    }, []);

    const handleFavorito = async({id, title, body}) => {
        console.log("Favorito", id, title, body);
        try{
            await updateOrCreateFavorite(id, title, body);  
            swal({
                title: "Exitoso",
                text: "Se ha añadio a favoritos exitosamente",
                icon: "success"
              });
        }
        catch(e){
            console.log(e);
        }
    };


    return (
        <>
            <div>
                <Card variant="outlined" sx={{minHeight: 200, p:2, maxWidth:500 }}>
                    <Typography variant="h4">
                        {postMostrar?.title}
                    </Typography>
                    <Typography component="div" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {postMostrar?.body}
                    </Typography>
                    {postMostrar?.id}
                    <Box mt={2}>
                        <Stack spacing={2} alignItems="center" direction="row">
                            <Button
                                mr={2}
                                onClick={()=>{handleFavorito(postMostrar)}}
                                variant="outlined">
                               Añadir a favoritos  <FavoriteIcon />
                            </Button>
                        </Stack>
                    </Box>
                </Card>
            </div>

        </>
    );
};

export default PostSolo;