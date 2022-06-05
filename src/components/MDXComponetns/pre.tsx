import Highlight, {
  defaultProps,
  Language,
  PrismTheme,
} from "prism-react-renderer";
import { ChildrenPropsBase, PreProps, preToCodeBlock } from "mdx-utils";
import React, { FC } from "react";
import dracula from "prism-react-renderer/themes/dracula";
interface CodeProps {
  codeString: string;
  language: Language;
}

//TODO コード番号が表示されない？
const Code: FC<CodeProps> = (props) => {
  const { codeString, language } = props;
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={dracula}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, overflow: "scroll", padding: 16 }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

type ChildrenProps = ChildrenPropsBase & {
  className: string;
};

//HACK この関数は不安定です。厳密にLanguageTypeと一致しないので壊れる可能性がある
const isLanguageType = (languageString: string): languageString is Language => {
  switch (languageString) {
    case "markup":
    case "bash":
    case "clike":
    case "c":
    case "cpp":
    case "css":
    case "javascript":
    case "jsx":
    case "coffeescript":
    case "actionscript":
    case "css-extr":
    case "diff":
    case "git":
    case "go":
    case "graphql":
    case "handlebars":
    case "json":
    case "less":
    case "makefile":
    case "markdown":
    case "objectivec":
    case "ocaml":
    case "python":
    case "reason":
    case "sass":
    case "scss":
    case "sql":
    case "stylus":
    case "tsx":
    case "typescript":
    case "wasm":
    case "yaml":
      return true;
    default:
      return false;
  }
};

const PreComponent: React.FC<PreProps<ChildrenProps>> = (
  preProps: PreProps<ChildrenProps>
) => {
  const props = preToCodeBlock<ChildrenProps>(preProps);
  const { codeString, language } = props;
  if (codeString && isLanguageType(language)) {
    return <Code codeString={codeString} language={language} />;
  } else {
    return <pre {...preProps} />;
  }
};
export { PreComponent };
