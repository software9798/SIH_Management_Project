import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";

export default function StatusScreen() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://10.0.2.2:5000/api/complaints");
        setComplaints(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={complaints}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10, borderBottomWidth: 1 }}>
            <Text>Name: {item.citizenName}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}
