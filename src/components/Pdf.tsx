import React, { FC } from "react";
import { StyleSheet, Document, Page, View, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 100,
    padding: 10,
    flexGrow: 1,
  },

  text: {
    fontSize: 20,
    color: "blue",
  },
});

interface PdfProp {
  section: string;
}
const Pdf: FC<PdfProp> = ({ section }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.text}>{section}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;
