import sanitizeHtml from "sanitize-html";

import { useStrapiFAQData } from "hooks";

export const StrapiFAQ = ({ token }) => {
  const { data } = useStrapiFAQData({ token });

  return (
    <div className="strapi-faq-root-class">
      {data.map(({ answer, id, question }) => (
        <div key={id}>
          <h3>{question}</h3>

          <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(answer) }} />
        </div>
      ))}
    </div>
  );
};
