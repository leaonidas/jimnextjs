import ReactMarkdown from 'react-markdown/with-html';

export const Markdown = props => {
  return (
    <div className="devii-markdown">
      <ReactMarkdown key="content" source={props.source} escapeHtml={false} />
    </div>
  );
};
