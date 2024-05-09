import { TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CardImage = ({ image }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
    style={styles.CardImage}
    onPress={() => navigation.navigate('ImageScreen')}
    >
      <Image
        source={{
          uri: image.src.small
            ? image.src.small
            : "https://cdn.iconscout.com/icon/free/png-512/no-image-1771002-1505134.png",
        }}
        style={{ height: 180, width: "100%", borderRadius: 5 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  CardImage: {
    display: "flex",
    width: "49.5%",
    margin: 4,
    justifyContent: "space-between",
    backgroundColor: "#2c292c",
    borderWidth: 0,
    borderRadius: 5,
  },
});

export default CardImage;
