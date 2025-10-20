import React, { useEffect, useState, useRef } from 'react';
import { Users, Heart, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export const About = () => {
  const [counters, setCounters] = useState({
    customers: 0,
    restaurants: 0,
    orders: 0,
    rating: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  const finalValues = {
    customers: 50000,
    restaurants: 200,
    orders: 1000000,
    rating: 4.8,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        customers: Math.floor(finalValues.customers * progress),
        restaurants: Math.floor(finalValues.restaurants * progress),
        orders: Math.floor(finalValues.orders * progress),
        rating: (finalValues.rating * progress).toFixed(1),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters({
          customers: finalValues.customers,
          restaurants: finalValues.restaurants,
          orders: finalValues.orders,
          rating: finalValues.rating.toFixed(1),
        });
      }
    }, stepDuration);
  };

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction in everything we do, ensuring every meal brings joy.',
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'Only the best restaurants and freshest ingredients make it to your table.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Supporting local restaurants and bringing communities together through food.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Constantly improving our service with cutting-edge technology and feedback.',
    },
  ];

  const milestones = [
    { year: '2019', event: 'QuickBite Founded', description: 'Started with a vision to revolutionize food delivery' },
    { year: '2020', event: 'Expanded to 5 Cities', description: 'Rapid growth despite challenging times' },
    { year: '2021', event: 'Reached 100K Orders', description: 'Milestone achievement in customer satisfaction' },
    { year: '2023', event: 'Award Winning Service', description: 'Recognized as Best Food Delivery App' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12 space-y-4 animate-fadeIn">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            About <span className="gradient-text">QuickBite</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make delicious food accessible to everyone, connecting people with their favorite restaurants through seamless technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <img
            src="https://images.pexels.com/photos/4929671/pexels-photo-4929671.jpeg"
            alt="About QuickBite"
            className="w-full h-96 object-cover rounded-2xl shadow-2xl animate-fadeIn"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slideInLeft">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  At QuickBite, we believe everyone deserves access to delicious, quality food without the hassle. We're committed to creating meaningful connections between restaurants and customers, supporting local businesses while delivering exceptional experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through innovation, reliability, and a passion for food, we're building a platform that goes beyond just delivery—we're creating a community of food lovers.
                </p>
              </div>
              <div className="animate-slideInRight">
                <img
                  src="https://images.pexels.com/photos/3023476/pexels-photo-3023476.jpeg"
                  alt="Our mission"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Counters */}
      <section ref={counterRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground">Numbers that tell our story</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold gradient-text">
                {counters.customers.toLocaleString()}+
              </div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold gradient-text">
                {counters.restaurants}+
              </div>
              <p className="text-muted-foreground">Restaurant Partners</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold gradient-text">
                {counters.orders.toLocaleString()}+
              </div>
              <p className="text-muted-foreground">Orders Delivered</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold gradient-text">
                {counters.rating}
              </div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our story
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative mb-12 animate-fadeIn ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="md:flex md:items-center">
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                      <Card className="border-2 hover:border-primary transition-all duration-300">
                        <CardContent className="p-6 space-y-2">
                          <div className="text-2xl font-bold gradient-text">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-foreground">{milestone.event}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-card" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;