import Plant from '../../../assets/svg/Plant.svg';
import {Text, Image} from 'react-native'
const size = 500;

export function PlantOne({name, imagen}) {
  return (
<>
  <Image
        style={{width: 200, height: 200}}
        source={{
          uri: imagen,
        }}
      />

  <Text style={{color:'#fff', fontSize: 50}}>{name}</Text>

  {
/*
   <Plant width={size} height={size} />
*/ 
 } 
</>


  )
}