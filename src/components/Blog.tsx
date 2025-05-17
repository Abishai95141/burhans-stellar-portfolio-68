
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
}

const Blog = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Why NLP is the Future of AI",
      description: "Exploring how natural language processing is revolutionizing human-computer interaction and enabling new AI applications.",
      date: "June 15, 2024"
    },
    {
      id: 2,
      title: "Understanding Neural Networks Visually",
      description: "A visual breakdown of neural network architectures and how they process information to make predictions.",
      date: "May 22, 2024"
    },
    {
      id: 3,
      title: "How AI is Changing Healthcare",
      description: "An overview of recent AI applications in healthcare diagnostics, treatment planning, and patient care.",
      date: "April 10, 2024"
    }
  ];

  return (
    <section id="blog" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-slide-up">
          Blog <span className="neon-text">Articles</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div 
              key={post.id}
              className="glass overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-to-br from-secondary to-black h-48 flex items-center justify-center p-4">
                <h3 className="text-xl font-semibold text-white text-center">
                  {post.title}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4">{post.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="flex items-center gap-1 text-sm text-neon-blue group-hover:gap-2 transition-all">
                    Read more <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
