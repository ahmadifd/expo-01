import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";

export default function App() {
  console.log("Hello Farshid Ahmadi");

  return (
    <PaperProvider>
      <MessagesScreen />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
{
  /* <View
        style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}
      >
        <Card>
          <Card.Cover source={jacket} />
          <Card.Title
            subtitleStyle={{ color: colors.secondary }}
            style={{}}
            title="Red jacker for Sale"
            subtitle="$100"
          ></Card.Title>
        </Card>
 
      </View> */
}
