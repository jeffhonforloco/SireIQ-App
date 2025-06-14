
import React from "react";

const ChatCardSkeleton: React.FC = () => (
  <div className="w-full max-w-3xl mx-auto rounded-lg border border-brand-primary/20 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg p-8 animate-pulse">
    <div className="h-6 w-1/3 bg-sireiq-cyan/30 rounded mb-6" />
    <div className="space-y-2">
      <div className="h-4 w-full bg-sireiq-cyan/10 rounded" />
      <div className="h-4 w-5/6 bg-sireiq-cyan/10 rounded" />
      <div className="h-4 w-2/3 bg-sireiq-cyan/20 rounded mt-4" />
    </div>
    <div className="mt-8 flex gap-2">
      <div className="h-10 w-40 bg-sireiq-cyan/10 rounded" />
      <div className="h-10 w-20 bg-sireiq-cyan/10 rounded" />
    </div>
  </div>
);

export default ChatCardSkeleton;
