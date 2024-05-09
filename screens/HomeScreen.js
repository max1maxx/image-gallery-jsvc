import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getImages } from "../api/pexels";
import ImageList from "../components/ImageList";

const HomeScreen = () => {
  const [photos, setPhotos] = useState([]);

  const loadImages = async () => {
    const res = await getImages();
    console.log(res.headers);
    setPhotos(res.data.photos);
  };
  useEffect(() => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    loadImages();
  }, []);

  return (
    <View>
      <ImageList photos={photos} />
    </View>
  );
};

export default HomeScreen;
