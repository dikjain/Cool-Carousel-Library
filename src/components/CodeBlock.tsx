

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute right-4 top-4">
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-white" />
          )}
        </button>
      </div>
      <pre className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
        <code className="text-white font-mono text-sm">{code}</code>
      </pre>
    </div>
  );
};