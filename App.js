import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";

export default function App() {
  const user = {
    id: "@octocat",
    name: "The Octocat",
    image: "./assets/gitcat.png",
    joinedDate: "25 Jan 20211",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam porro eos a impedit dicta. Blanditiis? Aperiam amet.",
    repos: 8,
    followers: 3938,
    following: 9,
    location: "San Francisco",
    website: "https://github.blog",
    twitter: "Not Available",
    company: "@GitHub",
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Image
            source={require("./assets/gitcat.png")}
            style={{ width: 90, height: 90 }}
          />
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              {user.name}
            </Text>
            <Text style={{ fontSize: 16, color: "#7cb2ff" }}>{user.id}</Text>
            <Text style={{ fontSize: 15, color: "gray", marginTop: 5 }}>
              Joined {user.joinedDate}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 15,
            color: "gray",
            marginTop: 40,
            marginBottom: 30,
            textAlign: 'justify'
          }}
        >
          {user.about}
        </Text>
        <View style={styles.stats}>
          <View
            style={styles.statsSubDiv}
          >
            <Text
              style={styles.statsTitle}
            >
              Repos
            </Text>
            <Text
              style={styles.statsValue}
            >
              {user.repos}
            </Text>
          </View>
          <View
            style={styles.statsSubDiv}
          >
            <Text
              style={styles.statsTitle}
            >
              Followers
            </Text>
            <Text
              style={styles.statsValue}
            >
              {user.followers}
            </Text>
          </View>
          <View
            style={styles.statsSubDiv}
          >
            <Text
              style={styles.statsTitle}
            >
              Following
            </Text>
            <Text
              style={styles.statsValue}
            >
              {user.following}
            </Text>
          </View>
        </View>

        <View style={{marginTop: 40, flexDirection: 'column', gap: 20}}>
         <View style={styles.header}>
         <Image source={require('./assets/003-pin.png')}/>
          <Text style={styles.statsTitle}>{user.location}</Text>
         </View>
         <View style={styles.header}>
         <Image source={require('./assets/002-url.png')}/>
          <Text style={styles.statsTitle}>{user.website}</Text>
         </View>
         <View style={{ flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    gap: 20,
}}>
         <Image source={require('./assets/004-twitter.png')} style={{tintColor: "#d1d5db"}}/>
          <Text style={{ fontSize: 15, color: "#d1d5db",}}>{user.twitter}</Text>
         </View>
         <View style={styles.header}>
         <Image source={require('./assets/001-office-building.png')}/>
          <Text style={styles.statsTitle}>{user.company}</Text>
         </View>
         

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7ff",
    alignItems: "center",
    padding: 20,
    marginTop: StatusBar.currentHeight
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 5,
    width: "100%",
    padding: 28,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    gap: 20,
  },
  stats: {
    backgroundColor: "#f5f7ff",
    padding: 24,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
  },
  statsSubDiv: {
    flexDirection: "col",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  statsTitle: {
    fontSize: 15,
    color: "gray",
  },
  statsValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
