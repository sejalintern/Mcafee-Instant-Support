import React from 'react';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import DisclosureBanner from '../components/DisclosureBanner';
import { useAppContext } from '../contexts/AppContext';

const BlogList: React.FC = () => {
  const { blogPosts, phoneNumber, phoneNumberClean, navLinks } = useAppContext();
  const blogUrl = navLinks.find(link => link.name === 'Blog')?.path || `/blog-mcafee-support-${phoneNumberClean}`;

  return (
    <>
      <SEO
        title={`McAfee Support Blog | Tips & Fixes | Call ${phoneNumber}`}
        description={`Read our blog for tips, fixes, and insights on common McAfee issues. Independent support available at ${phoneNumber}.`}
        url={blogUrl}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-10">
            Our Latest McAfee Support Articles
          </h1>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Stay informed with our articles on troubleshooting McAfee products, fixing VPN issues, and enhancing your internet security.
          </p>

          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center p-8 bg-gray-100 rounded-lg shadow-inner">
              <p className="text-xl text-gray-600 font-medium">No blog posts available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <DisclosureBanner />
    </>
  );
};

export default BlogList;
