var SnippetLoader = (function() {

  var src = 'https://snippets.r7.com/snippet/602e6b1bbbb3eb7f2100001c?callback=snippetLoader';

  var getSnippetData = function(success, error) {
    var script = document.createElement('script');
    script.src = src;
    script.onerror = error;

    window.snippetLoader = success;

    document.head.appendChild(script);
  };

  return { getSnippetData: getSnippetData }
})();