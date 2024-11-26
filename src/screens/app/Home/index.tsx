import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import CategorySection from '../../../components/Category';

// Tipando o useNavigation
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {

  //   useEffect(() => {
  //     // Verificar se o usuário está logado
  //     const authToken = sessionStorage.getItem('authToken');
  //     const userEmail = sessionStorage.getItem('email');

  //     if (!authToken) {
  //       Alert.alert('Sessão Expirada', 'Redirecionando para login.', [
  //         { text: 'OK', onPress: () => console.log('Redirecionar para login') },
  //       ]);
  //     } else {
  //       console.log('Email do usuário autenticado:', userEmail);
  //     }
  //   }, []);

  //   const handleLogout = () => {
  //     sessionStorage.removeItem('authToken');
  //     Alert.alert('Logout', 'Você foi desconectado.', [
  //       { text: 'OK', onPress: () => console.log('Redirecionar para login') },
  //     ]);
  //   };

  const navigation = useNavigation<HomeScreenNavigationProp>();


  const roupas = [
    {
      id: '1',
      name: 'Men',
      imageUrl: 'https://images.unsplash.com/photo-1617137968427-85924c800a22',
      price: "R$12,90",
    },
    {
      id: '2',
      name: 'Women',
      imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b',
      price: "R$12,90",
    },
    {
      id: '3',
      name: 'Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26',
      price: "R$12,90",
    },
  ];


  const acessorios = [
    {
      id: '1',
      name: 'Men',
      imageUrl: 'https://images.unsplash.com/photo-1617137968427-85924c800a22',
      price: "R$12,90",
    },
    {
      id: '2',
      name: 'Women',
      imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b',
      price: "R$12,90",
    },
    {
      id: '3',
      name: 'Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26',
      price: "R$12,90",
    },
  ];

  const tenis = [
    {
      id: '1',
      name: 'Men',
      imageUrl: 'https://images.unsplash.com/photo-1617137968427-85924c800a22',
      price: "R$12,90",
    },
    {
      id: '2',
      name: 'Women',
      imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b',
      price: "R$12,90",
    },
    {
      id: '3',
      name: 'Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26',
      price: "R$12,90",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>


        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>Fashion Store</Text>
          <View style={styles.headerRight}>
            {/* <TouchableOpacity onPress={() => console.log('Produtos')}>
              <Text style={styles.icon}>🛍️</Text>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Text style={styles.icon}>🛒</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutButton}>
              <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>


        {/* Hero Section */}
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFzaGlvbnx8fHx8fDE2NDYyNjI0MjA&ixlib=rb-1.2.1&q=80&w=1080",
          }}
          style={styles.hero}
        >
          <Text style={styles.heroTitle}>Summer Collection 2024</Text>
          <TouchableOpacity style={styles.heroButton}>
            <Text style={styles.heroButtonText}>Shop Now</Text>
          </TouchableOpacity>
        </ImageBackground>


        {/* Categories */}
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.content}>
            <CategorySection title="Roupas" categories={roupas} />
            <CategorySection title="Acessórios" categories={acessorios} />
            <CategorySection title="Tênis" categories={tenis} />

            {/* Outras seções podem ser adicionadas aqui */}

          </ScrollView>
        </View>
      </ScrollView>


      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2024 Fashion Store. Todos os Direitos Reservados.
        </Text>
      </View>
    </View>
  );
};

export default Home;