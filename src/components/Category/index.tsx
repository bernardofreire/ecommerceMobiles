// CategorySection.tsx

import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Category {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

interface CategorySectionProps {
  title: string;
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, categories }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <View key={category.id} style={styles.category}>
            <Image
              source={{ uri: category.imageUrl }}
              style={styles.categoryImage}
            />
            <View style={styles.containerItem}>
              <Text style={styles.categoryText}>{category.name}</Text>
              <View style={styles.containerItemDetail}>
                <Text style={styles.categoryPrice}>{category.price}</Text>
                <TouchableOpacity onPress={() => console.log('Add no carrinho')}>
                  <Text style={styles.icon}>🛒</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategorySection;
