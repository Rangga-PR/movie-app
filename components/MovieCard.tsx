import React, { useState } from "react";
import type { Movie } from "../types";
import { Button, Card, Text, Snackbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { generateImgUrl } from "../utils";
import { useDispatch } from "react-redux";
import { addMovie, removeMovie } from "../store/slice/watchlist";

type Action = "add" | "remove";

interface MovieCardProps {
  movie: Movie;
  action?: Action[];
}

function MovieCard({ movie, action = [] }: MovieCardProps) {
  const dispatch = useDispatch();
  const [notif, setNotif] = useState("");

  const handleAddToWatchlist = () => {
    dispatch(addMovie(movie));
    setNotif("Added to watchlist");
  };

  const handleRemoveFromWatchlist = () => {
    dispatch(removeMovie(movie));
  };

  const handleDismissNotif = () => setNotif("");

  return (
    <>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: generateImgUrl(movie.poster_path) }} />
        <Card.Title title={movie.title} />
        <Card.Content style={styles.cardContent}>
          <Text numberOfLines={5}>{movie.overview}</Text>
        </Card.Content>
        <Card.Actions>
          {action.includes("add") && (
            <Button onPress={handleAddToWatchlist}>Add to Watchlist</Button>
          )}
          {action.includes("remove") && (
            <Button onPress={handleRemoveFromWatchlist}>
              Remove from Watchlist
            </Button>
          )}
        </Card.Actions>
      </Card>
      <Snackbar
        visible={Boolean(notif)}
        duration={1000}
        onDismiss={handleDismissNotif}
      >
        {notif}
      </Snackbar>
    </>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 24 },
  cardContent: { marginBottom: 10 },
});

export default MovieCard;
