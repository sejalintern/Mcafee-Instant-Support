export interface NavLink {
  path: string;
  name: string;
}

export interface SocialLink {
  name: string;
  icon: string; // SVG path data
  url: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  imageUrl: string;
  content: string; // HTML content
}

export interface ThemeSettings {
  primaryColor: string;
  heroImage: string;
  siteTitle: string;
}

export interface AppContextType {
  phoneNumber: string;
  phoneNumberClean: string;
  disclosure: string;
  commonIssues: string[];
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  blogPosts: BlogPost[];
  theme: ThemeSettings;
  updateTheme: (newTheme: Partial<ThemeSettings>) => void;
  updateBlogPost: (slug: string, newContent: string) => void;
  addBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (slug: string) => void;
}
