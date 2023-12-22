import React from "react";

import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
  Linking,
} from "react-native";
import { Whatsapp_icon } from "../assets/assetIndex";
import { openWhatsApp } from "../utils/utils";

const screen_width = Dimensions.get("screen").width;
const screen_height = Dimensions.get("screen").height;
export default function FloatingBtn({ onPressChatBtn }) {
  return (
    <TouchableOpacity
      onPress={openWhatsApp}
      activeOpacity={0.9}
      style={styles.floatingBtnStyle}
    >
      <Whatsapp_icon height={50} width={50} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  floatingBtnStyle: {
    position: "absolute",
    bottom:
      Platform.OS === "android" ? screen_height * 0 : screen_height * 0.05,
    right: screen_width * 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
