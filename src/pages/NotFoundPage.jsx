import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import PageHeader from '../components/PageHeader';

export default function NotFoundPage() {
  return (
    <PageHeader eyebrow="404" title="Page not found" intro="The page you're looking for doesn't exist or has moved.">
      <Link to="/" className="btn-primary mt-6"><FiHome /> Back to home</Link>
    </PageHeader>
  );
}
