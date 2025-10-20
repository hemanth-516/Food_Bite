import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, Shield, Star, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Get your food delivered hot and fresh in 30 minutes or less',
    },
    {
      icon: Star,
      title: 'Top Quality',
      description: 'Only the finest ingredients from trusted restaurant partners',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Contactless delivery and secure payment options',
    },
  ];

  const popularDishes = [
    {
      id: 1,
      name: 'Gourmet Pizza',
      image: 'https://images.unsplash.com/photo-1615719413546-198b25453f85',
      rating: 4.8,
      orders: '2.5k+',
    },
    {
      id: 2,
      name: 'Fresh Salad Bowl',
      image: 'https://images.unsplash.com/photo-1640798629665-cb874ae363d2',
      rating: 4.9,
      orders: '1.8k+',
    },
    {
      id: 3,
      name: 'Classic Burger',
      image: 'https://images.unsplash.com/photo-1446611983031-127e7aa3794a',
      rating: 4.7,
      orders: '3.2k+',
    },
    {
      id: 4,
      name: 'Deluxe Meal',
      image: 'https://images.pexels.com/photos/3023476/pexels-photo-3023476.jpeg',
      rating: 4.8,
      orders: '2.1k+',
    },
  ];

  const stats = [
    { label: 'Happy Customers', value: '50K+' },
    { label: 'Restaurant Partners', value: '200+' },
    { label: 'Cities Covered', value: '15+' },
    { label: 'Orders Delivered', value: '1M+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1641301547846-2cf73f58fdca)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <TrendingUp className="h-4 w-4" />
                <span>Fastest Food Delivery in Town</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Delicious Food
                <br />
                <span className="gradient-text">Delivered Fast</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Order from your favorite restaurants and get hot, fresh meals delivered to your doorstep in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-base px-8 h-12 group"
                  onClick={() => navigate('/menu')}
                >
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 h-12"
                  onClick={() => navigate('/menu')}
                >
                  View Menu
                </Button>
              </div>
            </div>

            {/* Floating Image - Desktop Only */}
            <div className="hidden lg:block relative animate-float">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg"
                  alt="Food delivery"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl animate-scaleIn">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Delivery Time</p>
                      <p className="font-bold text-foreground">30 Minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-3xl lg:text-4xl font-bold gradient-text">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Why Choose <span className="gradient-text">QuickBite</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make food delivery simple, fast, and reliable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Popular <span className="gradient-text">Dishes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out what everyone's ordering
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDishes.map((dish, index) => (
              <Card
                key={dish.id}
                className="overflow-hidden food-card cursor-pointer animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate('/menu')}
              >
                <div className="relative h-48">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-card px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-primary fill-primary" />
                    <span className="text-sm font-semibold">{dish.rating}</span>
                  </div>
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-bold text-foreground">{dish.name}</h3>
                  <p className="text-sm text-muted-foreground">{dish.orders} orders</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => navigate('/menu')}>
              View Full Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Ready to Order?
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Join thousands of satisfied customers enjoying delicious meals delivered fast
            </p>
            <Button size="lg" className="text-base px-8 h-12" onClick={() => navigate('/menu')}>
              Start Ordering Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;