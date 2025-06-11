
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CodeGeneratorTool from '@/components/code-generator/CodeGeneratorTool';

const CodeGenerator = () => {
  return (
    <>
      <Helmet>
        <title>AI Code Generator | SireIQ</title>
        <meta name="description" content="Generate clean, efficient code across multiple programming languages with SireIQ's AI-powered code generation tool." />
      </Helmet>
      
      <CodeGeneratorTool />
    </>
  );
};

export default CodeGenerator;
