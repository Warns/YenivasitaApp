// import React from 'react';
// import {
//   StyleSheet,
//   AppRegistry,
//   Text,
//   Button,
//   ScrollView,
//   Image,
//   View,
// } from 'react-native';
// import { StackNavigator } from 'react-navigation';
// var styles = require('./build/styles.js');
//
// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Hello World',
//     headerStyle:{ backgroundColor: '#377BCE'},
//     headerTitleStyle:{ color: '#ffffff'},
//   };
//
//   render() {
//     const { navigate } = this.props.navigation;
//
//     var json = require('./data/sample.json');
//     var data = json.data;
//
//     var requests = [];
//
//     for(var i=0; i<data.length; i++)
//     {
//       requests.push( <Request key={i} title={data[i].title} desc={data[i].rqs_text} location={data[i].cty_title} time={data[i].ago} /> )
//     }
//
//     return (
//
//       <View style={styles.ground}>
//       <ScrollView contentContainerStyle={styles.container}>
//
//         {requests}
//
//       </ScrollView>
//       </View>
//     );
//   }
// }
//
// class Request extends React.Component {
//   render() {
//     return (
//       <View style={styles.request}>
//         <View style={styles.requestLeft}>
//           <View style={styles.newIcon}>
//             <Text style={styles.newIconText}>Yeni</Text>
//           </View>
//         </View>
//         <View style={styles.requestCenter}>
//         {/* added numberOfLines={1} to limit car's title to 1 line. */}
//           <Text style={styles.medium} numberOfLines={1}>{this.props.title}</Text>
//           <Text style={styles.small}>{this.props.desc}</Text>
//           <View style={styles.requestLocation}>
//             <Image source={require('./img/0.png')} style={{width:24, height:24}} />
//             <Text style={styles.blueText}>{this.props.location}</Text>
//           </View>
//         </View>
//         <View style={styles.requestRight}>
//           <Text style={[styles.tiny, styles.requestTime]}>{this.props.time}</Text>
//         </View>
//       </View>
//     );
//   }
// }
//
// function onPressLearnMore() {
//     alert(this.accessibilityLabel)
// }
//
// class DetailScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Hasan',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <Button style={styles.DetailScreen}
//         title="Go Home"
//         onPress={() =>
//           navigate('Home')
//         }
//       />
//     );
//   }
// }
//
// const YenivasitaApp = StackNavigator({
//   Home: { screen: HomeScreen },
//   Detail: { screen: DetailScreen },
// });
//
// export default YenivasitaApp
//
// AppRegistry.registerComponent('YenivasitaApp', () => YenivasitaApp);
