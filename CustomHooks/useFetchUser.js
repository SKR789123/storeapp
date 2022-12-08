import { useState, useEffect } from "react";
import { Alert } from "react-native";



const useFetchUser = (url) => {

  const [data, setData] = useState(null);
  const [userdata ,setUserdata] = useState(null)

  useEffect(() => {

    let mounted = true

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        
        if(mounted){
          setData(data)
        //creating a userinformation object to easily render on by mapping on product page
        const userDataObject = [
          {
            id:1,
            iconName:'cake',
            title:'Birth date',
            value:data.birthDate
          },
          {
            id:2,
            iconName:data.gender=='male'?'gender-male':'gender-female',
            title:'',
            value:data.gender.charAt(0).toUpperCase() + data.gender.slice(1)
          },
          {
            id:3,
            iconName:'phone',
            title:'Contact',
            value:data.phone
          },
          {
            id:4,
            iconName:'school',
            title:'Studies at',
            value:data.university
          },
          {
            id:5,
            iconName:'map-marker-minus',
            title:'From',
            value:data.address.city
          },
          {
            id:6,
            iconName:'bank',
            title:'Work at',
            value:data.company.name
          },
          {
            id:7,
            iconName:'briefcase-variant',
            title:'Work as a',
            value:data.company.title
          },
        ]
  
        setUserdata(userDataObject)
        }

      })
      .catch(err=>{
        setData('empty')
        Alert.alert(err.message)
      })

      return cleanup = ()=>{
        mounted=false
      }
      

  }, [url]);
  
  
  return [data,userdata];
};

export default useFetchUser;