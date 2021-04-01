const src = 'https://snippets.r7.com/snippet/602e67c0bbb3eb7f2100001b?callback=snippetUseChecker';

const loadConfiguration = (cb) => {
  const script = document.createElement('script');
  script.src = src;
  script.onerror = () => {
    cb({ mapa_via_snippet: 'no' });
  };

  window.snippetUseChecker = (data) => {
    const anwser = data && data.itens[0] ? data.itens[0].mapa_via_snippet : 'no';
    cb({ mapa_via_snippet: anwser });
  };

  document.head.appendChild(script);
};

const redirectToRightDatabase = (snippetDatabase, scDatabase) => {
  loadConfiguration((data) => {
    const isToUseSnippet = data.mapa_via_snippet.toLowerCase() !== 'no';
    return isToUseSnippet ? snippetDatabase() : scDatabase();
  });
};

export default redirectToRightDatabase;
