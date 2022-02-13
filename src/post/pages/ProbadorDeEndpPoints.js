import React, { useState } from "react";
import createPost from "../hooks/createPost";
import deletePost from "../hooks/deletePost";
import deleteFavorite from "../hooks/firebaseDeleteFavorite";
import updateOrCreateFavorite from "../hooks/firebaseUpdateOrCreateFavorite";
import getPostById from "../hooks/getPostById";
import updatePost from "../hooks/updatePost";
import getPostList from "../hooks/getPostList";
import firebaseGetFavoritesList from "../hooks/firebaseGetFavoriteList";

const ProbadorDeEndPoints = ({ user }) => {
  const [respuesta, setRespuesta] = useState(
    "aqui se ve la respuesta de cada endpoint"
  );
  console.log(user.uid);

  const handleCreate = async (uid, title, body) => {
    console.log(uid, title, body);
    const response = await createPost(uid, title, body);
    console.log(response);
    setRespuesta(response);
  };

  const handleGetPostById = async (id) => {
    const response = await getPostById(id);
    console.log(response);
    setRespuesta(response);
  };

  const handleUpdatePostById = async (id, title, body) => {
    const response = await updatePost(id, title, body);
    console.log(response);
    setRespuesta(response);
  };

  const handleDeletePostById = async (id) => {
    const response = await deletePost(id);
    console.log(response);
    setRespuesta(response);
  };

  const handleFirebaseGetFavorites = async (id) => {
    const response = await firebaseGetFavoritesList();
    console.log(response);
    setRespuesta(response);
  };

  const handleCreateFavoriteById = async (id, title, body) => {
    const response = await updateOrCreateFavorite(id, title, body);
    console.log(response);
    setRespuesta(response);
  };

  const handleDeleteFavoriteById = async (id) => {
    const response = await deleteFavorite(id);
    console.log(response);
    setRespuesta(response);
  };

  const handleUpdateOrCreateFavoriteById = async (id, title, body) => {
    const response = await updateOrCreateFavorite(id, title, body);
    console.log(response);
    setRespuesta(response);
  };

  const handlePostList = async (uid) => {
    const response = await getPostList(uid);
    console.log(response);
    setRespuesta(response);
  };

  return (
    <>
      <h1>Probador</h1>
      <p>api</p>
      <button
        onClick={() => {
          handleCreate(user.uid, "jueves", " nuevo body");
        }}
      >
        nuevo Post
      </button>
      <button
        onClick={() => {
          handleGetPostById(2198);
        }}
      >
        get Post by id 2198
      </button>
      <button
        onClick={() => {
          handleUpdatePostById(2198, "nuevo titulo", "otro body");
        }}
      >
        update Post by 2195
      </button>
      <button
        onClick={() => {
          handleDeletePostById(2197);
        }}
      >
        delete Post by id
      </button>
      <button
        onClick={() => {
          handlePostList(user.uid);
        }}
      >
        traer lista
      </button>

      <p>favoritos</p>
      <button
        onClick={() => {
          handleCreateFavoriteById(2191, "title fav", "body fav");
        }}
      >
        Create Favorite FB 2191
      </button>
      <button
        onClick={() => {
          handleDeleteFavoriteById(2191);
        }}
      >
        Delete Favorite FB 2195
      </button>
      <button
        onClick={() => {
          handleUpdateOrCreateFavoriteById(2191, "title fav", "body fav");
        }}
      >
        Update Favorite FB 2191
      </button>
      <button
        onClick={() => {
          handleFirebaseGetFavorites();
        }}
      >
        getFavorites FB
      </button>

      <p>{JSON.stringify(respuesta)}</p>
    </>
  );
};

export default ProbadorDeEndPoints;
