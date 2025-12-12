import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import Button from '../components/Button';
import { BlogPost } from '../types';

const AdminDashboard: React.FC = () => {
  const { theme, updateTheme, blogPosts, updateBlogPost, addBlogPost, deleteBlogPost } = useAppContext();

  const [newBlogPost, setNewBlogPost] = useState<BlogPost>({
    slug: '',
    title: '',
    metaDescription: '',
    imageUrl: 'https://picsum.photos/600/400?random=0', // Default placeholder
    content: '',
  });

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateTheme({ [name]: value });
  };

  const handleBlogPostFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewBlogPost(prev => ({ ...prev, [name]: value }));
  };

  const handleAddBlogPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newBlogPost.slug && newBlogPost.title && newBlogPost.content) {
      addBlogPost({ ...newBlogPost, slug: `${newBlogPost.slug}-15103701986` }); // Ensure URL format
      setNewBlogPost({
        slug: '',
        title: '',
        metaDescription: '',
        imageUrl: `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 100)}`,
        content: '',
      });
      alert('Blog post added! (Not persistent)');
    } else {
      alert('Please fill in all required fields for the blog post.');
    }
  };

  const handleEditBlogPostContent = (slug: string, newContent: string) => {
    updateBlogPost(slug, newContent);
    alert('Blog post content updated! (Not persistent)');
  };

  const handleDeleteBlogPost = (slug: string) => {
    if (window.confirm(`Are you sure you want to delete blog post "${slug}"?`)) {
      deleteBlogPost(slug);
      alert('Blog post deleted! (Not persistent)');
    }
  };

  return (
    <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Admin Dashboard</h1>
      <p className="text-red-600 text-center mb-6 font-medium">
        NOTE: This is a frontend-only demonstration. Changes made here are NOT persistent and will reset on page refresh.
      </p>

      {/* Theme Management */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Theme Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="primaryColor" className="block text-gray-700 font-medium mb-2">
              Primary Color (Hex)
            </label>
            <input
              type="color"
              id="primaryColor"
              name="primaryColor"
              value={theme.primaryColor}
              onChange={handleThemeChange}
              className="w-full h-12 p-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="heroImage" className="block text-gray-700 font-medium mb-2">
              Hero Background Image URL
            </label>
            <input
              type="text"
              id="heroImage"
              name="heroImage"
              value={theme.heroImage}
              onChange={handleThemeChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              placeholder="e.g., https://picsum.photos/1920/1080?random=1"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="siteTitle" className="block text-gray-700 font-medium mb-2">
              Site Title (for SEO and Header)
            </label>
            <input
              type="text"
              id="siteTitle"
              name="siteTitle"
              value={theme.siteTitle}
              onChange={handleThemeChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              placeholder="e.g., McAfee Support Assistance – Call +1 (510)-370-1986 | Independent VPN & Security Help"
            />
          </div>
        </div>
      </section>

      {/* Blog Post Management */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Blog Post Management</h2>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Add New Blog Post</h3>
        <form onSubmit={handleAddBlogPost} className="space-y-4 mb-8 p-4 border border-gray-200 rounded-md bg-gray-50">
          <div>
            <label htmlFor="new-slug" className="block text-gray-700 font-medium mb-1">
              Slug (URL-friendly, e.g., mcafee-vpn-fix)
            </label>
            <input
              type="text"
              id="new-slug"
              name="slug"
              value={newBlogPost.slug}
              onChange={handleBlogPostFormChange}
              className="w-full border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="new-title" className="block text-gray-700 font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              id="new-title"
              name="title"
              value={newBlogPost.title}
              onChange={handleBlogPostFormChange}
              className="w-full border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="new-metaDescription" className="block text-gray-700 font-medium mb-1">
              Meta Description
            </label>
            <input
              type="text"
              id="new-metaDescription"
              name="metaDescription"
              value={newBlogPost.metaDescription}
              onChange={handleBlogPostFormChange}
              className="w-full border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label htmlFor="new-imageUrl" className="block text-gray-700 font-medium mb-1">
              Image URL
            </label>
            <input
              type="text"
              id="new-imageUrl"
              name="imageUrl"
              value={newBlogPost.imageUrl}
              onChange={handleBlogPostFormChange}
              className="w-full border-gray-300 rounded-md shadow-sm p-2"
              placeholder="e.g., https://picsum.photos/600/400?random=xyz"
            />
          </div>
          <div>
            <label htmlFor="new-content" className="block text-gray-700 font-medium mb-1">
              Content (HTML allowed)
            </label>
            <textarea
              id="new-content"
              name="content"
              rows={8}
              value={newBlogPost.content}
              onChange={handleBlogPostFormChange}
              className="w-full border-gray-300 rounded-md shadow-sm p-2"
              required
            ></textarea>
          </div>
          <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white w-full">
            Add Blog Post
          </Button>
        </form>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Existing Blog Posts</h3>
        {blogPosts.length === 0 ? (
          <p className="text-gray-600">No blog posts available.</p>
        ) : (
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <div key={post.slug} className="border border-gray-200 rounded-md p-4 bg-white shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-xl font-bold text-gray-900">{post.title}</h4>
                  <div className="flex space-x-2">
                    <Button onClick={() => handleDeleteBlogPost(post.slug)} className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 text-sm">
                      Delete
                    </Button>
                  </div>
                </div>
                <p className="text-gray-600 mb-2"><strong>Slug:</strong> {post.slug}</p>
                <p className="text-gray-600 mb-2"><strong>Image URL:</strong> {post.imageUrl}</p>
                <p className="text-gray-600 mb-4"><strong>Meta Description:</strong> {post.metaDescription}</p>
                <div>
                  <label htmlFor={`edit-content-${post.slug}`} className="block text-gray-700 font-medium mb-1">
                    Content (HTML allowed)
                  </label>
                  <textarea
                    id={`edit-content-${post.slug}`}
                    rows={6}
                    value={post.content}
                    onChange={(e) => handleEditBlogPostContent(post.slug, e.target.value)}
                    className="w-full border-gray-300 rounded-md shadow-sm p-2"
                  ></textarea>
                </div>
                <div className="mt-4 text-right">
                  <NavLink
                    to={`/blog/${post.slug}`}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Post
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;
