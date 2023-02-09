import {$getRoot, $getSelection, EditorThemeClasses} from 'lexical';
import {useEffect} from 'react';

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

// import { theme } from './Theme/Theme';

const theme: EditorThemeClasses = {
    ltr: 'text-left',
    rtl: 'text-right',
    // placeholder: 'editor-placeholder',
    // paragraph: 'editor-paragraph',
    // quote: 'editor-quote',
    heading: {
      h1: 'text-2xl',
      h2: 'text-sm',
      h3: 'text-xs',
    },
    // list: {
    //   nested: {
    //     listitem: 'editor-nested-listitem',
    //   },
    //   ol: 'editor-list-ol',
    //   ul: 'editor-list-ul',
    //   listitem: 'editor-listItem',
    //   listitemChecked: 'editor-listItemChecked',
    //   listitemUnchecked: 'editor-listItemUnchecked',
    // },
    // hashtag: 'editor-hashtag',
    // image: 'editor-image',
    // link: 'editor-link',
    // text: {
    //   bold: 'editor-textBold',
    //   code: 'editor-textCode',
    //   italic: 'editor-textItalic',
    //   strikethrough: 'editor-textStrikethrough',
    //   subscript: 'editor-textSubscript',
    //   superscript: 'editor-textSuperscript',
    //   underline: 'editor-textUnderline',
    //   underlineStrikethrough: 'editor-textUnderlineStrikethrough',
    // },
    // code: 'editor-code',
    // codeHighlight: {
    //   atrule: 'editor-tokenAttr',
    //   attr: 'editor-tokenAttr',
    //   boolean: 'editor-tokenProperty',
    //   builtin: 'editor-tokenSelector',
    //   cdata: 'editor-tokenComment',
    //   char: 'editor-tokenSelector',
    //   class: 'editor-tokenFunction',
    //   'class-name': 'editor-tokenFunction',
    //   comment: 'editor-tokenComment',
    //   constant: 'editor-tokenProperty',
    //   deleted: 'editor-tokenProperty',
    //   doctype: 'editor-tokenComment',
    //   entity: 'editor-tokenOperator',
    //   function: 'editor-tokenFunction',
    //   important: 'editor-tokenVariable',
    //   inserted: 'editor-tokenSelector',
    //   keyword: 'editor-tokenAttr',
    //   namespace: 'editor-tokenVariable',
    //   number: 'editor-tokenProperty',
    //   operator: 'editor-tokenOperator',
    //   prolog: 'editor-tokenComment',
    //   property: 'editor-tokenProperty',
    //   punctuation: 'editor-tokenPunctuation',
    //   regex: 'editor-tokenVariable',
    //   selector: 'editor-tokenSelector',
    //   string: 'editor-tokenSelector',
    //   symbol: 'editor-tokenProperty',
    //   tag: 'editor-tokenProperty',
    //   url: 'editor-tokenOperator',
    //   variable: 'editor-tokenVariable',
    // },
};


const initialConfig = {
    namespace: 'TextEventEditor', 
    // theme,
    onError,
  };


// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
function onChange(editorState:any) {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot();
    const selection = $getSelection();

    console.log(root, selection);
  });
}

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error:any) {
  console.error(error);
}

export const Editor = () => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <PlainTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={(<div>Enter some text...</div>)}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <OnChangePlugin onChange={onChange} />
      <HistoryPlugin />
      <MyCustomAutoFocusPlugin />
    </LexicalComposer>
  );
}