import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
import { View, FlatList, StyleSheet, Text } from 'react-native';
const DATA = [
  {
    
    title: 'Books',
  },
  {
    
    title: 'Authors',
  },
  {
  
    title: 'BookPrice',
  },
  {
   
    title: 'Autobioagraphies',
  },
  {
      title: 'BookPrice',
  };




  checkStudentEligibilityForBookIssue = async () => {
    const studentRef = await db
      .collection("students")
      .where("studentId", "==", this.state.scannedStudentId)
      .get();
    var isStudentEligible = "";
    if (studentRef.docs.length == 0) {
      this.setState({
        scannedStudentId: "",
        scannedBookId: ""
      });
      isStudentEligible = false;
      Alert.alert("The student id doesn't exist in the database!");
    } else {
      studentRef.docs.map(doc => {
        var student = doc.data();
        if (student.numberOfBooksIssued < 2) {
          isStudentEligible = true;
        } else {
          isStudentEligible = false;
          Alert.alert("The student has already issued 2 books!");
          this.setState({
            scannedStudentId: "",
            scannedBookId: ""
          });
        }
      });
    }
export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: WriteStoryScreen,
  ReadStory: ReadStoryScreen
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteStory"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "ReadStory"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
  )

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
