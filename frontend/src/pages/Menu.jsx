import React, { useState } from 'react';
import { Search, Star, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { toast } from 'sonner';

export const Menu = ({ addToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'burgers', name: 'Burgers' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'salads', name: 'Salads' },
    { id: 'desserts', name: 'Desserts' },
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Classic Cheeseburger',
      description: 'Juicy beef patty with cheese, lettuce, tomato, and special sauce',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1446611983031-127e7aa3794a',
      category: 'burgers',
      rating: 4.7,
      popular: true,
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      description: 'Fresh mozzarella, tomato sauce, and basil on thin crust',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1615719413546-198b25453f85',
      category: 'pizza',
      rating: 4.8,
      popular: true,
    },
    {
      id: 3,
      name: 'Caesar Salad',
      description: 'Romaine lettuce, parmesan, croutons, and Caesar dressing',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1640798629665-cb874ae363d2',
      category: 'salads',
      rating: 4.6,
      popular: false,
    },
    {
      id: 4,
      name: 'BBQ Bacon Burger',
      description: 'Beef patty, crispy bacon, BBQ sauce, onion rings, and cheddar',
      price: 15.99,
      image: 'https://images.pexels.com/photos/3023476/pexels-photo-3023476.jpeg',
      category: 'burgers',
      rating: 4.9,
      popular: true,
    },
    {
      id: 5,
      name: 'Pepperoni Pizza',
      description: 'Loaded with pepperoni and mozzarella cheese',
      price: 16.99,
      image: 'https://images.pexels.com/photos/4929671/pexels-photo-4929671.jpeg',
      category: 'pizza',
      rating: 4.7,
      popular: true,
    },
    {
      id: 6,
      name: 'Greek Salad',
      description: 'Mixed greens, feta cheese, olives, cucumber, and tomatoes',
      price: 10.99,
      image: 'https://images.pexels.com/photos/9461488/pexels-photo-9461488.jpeg',
      category: 'salads',
      rating: 4.5,
      popular: false,
    },
    {
      id: 7,
      name: 'Veggie Burger',
      description: 'Plant-based patty with avocado, sprouts, and chipotle mayo',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1446611983031-127e7aa3794a',
      category: 'burgers',
      rating: 4.6,
      popular: false,
    },
    {
      id: 8,
      name: 'Hawaiian Pizza',
      description: 'Ham, pineapple, and mozzarella on tomato sauce base',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1615719413546-198b25453f85',
      category: 'pizza',
      rating: 4.4,
      popular: false,
    },
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fadeIn">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Our <span className="gradient-text">Menu</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our delicious selection of freshly prepared meals
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 animate-fadeIn">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fadeIn">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full px-6"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No items found matching your search</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="overflow-hidden food-card animate-fadeIn"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative h-56">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {item.popular && (
                    <Badge className="absolute top-3 left-3 bg-primary">
                      Popular
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 bg-card px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-primary fill-primary" />
                    <span className="text-sm font-semibold">{item.rating}</span>
                  </div>
                </div>
                <CardContent className="p-5 flex flex-col">
                  <h3 className="font-bold text-foreground text-lg mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-primary">${item.price.toFixed(2)}</span>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(item)}
                      className="rounded-full group"
                    >
                      <Plus className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform" />
                      Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;