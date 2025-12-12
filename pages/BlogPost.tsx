import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import SocialShareButtons from '../components/SocialShareButtons';
import Button from '../components/Button';
import DisclosureBanner from '../components/DisclosureBanner';
import { useAppContext } from '../contexts/AppContext';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { blogPosts, phoneNumber, phoneNumberClean } = useAppContext();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    // If post not found, navigate to 404 page or blog list
    return <Navigate to="/404" replace />;
  }

  const postUrl = `/blog/${post.slug}`;

  return (
    <>
      <SEO
        title={post.title}
        description={post.metaDescription}
        url={postUrl}
      />

      <article className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-3xl">
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-md mb-8"
            />
          )}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div
            className="prose prose-lg text-gray-700 max-w-none [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2 [&_p]:mb-4 [&_a]:text-blue-600 [&_a]:hover:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between">
            <SocialShareButtons url={window.location.href} title={post.title} />
            <div className="mt-6 sm:mt-0">
              <Button
                to={`tel:${phoneNumberClean}`}
                isCallToAction={true}
                className="text-lg px-6 py-3"
              >
                Get Expert Help: {phoneNumber}
              </Button>
            </div>
          </div>
        </div>
      </article>

      <DisclosureBanner />
    </>
  );
};

export default BlogPost;
