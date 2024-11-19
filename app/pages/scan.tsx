import { Camera,CameraCapturedPicture,CameraView, useCameraPermissions } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import { useRef } from 'react';
import { Button, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View  } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import MlkitOcr, { MlkitOcrResult } from 'react-native-mlkit-ocr';

import CameraButton from '@/components/CameraButton';
import InfoText from '@/components/InfoText';

export default function Scan() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    requestPermission();
    return (
      <View style={{backgroundColor: 'black'}}/>
    );
  }

  const onCameraButton = async () => {
    // if(!cameraRef)
    //   return;

    // let pictureUri: string = "";

    // try {
    //   const picture = await cameraRef.current?.takePictureAsync({imageType: 'jpg'});
    //   if(picture?.uri)
    //     pictureUri = picture.uri;
    // } catch {
    //   return;
    // } 

    await takePictureAndExtractText();
  };

  const takePictureAndExtractText = async () => {
    if (!cameraRef.current) 
      return

    const photo = await cameraRef.current.takePictureAsync();
    console.log(photo); // File path to the photo

    // Perform OCR
    // try {
    //   const result = await MLKit.detectFromUri(photo.uri);
    //   console.log('OCR Result: ', result);
    // } catch (error) {
    //   console.error('Error with OCR: ', error);
    // }
  }

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={'back'} >
        <View style={styles.buttonContainer}>
          <InfoText>scan de brief</InfoText>
          <CameraButton onPress={onCameraButton}/>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },
  camera: {
    flex: 1,
    marginTop: -47
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    margin: 64,
  }
});