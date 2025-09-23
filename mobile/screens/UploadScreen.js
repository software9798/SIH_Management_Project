import React, { useState } from "react";
import { View, Text, Button, TextInput, Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";

export default function UploadScreen({ navigation }) {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") return Alert.alert("Permission denied");
    let loc = await Location.getCurrentPositionAsync({});
    setLocation({ lat: loc.coords.latitude, lng: loc.coords.longitude });
    Alert.alert("Location captured");
  };

  const submitComplaint = async () => {
    if (!name || !photo || !location) return Alert.alert("Fill all fields and capture location");
    try {
      await axios.post("http://10.0.2.2:5000/api/complaints", {
        citizenName: name,
        photo,
        location
      });
      Alert.alert("Complaint submitted!");
      navigation.navigate("Status");
    } catch (err) {
      console.log(err);
      Alert.alert("Error submitting complaint");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Photo URL (or paste cloud URL):</Text>
      <TextInput value={photo} onChangeText={setPhoto} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Get Location" onPress={getLocation} />
      <View style={{ height: 10 }} />
      <Button title="Submit Complaint" onPress={submitComplaint} />
    </View>
  );
}
