import React, { FC, memo, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/themes/prism-tomorrow.min.css";

type CodeRendererProps = {
  language: string;
  code: string;
};

const CodeRenderer: FC<CodeRendererProps> = ({ language, code }) => {
  useEffect(() => {
    //create an async function to load the lanugages using import
    const highlight = async (): Promise<void> => {
      if (typeof window !== "undefined" || !language) {
        //import the language dynamically using import statement
        await import(`prismjs/components/prism-${ language }`);
        Prism.highlightAll();
      }
    };
    highlight();
  }, [language, code]);

  return (
    <pre>
      <code className={ `language-${ language }` }>{ code }</code>
    </pre>
  );
};

export default memo(CodeRenderer);
