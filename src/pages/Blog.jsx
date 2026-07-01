import BlogHero from '../components/blog/BlogHero';
import BlogContent from '../components/blog/BlogContent';

const Blog = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      <BlogHero />
      <BlogContent />
    </div>
  );
};

export default Blog;
