// import React from 'react'
// import {View, Text,ImageBackground, Image, StyleSheet, Button, TouchableOpacity} from 'react-native'

// class HomeScreen extends React.Component {
//     render() {
//         return(
//         <View style={{justifyContent:"center", alignItems:'center'}}>
//             <ImageBackground source={require('./back.jpeg')} style={styling.background}>
//                 <View style={{paddingTop:60}}>
//                     <Image source={require('./fre.jpg')} style={styling.profilePic} />
//                 </View>
//                     <Text style={styling.profileName}>Ayub Mohammad Ma'ruf</Text>
//                     <Text style={styling.profileIntro}>Hello World,
//                      I am a new student of programming in PondokIT.
//                       I've been learning javascript for a month now, wish me luck.</Text>
//                 <View style={{paddingTop:20}}>    
//                         <TouchableOpacity style={styling.button}>
//                             <Text style={styling.buttonText}>
//                             Edit </Text>
//                         </TouchableOpacity>
//                 </View>
//                 <View style={{paddingTop:20}}>    
//                      <TouchableOpacity style={styling.button}>
//                             <Text style={styling.buttonText}>
//                              Logout </Text>
//                      </TouchableOpacity>
//                 </View>
//             </ImageBackground>
//         </View>
//             )    
// }
// }

// export default HomeScreen

// const styling = StyleSheet.create({
//     background: {
//         width:'100%', height:'100%'
//     },
//     button: {
//         backgroundColor: '#0a1d41', alignSelf: 'center',
//          width: 200, height: 50, borderRadius: 90
//     },
//     buttonText: {
//         color: '#fff', alignSelf: 'center', paddingTop: 8,
//          textAlign: 'center', fontSize: 22
//     },
//     profilePic: {
//         width: 200, height: 200, alignSelf: 'center', 
//         borderWidth: 5, borderRadius: 360, borderColor: '#0a1d41'
//     },
//     profileName: {
//         fontWeight: 'bold', color: '#fff', alignSelf: 'center',
//         paddingTop: 20, fontSize: 30
//     },
//     profileIntro: {
//         color: '#fff', alignSelf: 'center', paddingTop: 20,
//          textAlign: 'center'
//     }
// })


// import React from 'react'
// import {View, Text, FlatList, ActivityIndicator,Image, StatusBar, Modal, TouchableOpacity}from 'react-native'

// export default class PeoplePage extends React.Component {
//     constructor (props) {
//         super (props);
//         this.state = {
//             isLoading : true,
//             dataSource : [],
//             modal:false
//         };
//     }

//     _fetchItem = async () => {
//         this.setState({isLoading : true});
//         try {
//             let response = await fetch ('https://randomuser.me/api/?results=20');
//             let responseJson = await response.json();
//             await this.setState({
//                 isLoading : false,
//                 dataSource : responseJson.results
//             });
//         }
//         catch (error) {
//             console.log(error);
//         }
        
//     } 

//     _separatorComponent = () => {
//         return (
//             <View style={{backgroundColor:'grey', height:0.5}}/>
//         )
//     }

//     _itemComponent = ({ item }) => {
//         return (
//             <View style={{flex : 1, flexDirection : 'row', marginLeft : 10, height : 50}}>
//             <Modal visible = {this.state.modal} >
//                 <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
//                     <Text>{item.name.first}</Text>
//                     <TouchableOpacity onPress={()=>this.setState({modal:false})}>
//                         <Text>Close</Text>
//                     </TouchableOpacity>
//                 </View>
//             </Modal>
//                 <View style = {{justifyContent:'center'}}>
//                 <TouchableOpacity onPress={()=>this.setState({modal:true})}>
//                     <Image source={{uri : item.picture.thumbnail}} style = {{width:40, height:40,
//                      borderRadius:25}}/>
//                 </TouchableOpacity>
//                 </View>
                
//                 <Text style = {{padding : 3}}> {item.name.first},{item.name.last}</Text>
//                 <Text style = {{padding : 3}}> {item.email}</Text>
//             </View>
//         )
//     }
//     componentDidMount () {
//         this._fetchItem()
//     }

//     render () {
//         if (this.state.isLoading) {
//             return (
//                 <View style = {{flex :1, padding : 20}}>
//                     <ActivityIndicator />
//                     <StatusBar barStyle="light-content"/>
//                     <View>
//                         <Text style = {{fontSize : 20, fontWeight : 'bold'}}> User List</Text>
//                     </View>
//                 </View>
//             )
//         }

