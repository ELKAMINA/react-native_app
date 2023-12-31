import React from "react";
import { useState } from "react";
import { useRouter } from "expo-router";
import {
 View,
 Text,
 TouchableOpacity,
 FlatList,
 ActivityIndicator,
} from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
 const router = useRouter();
 const { data, isLoading, error } = useFetch("search", {
  query: "React developer",
  num_pages: 1,
 });

 const [selectedJob, setSelectedJob] = useState();
 return (
  <View styme={styles.container}>
   <View style={styles.header}>
    <Text style={styles.headerTitle}>Popularjobs</Text>
    <TouchableOpacity>
     <Text style={styles.headerBtn}> Show all </Text>
    </TouchableOpacity>
   </View>

   <View style={styles.cardsContainer}>
    {isLoading ? (
     <ActivityIndicator size="large" colors={COLORS.primary} />
    ) : error ? (
     <Text>Something went wrong</Text>
    ) : (
     <FlatList
      data={data}
      renderItem={({ item }) => (
       <PopularJobCard item={item} selectedJob={selectedJob} />
      )}
      keyExtractor={(item) => item.job_id}
      contentContainerStyle={{ columnGap: SIZES.medium }}
      horizontal
     />
    )}
   </View>
  </View>
 );
};

export default Popularjobs;
