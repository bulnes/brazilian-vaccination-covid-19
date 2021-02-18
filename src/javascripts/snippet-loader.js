var SnippetLoader = (function() {

  var src = 'https://snippets.r7.com/snippet/602bee3d8509f36f3900001d?callback=snippetLoader';

  var getSnippetData = function(success, error) {
    var script = document.createElement('script');
    script.src = src;
    script.onerror = error;

    window.snippetLoader = success;

    document.head.appendChild(script);
  };

  return { getSnippetData: getSnippetData }
})();