import React from 'react';
import { NavLink } from 'react-router-dom';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const excerpt = post.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...'; // Remove HTML tags and truncate

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
          {post.title}
        </h3>
        <p className="text-gray-700 text-sm mb-4 flex-grow">
          {excerpt}
        </p>
        <NavLink
          to={`/blog/${post.slug}`}
          className="inline-block bg-blue-600 text-white font-medium py-2 px-4 rounded-full text-center hover:bg-blue-700 transition-colors duration-200 self-start"
        >
          Read More
        </NavLink>
      </div>
    </div>
  );
};

export default BlogCard;
