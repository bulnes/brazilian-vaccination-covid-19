const src = 'https://snippets.r7.com/snippet/602e6b1bbbb3eb7f2100001c?callback=snippetLoader';

const getSnippetData = (success, error) => {
  const script = document.createElement('script');
  script.src = src;
  script.onerror = error;

  window.snippetLoader = success;

  document.head.appendChild(script);
};

export default getSnippetData;
