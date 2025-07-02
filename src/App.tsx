import React, { useState } from 'react';
import { 
  ChefHat, 
  Users, 
  Truck, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Zap, 
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapIcon,
  Smartphone,
  X,
  Upload,
  Clock,
  DollarSign
} from 'lucide-react';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    recipeName: '',
    biryaniType: '',
    description: '',
    ingredients: '',
    instructions: '',
    servings: '',
    cookingTime: '',
    specialIngredients: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Biryani recipe submitted:', formData);
    // Handle form submission here
    alert('Thank you! Your biryani recipe has been submitted. We\'ll be in touch within 24 hours to discuss your local biryani business.');
    setShowForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      recipeName: '',
      biryaniType: '',
      description: '',
      ingredients: '',
      instructions: '',
      servings: '',
      cookingTime: '',
      specialIngredients: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-gray-900">BiryaniPro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#success-stories" className="text-gray-600 hover:text-gray-900 transition-colors">Success Stories</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <button 
                onClick={() => setShowForm(true)}
                className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                Submit Biryani Recipe
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Biryani Background */}
      <section 
        className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/90 text-white text-sm font-medium mb-8">
              <Zap className="h-4 w-4 mr-2" />
              Launch Your Local Biryani Business in 30 Days
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Submit Your
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent"> Biryani Recipe</span>
              <br />We Handle Everything Else
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Share your family's secret biryani recipe and market it within your 5km radius. We handle brand registration, 
              professional cooking, delivery logistics, and app maintenance. Focus on your local community while we scale your biryani business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setShowForm(true)}
                className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Submit Your Biryani Recipe
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">200+</div>
              <div className="text-gray-600">Local Biryani Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-500 mb-2">500K+</div>
              <div className="text-gray-600">Biryani Deliveries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">$25M+</div>
              <div className="text-gray-600">Creator Revenue</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">5km</div>
              <div className="text-gray-600">Average Delivery Radius</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works with Biryani Background */}
      <section 
        id="how-it-works" 
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple partnership model: You create biryani recipes and market locally, we handle everything else
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group bg-white/80 backdrop-blur-sm p-6 rounded-2xl">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <ChefHat className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Submit Biryani Recipe</h3>
              <p className="text-gray-600 leading-relaxed">
                Upload your unique biryani recipe with photos and detailed instructions. Our culinary team reviews and optimizes it for commercial production.
              </p>
            </div>
            
            <div className="text-center group bg-white/80 backdrop-blur-sm p-6 rounded-2xl">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Shield className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. We Handle Setup</h3>
              <p className="text-gray-600 leading-relaxed">
                We manage brand registration, trademark protection, professional kitchen setup, and app development. Your biryani recipe becomes your protected business.
              </p>
            </div>
            
            <div className="text-center group bg-white/80 backdrop-blur-sm p-6 rounded-2xl">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <MapIcon className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. You Market Locally</h3>
              <p className="text-gray-600 leading-relaxed">
                Focus on building your biryani community within 5km radius. Use social media, local events, and word-of-mouth to grow your customer base in your neighborhood.
              </p>
            </div>
            
            <div className="text-center group bg-white/80 backdrop-blur-sm p-6 rounded-2xl">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Truck className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. We Cook & Deliver</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional kitchens prepare your biryani to perfection. Our delivery network ensures fresh, aromatic biryani reaches your local customers quickly and hot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Model with Biryani Background */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.1), rgba(168, 85, 247, 0.1)), url('https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perfect Partnership Model</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Clear division of responsibilities for maximum biryani business success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Your Responsibilities</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Biryani Recipe Creation:</span>
                    <span className="text-gray-600 ml-1">Develop and refine your unique biryani recipes</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Local Marketing:</span>
                    <span className="text-gray-600 ml-1">Promote your biryani within your 5km radius community</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Community Building:</span>
                    <span className="text-gray-600 ml-1">Engage with local biryani lovers and build relationships</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Responsibilities</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Brand Registration:</span>
                    <span className="text-gray-600 ml-1">Legal setup, trademarks, and IP protection for your biryani brand</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Professional Biryani Cooking:</span>
                    <span className="text-gray-600 ml-1">Commercial kitchen operations and authentic biryani preparation</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Delivery & Technology:</span>
                    <span className="text-gray-600 ml-1">Order management, delivery network, and app maintenance</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Biryani Business Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide all the backend operations so you can focus on biryani recipes and local community building
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal & Brand Protection</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Biryani brand trademark registration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Recipe IP protection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Food safety compliance
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <ChefHat className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Biryani Kitchen</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Authentic biryani preparation methods
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Premium spice sourcing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Quality control & consistency
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Truck className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Delivery & Technology</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Hot biryani delivery (5km radius)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Real-time order tracking
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Biryani ordering app
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories with Biryani Background */}
      <section 
        id="success-stories" 
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Local Biryani Success Stories</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Biryani creators building thriving local businesses in their communities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Amira Khan</h4>
                  <p className="text-gray-600 text-sm">Old City • Hyderabadi Biryani</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                "My grandmother's Hyderabadi biryani recipe now serves 300+ families in my neighborhood every week. The authentic dum cooking method is perfectly maintained!"
              </p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  R
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Rajesh Patel</h4>
                  <p className="text-gray-600 text-sm">Suburbs • Gujarati Biryani</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Started with community events, now I have 400+ regular customers. My unique Gujarati-style biryani with potatoes is a neighborhood favorite!"
              </p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  F
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Fatima Ahmed</h4>
                  <p className="text-gray-600 text-sm">Downtown • Lucknowi Biryani</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                "My Lucknowi biryani with tender mutton and aromatic spices has become the talk of the neighborhood. Local food bloggers love featuring our authentic taste!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Biryani Background */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.9), rgba(168, 85, 247, 0.9)), url('https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Local Biryani Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Focus on what you love - creating amazing biryani recipes and building your local community. 
            We'll handle all the complex business operations behind the scenes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowForm(true)}
              className="bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Submit Your Biryani Recipe Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-500 transition-all duration-200">
              Learn More About Partnership
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <ChefHat className="h-8 w-8 text-orange-500" />
                <span className="text-xl font-bold">BiryaniPro</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering biryani creators to build successful local food businesses through our comprehensive platform and support system.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Twitter className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Linkedin className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Platform</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Biryani Recipe Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Local Marketing Guide</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Biryani Creator Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Local Marketing Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community Forum</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-orange-500" />
                  <span>biryani@biryanipro.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-orange-500" />
                  <span>1-800-BIRYANI-PRO</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-orange-500" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BiryaniPro. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>

      {/* Biryani Recipe Submission Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Submit Your Biryani Recipe</h2>
                <button 
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location (City, State) *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Mumbai, Maharashtra"
                    />
                  </div>
                </div>

                {/* Biryani Recipe Information */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Biryani Recipe Details</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Biryani Recipe Name *
                      </label>
                      <input
                        type="text"
                        name="recipeName"
                        value={formData.recipeName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Nani's Special Hyderabadi Biryani"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Biryani Type *
                      </label>
                      <select
                        name="biryaniType"
                        value={formData.biryaniType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select biryani type</option>
                        <option value="hyderabadi">Hyderabadi Biryani</option>
                        <option value="lucknowi">Lucknowi Biryani</option>
                        <option value="kolkata">Kolkata Biryani</option>
                        <option value="mumbai">Mumbai Biryani</option>
                        <option value="sindhi">Sindhi Biryani</option>
                        <option value="malabar">Malabar Biryani</option>
                        <option value="ambur">Ambur Biryani</option>
                        <option value="thalassery">Thalassery Biryani</option>
                        <option value="other">Other Regional Style</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="inline h-4 w-4 mr-1" />
                        Cooking Time (minutes) *
                      </label>
                      <input
                        type="number"
                        name="cookingTime"
                        value={formData.cookingTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="90"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Users className="inline h-4 w-4 mr-1" />
                        Servings *
                      </label>
                      <input
                        type="number"
                        name="servings"
                        value={formData.servings}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="6"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Biryani Description & Story *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Describe your biryani recipe, what makes it special, family history, and unique cooking techniques..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Complete Ingredients List *
                    </label>
                    <textarea
                      name="ingredients"
                      value={formData.ingredients}
                      onChange={handleInputChange}
                      required
                      rows={8}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="List all ingredients with exact quantities:&#10;For Rice:&#10;- 2 cups Basmati rice&#10;- 4-5 green cardamom&#10;- 2 bay leaves&#10;&#10;For Meat:&#10;- 1 kg mutton/chicken&#10;- 1 cup yogurt&#10;- 2 tbsp ginger-garlic paste&#10;&#10;For Spices:&#10;- 1 tsp red chili powder&#10;- 1/2 tsp turmeric..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Step-by-Step Cooking Instructions *
                    </label>
                    <textarea
                      name="instructions"
                      value={formData.instructions}
                      onChange={handleInputChange}
                      required
                      rows={10}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Provide detailed step-by-step cooking instructions:&#10;1. Soak basmati rice for 30 minutes&#10;2. Marinate meat with yogurt, spices for 2 hours&#10;3. Heat ghee in heavy-bottomed pot&#10;4. Fry onions until golden brown&#10;5. Cook marinated meat until 70% done&#10;6. Boil rice with whole spices until 70% cooked&#10;7. Layer rice over meat&#10;8. Sprinkle fried onions, mint, saffron&#10;9. Cover with aluminum foil, then lid&#10;10. Cook on high heat for 3-4 minutes&#10;11. Reduce heat and cook for 45 minutes&#10;12. Let it rest for 10 minutes before serving..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Ingredients or Techniques
                    </label>
                    <textarea
                      name="specialIngredients"
                      value={formData.specialIngredients}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Any special ingredients, secret spices, or unique cooking techniques that make your biryani special..."
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-6 border-t">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center"
                  >
                    <Upload className="h-5 w-5 mr-2" />
                    Submit Biryani Recipe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;