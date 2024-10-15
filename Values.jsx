
import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { launchCamera } from 'react-native-image-picker'

const Values = () => {
  const [captureimaeg, setCaptureimage] = useState('');
  const open_camera = async () => {
    const result = await launchCamera({ mediaType: 'photo', selectionLimit: 4 })
    console.log(result)
    if (result) {
      const img_src = result.assets[0].uri;
      setCaptureimage(img_src)
    }

  }
  return (
    
    <ScrollView>


      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        {
          captureimaeg ?
            <Image source={{ uri: captureimaeg }} width={400} height={400} />
            : null
        }
        <Text>
          Raahim
        </Text>

        <View>
          <Text>
            Raahim
            Raahim is a good boy
            <Image resizeMode='cover' width={200} height={200} source={{ uri: 'https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg' }} />

          </Text>
          <TouchableOpacity onPress={open_camera} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', marginTop: '4rem' }}>
            <Text style={{ fontSize: 40 }}>Click Me</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Click Me</Text>

          </TouchableOpacity>

          <Text style={{ color: 'red', backgroundColor: 'yellow' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti nam, non quidem nostrum recusandae inventore quos. Nostrum, suscipit magni. Neque quibusdam facere quod unde ullam ducimus quaerat dicta? Provident?</Text>
        </View>
      </View>






<View>
  <Text>Raahim</Text>
</View>
    </ScrollView>







  )
}

export default Values
