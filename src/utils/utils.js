import React from "react";
import { Linking } from "react-native";

export const openWhatsApp = () => {
  const whatsappUrl = "whatsapp://send?phone=++96181668315";

  Linking.canOpenURL(whatsappUrl).then((supported) => {
    if (supported) {
      Linking.openURL(whatsappUrl);
    } else {
      console.log("WhatsApp is not installed on this device.");
      // You can provide fallback behavior here.
    }
  });
};