//         return (
//             <View style = {{flex:1, paddingTop:20}}>
//                 <StatusBar barStyle="dark-content" />
//                 <View>
//                     <Text style = {{fontSize : 20, fontWeight : 'bold'}}> User List</Text>
//                 </View>
                
//                 <View style={{height:"100%",width:"100%",alignItems:'center',justifyContent:'center'}}>
//                   <FlatList
//                     data={this.state.dataSource}
//                     renderItem={this._itemComponent}
//                     keyExtractor={(item, index) => index.toString ()}
//                     onRefresh={this._fetchItem}
//                     refreshing={this.state.isLoading}
//                     ItemSeparatorComponent={this._separatorComponent}
//                     />
//                 </View>

//             </View>
            
//         )
//     }
// }

// import React from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   ActivityIndicator,
//   Image,
//   StatusBar,
//   Modal,
//   TouchableOpacity,
// } from 'react-native';

// export default class PeoplePage extends React.Component {
//   constructor (props) {
//     super (props);
//     this.state = {
//       isLoading: true,
//       dataSource: [],
//       modal: false,
//     };
//   }

//   _fetchItem = async () => {
//     this.setState ({isLoading: true});
//     try {
//       let response = await fetch ('https://datajsonayubmm.000webhostapp.com/Evaluasi%2022%20Feb%202020/tugas_kontak.json');
//       let responseJson = await response.json ();
//       await this.setState ({
//         isLoading: false,
//         dataSource: responseJson.members,
//       });
//     } catch (error) {
//       console.log (error);
//     }
//   };

//   _separatorComponent = () => {
//     return <View style={{backgroundColor: 'grey', height: 0.5}} />;
//   };

//   _itemComponent = ({item}) => {
//     return (
//       <View style={{flex: 1, flexDirection: 'row', marginLeft: 10, height: 200}}>
//         <Modal visible={this.state.modal}>
//           <View
//             style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
//           >
//             <Text>{item.name.first} {item.name.last}</Text>
//             <TouchableOpacity onPress={() => this.setState ({modal: false})}>
//               <Text>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </Modal>
//         <View style={{justifyContent: 'center', width:'30%'}}>
//           <TouchableOpacity onPress={() => this.setState ({modal: true})}
//           style={{justifyContent: 'center', flex:1, alignItems:'center'}}>
//             <Image
//               source={{uri: item.profilepic}}
//               style={{
//                 width:75, height:75,
//                 borderRadius: 90,
//               }}
//             />
//           </TouchableOpacity>
//         </View>
//             <View style={{width:'80%'}}>

//               <Text style={{padding: 3}}> ID            : {item.id}</Text>    
//               <Text style={{padding: 3}}> Nama     : {item.name.first} {item.name.last}</Text>
//               <Text style={{padding: 3}}> Umur      : {item.age} tahun</Text>
//               <Text style={{padding: 3}}> Profesi   : {item.profession}</Text>
//               <Text style={{padding: 3}}> Asal        : {item.location.province}</Text>
//               <Text style={{padding: 3}}> Kontak    : {item.contact.email}</Text>
//               <Text style={{padding: 3}}> Telepon   : {item.contact.phone}</Text>
//               <Text style={{padding: 3}}> Situs        : {item.contact.site}</Text>

//             </View>
//       </View>
//     );
//   };
//   componentDidMount () {
//     this._fetchItem ();
//   }

//   render () {
//     if (this.state.isLoading) {
//       return (
//         <View style={{flex: 1, padding: 20}}>
//           <ActivityIndicator />
//           <StatusBar barStyle="light-content" />
//           <View>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}> User List</Text>
//           </View>
//         </View>
//       );
//     }

//     return (
//       <View style={{flex: 1}}>
//         <StatusBar barStyle="dark-content" />
//         <View style={{backgroundColor:'#0d0d0d', height:50, justifyContent:'flex-end'}}>
//           <Text style={{fontSize: 26, fontWeight: 'bold', color:'#fff'}}> User List</Text>
//         </View>

//         <View
//           style={{
//             width: '100%',
//             alignItems: 'center',
//             justifyContent: 'center'
//           }}
//         >
//           <FlatList
//             data={this.state.dataSource}
//             renderItem={this._itemComponent}
//             keyExtractor={(item, index) => index.toString ()}
//             onRefresh={this._fetchItem}
//             refreshing={this.state.isLoading}
//             ItemSeparatorComponent={this._separatorComponent}
//           />
//         </View>

//       </View>
//     );
//   }
// }

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';

import AppScreens from './screens/navigation';

class App extends React.Component {
  render () {
    return (
    <AppScreens />

    )}
}

export default App;
