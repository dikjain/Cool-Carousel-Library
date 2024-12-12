

import React from 'react';
import { CodeBlock } from './CodeBlock';

interface ShowcaseProps {
  title: string;
  description: string;
  children: React.ReactNode;
  htmlCode: string;
  cssCode: string;
  jsCode: string;
}

export const CarouselShowcase: React.FC<ShowcaseProps> = ({
  title,
  description,
  children,
  htmlCode,
  cssCode,
  jsCode,
}) => {
  return (
    <div className="space-y-8 p-8 bg-gray-800/50 rounded-2xl backdrop-blur-xl">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-300">{description}</p>
      </div>
      
      <div className="bg-gray-900/50 p-6 rounded-xl overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">HTML</h3>
          <CodeBlock code={htmlCode} language="html" />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">CSS</h3>
          <CodeBlock code={cssCode} language="css" />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">JavaScript</h3>
          <CodeBlock code={jsCode} language="javascript" />
        </div>
      </div>
    </div>
  );
};