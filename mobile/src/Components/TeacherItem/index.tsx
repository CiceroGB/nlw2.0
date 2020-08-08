import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


import styles from './styles';

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>

        <Image
          style={styles.avatar}
          source={{ uri: 'https://avatars1.githubusercontent.com/u/63745509?s=460&u=e109864234f83424253a3ebe205835e0db7894e7&v=4' }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>
            Nomes
            </Text>
          <Text style={styles.subject}>
            Matérias
            </Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Bio bio
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'  '}
          <Text style={styles.priceValue}>
            R$ 50,00
          </Text>
        </Text>
        <View style={styles.buttonContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutLineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>


          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>
              Entrar em contato
            </Text>
          </RectButton>

        </View>
      </View>
    </View>
  );
}

export default TeacherItem;