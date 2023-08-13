import { styles } from "../../styles";
import { View } from "../../components/Themed";
import { ActivityIndicator, FlatList } from "react-native";
import { useGetMoviesQuery } from "../../store/api/movie";
import MovieCard from "../../components/MovieCard";

export default function HomeScreen() {
  const { data, isLoading } = useGetMoviesQuery(1);

  return (
    <View style={styles.outerContainer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={data?.results}
          renderItem={({ item }) => <MovieCard movie={item} action={["add"]} />}
        />
      )}
    </View>
  );
}
