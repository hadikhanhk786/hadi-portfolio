import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Hadi Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
