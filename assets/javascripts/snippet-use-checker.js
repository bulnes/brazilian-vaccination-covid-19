var SnippetUseChecker = (function() {

  var src = 'https://snippets.r7.com/snippet/602e67c0bbb3eb7f2100001b?callback=snippetUseChecker';

  var loadConfiguration = function(cb) {
    var script = document.createElement('script');
    script.src = src;
    script.onerror = function() {
      cb({ mapa_via_snippet: 'no' });
    };

    window.snippetUseChecker = function(data) {
      var anwser = data && data.itens[0] ? data.itens[0].mapa_via_snippet : 'no';
      cb({ mapa_via_snippet: anwser });
    };

    document.head.appendChild(script);
  };

  var redirectToRightDatabase = function(snippetDatabase, scDatabase) {
    loadConfiguration(function(data) {
      var isToUseSnippet = data.mapa_via_snippet.toLowerCase() !== 'no';
      isToUseSnippet ? snippetDatabase() : scDatabase();
    });
  };

  return {
    redirectToRightDatabase: redirectToRightDatabase,
  };
})();