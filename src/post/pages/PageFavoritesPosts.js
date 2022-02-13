import { Button, Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import deleteFavorite from "../hooks/firebaseDeleteFavorite";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import VisibilityIcon from '@material-ui/icons/Visibility';

import firebaseGetFavoritesList from "../hooks/firebaseGetFavoriteList";


const PageFavoritesPosts = (props) => {
    const [listaPost, setListaPost] = useState([]);

    const getFavorites = async()=>{
        console.log('al iniciar');
        const posts = await firebaseGetFavoritesList();
        setListaPost(posts);
        console.log(posts);
    }

    const removeFavorite = async(idPost)=>{
        console.log(idPost);
        await deleteFavorite(idPost);
        getFavorites();
    };

    let history = useHistory();

    const goToPost = (idPost) => {
      console.log(idPost);
      history.push("/post/" + idPost);
    };

    useEffect(()=>{
        getFavorites();
    },[]);
    return(
    <>
    <h1>listaFavoritos</h1>
    {listaPost.map(post=> (
        <div>
            <Card variant="outlined" sx={{ minHeight: 200 }} key={post.idPost}>
            <CardContent>
                <Typography variant="h6">{post.title} </Typography>
                <Typography variant="p">{post.body} </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    variant="contained" 
                    color="secondary"  
                    onClick={()=>{removeFavorite(post.idPost)}}>
                    Quitar de favoritos <FavoriteBorderIcon />
                </Button>
                <Button variant="outlined" sx={{ml:2}} onClick={()=>{goToPost(post.idPost)}}>
                    <VisibilityIcon />
                </Button>
            </CardActions>

       </Card>
       </div>

    ))}
    </>
    );
};



export default PageFavoritesPosts;
