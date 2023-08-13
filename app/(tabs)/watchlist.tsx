import { styles } from "../../styles";
import { View } from "../../components/Themed";
import { FlatList } from "react-native";
import MovieCard from "../../components/MovieCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function WatchListScreen() {
  const data = useSelector((state: RootState) => state.watchlist.movies);
  return (
    <View style={styles.outerContainer}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={data}
        renderItem={({ item }) => (
          <MovieCard movie={item} action={["remove"]} />
        )}
      />
    </View>
  );
}
