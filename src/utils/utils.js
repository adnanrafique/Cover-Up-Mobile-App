import React from "react";
import { Alert, Linking } from "react-native";

export const openWhatsApp = () => {
  const whatsappUrl = "whatsapp://send?phone=++96181668315";

  Linking.canOpenURL(whatsappUrl).then((supported) => {
    if (supported) {
      Linking.openURL(whatsappUrl);
    } else {
      Alert.alert("WhatsApp is not installed on this device.");
    }
  });
};
