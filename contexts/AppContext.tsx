import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import {
  PHONE_NUMBER,
  PHONE_NUMBER_CLEAN,
  MANDATORY_DISCLOSURE,
  COMMON_ISSUES,
  NAV_LINKS,
  SOCIAL_LINKS,
  DUMMY_BLOG_POSTS,
} from '../constants';
import { AppContextType, ThemeSettings, BlogPost } from '../types';

const defaultTheme: ThemeSettings = {
  primaryColor: '#007bff', // Default blue, can be updated
  heroImage: 'https://picsum.photos/1920/1080?random=1', // Default hero image
  siteTitle: 'McAfee Support Assistance – Call +1 (510)-370-1986 | Independent VPN & Security Help', // Default site title
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeSettings>(defaultTheme);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(DUMMY_BLOG_POSTS);

  const updateTheme = useCallback((newTheme: Partial<ThemeSettings>) => {
    setTheme(prevTheme => ({ ...prevTheme, ...newTheme }));
  }, []);

  const updateBlogPost = useCallback((slug: string, newContent: string) => {
    setBlogPosts(prevPosts =>
      prevPosts.map(post =>
        post.slug === slug ? { ...post, content: newContent } : post
      )
    );
  }, []);

  const addBlogPost = useCallback((post: BlogPost) => {
    setBlogPosts(prevPosts => [...prevPosts, post]);
  }, []);

  const deleteBlogPost = useCallback((slug: string) => {
    setBlogPosts(prevPosts => prevPosts.filter(post => post.slug !== slug));
  }, []);

  const contextValue: AppContextType = {
    phoneNumber: PHONE_NUMBER,
    phoneNumberClean: PHONE_NUMBER_CLEAN,
    disclosure: MANDATORY_DISCLOSURE,
    commonIssues: COMMON_ISSUES, // Note: For a real admin dashboard, these would also be manageable
    navLinks: NAV_LINKS,
    socialLinks: SOCIAL_LINKS,
    blogPosts,
    theme,
    updateTheme,
    updateBlogPost,
    addBlogPost,
    deleteBlogPost,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
