import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const Cart: React.FC = () => {
  // Exemplo de produtos no carrinho
  const cartItems: Product[] = [
    {
      id: "1",
      name: "T-Shirt",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1556740738-2eec48a3e2df",
    },
    {
      id: "2",
      name: "Jeans",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1501869070807-88b5438f7740",
    },
    {
      id: "3",
      name: "Sneakers",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1599015702686-e6d080bf03fe",
    },
  ];

  // Função para calcular o total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Carrinho de Compras</Text>
      </View>

      {/* Cart Items */}
      <ScrollView style={styles.cartContainer}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.cartItemDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Total */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
