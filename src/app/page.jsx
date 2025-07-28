'use client';

import React, { useState, useEffect } from 'react';
import { Search, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const imageFiles = [
    '24.jpeg',
    '25.jpeg',
    '26.jpeg',
    '27.jpeg',
    '19.jpeg',
    '14.jpeg',
    '15.jpeg',
    '16.jpeg',
    '21.jpeg',
    '18.jpeg',
    '28.jpeg',
    '29.jpeg',
    '30.jpeg',
    'image5.jpeg',
    'image9.jpeg',
    'image2.jpeg',
    'image1.jpeg',
    'image3.jpeg',
    'image4.jpeg',
    'image6.jpeg',
    'image7.jpeg',
    'image8.jpeg',
    'image10.jpeg',
    '11.jpeg',
    '22.jpeg',
    '23.jpeg',
    '20.jpeg',
    '12.jpeg',
    '13.jpeg',
    '17.jpeg',
  ];

  useEffect(() => {
    // Convert filenames to image objects
    const imageList = imageFiles.map((filename, index) => ({
      id: index + 1,
      filename: filename,
      name: filename.replace('.jpeg', '').replace(/[-_]/g, ' '), // Clean name for display
      src: `/images/${filename}` // Path to your images folder
    }));
    console.log(imageList);
    setImages(imageList);
    setFilteredImages(imageList);
  }, []);

  useEffect(() => {
    // Filter images based on search term
    const filtered = images.filter((image) =>
      image.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredImages(filtered);
  }, [searchTerm, images]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Shukla Exports</h1>
                <p className="text-sm text-gray-600">Premium Quality • Global Shipping</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>+91 8172908032</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>himanshu2361999@gmail.com</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span> India</span>
                </div>
              </div>
            </div>
        </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Product Gallery
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-amber-100">
            Authentic Indian textiles for global markets
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        
       

        {/* Gallery Info */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Product Gallery</h3>
          <p className="text-gray-600">
            {filteredImages.length} images available
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square bg-gray-100">
                <img
                  src={image.src}
                  alt={image.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No images found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl z-10 bg-black/20 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.name}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}