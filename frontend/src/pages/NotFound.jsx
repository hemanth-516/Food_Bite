import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, SearchX } from 'lucide-react';
import { Button } from '../components/ui/button';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl animate-fadeIn">
        {/* 404 Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
              <SearchX className="h-16 w-16 text-primary" />
            </div>
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-accent/20 rounded-full animate-ping" />
          </div>
        </div>

        {/* 404 Text */}
        <div className="space-y-4">
          <h1 className="text-8xl lg:text-9xl font-bold gradient-text">404</h1>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            Oops! The page you're looking for seems to have been eaten. Let's get you back to something delicious.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => navigate('/')}
            className="text-base px-8 h-12"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/menu')}
            className="text-base px-8 h-12"
          >
            View Menu
          </Button>
        </div>

        {/* Fun Image */}
        <div className="pt-8">
          <img
            src="https://images.pexels.com/photos/9461488/pexels-photo-9461488.jpeg"
            alt="Food"
            className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;