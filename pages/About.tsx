import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Our Story</h1>
        <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
      </div>

      <div className="prose prose-lg prose-stone mx-auto">
        <p className="lead text-xl text-stone-600 mb-8 text-center italic">
          "We believe that a great drink is more than just a beverage—it's a moment of pause in a busy world."
        </p>

        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://picsum.photos/seed/aboutus/1200/600" 
            alt="Our Roastery" 
            className="w-full h-auto object-cover"
          />
        </div>

        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">The Beginning</h3>
        <p className="mb-6">
          Founded in 2015, Bean & Brew Co. started in a small garage with a 5kg roaster and a passion for quality. We realized that while many places sold coffee, few offered the flexibility of bulk purchasing for true enthusiasts, or the convenience of ready-to-pour gallons of tea and lemonade for gatherings.
        </p>

        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">Our Mission</h3>
        <p className="mb-6">
          We source our beans directly from sustainable farms, ensuring that the farmers are paid fairly and the land is treated with respect. Our teas are brewed from whole leaves, and our lemonades use real fruit—never concentrate.
        </p>

        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">Community</h3>
        <p>
          We are more than just a shop. We are a community of drink lovers. Whether you are buying a monthly subscription or just a gallon of sweet tea for a Sunday picnic, we treat every order with the same care and attention to detail.
        </p>
      </div>
    </div>
  );
};

export default About;