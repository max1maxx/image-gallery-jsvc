import { View, Text } from "react-native";
import React from "react";

const ImageScreen = () => {
  const ImageScreen = ({ route }) => {
    const { image } = route.params;
    const [images, setImages] = useState([]);
    return (
      <View>
        <Text>ImageScreen</Text>
      </View>
    );
  };
};
export default ImageScreen;
