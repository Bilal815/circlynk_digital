/* ============================================================
   PRISM.JS — Lightweight syntax highlighting
   CircLynk Digital theme — Python + JS + Bash + JSON
   ============================================================ */
(function(){
'use strict';
var Prism = (function(){
  var lang = {};
  lang.python = {
    'comment': { pattern: /#.*/, greedy: true },
    'string': { pattern: /(?:"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/, greedy: true },
    'keyword': /\b(?:False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/,
    'builtin': /\b(?:print|len|range|list|dict|set|tuple|str|int|float|bool|type|isinstance|enumerate|zip|map|filter|sorted|reversed|open|input|sum|min|max|abs|round|format)\b/,
    'number': /\b\d+(?:\.\d+)?\b/,
    'operator': /[+\-*/%=<>!&|^~]+/,
    'punctuation': /[()[\]{},.:;]/
  };
  lang.javascript = {
    'comment': [{ pattern: /\/\*[\s\S]*?\*\//, greedy: true }, { pattern: /\/\/.*/, greedy: true }],
    'string': { pattern: /(?:`[\s\S]*?`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/, greedy: true },
    'keyword': /\b(?:async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|from|function|if|import|in|instanceof|let|new|null|of|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    'number': /\b\d+(?:\.\d+)?\b/,
    'boolean': /\b(?:true|false)\b/,
    'punctuation': /[()[\]{},.:;]/
  };
  lang.bash = {
    'comment': { pattern: /#.*/, greedy: true },
    'string': { pattern: /(?:"[^"]*"|'[^']*')/, greedy: true },
    'keyword': /\b(?:if|then|else|elif|fi|for|while|do|done|case|esac|function|return|export|source|echo|cd|ls|mkdir|rm|cp|mv|cat|grep|sed|awk|curl|wget)\b/,
    'operator': /[|&;<>()$`]/,
    'number': /\b\d+\b/
  };
  lang.json = {
    'property': { pattern: /"[^"]*"(?=\s*:)/, greedy: true },
    'string': { pattern: /"[^"]*"/, greedy: true },
    'number': /\b-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/,
    'boolean': /\b(?:true|false|null)\b/,
    'punctuation': /[{}[\]:,]/
  };

  function highlight(code, grammar) {
    var tokens = tokenize(code, grammar);
    return tokens.map(function(t) {
      if (typeof t === 'string') return escHtml(t);
      return '<span class="token ' + t.type + '">' + escHtml(t.content) + '</span>';
    }).join('');
  }

  function tokenize(text, grammar) {
    var strs = [text], rest = [];
    for (var type in grammar) {
      if (!grammar.hasOwnProperty(type)) continue;
      var patterns = [].concat(grammar[type]);
      patterns.forEach(function(pat) {
        var re = pat.pattern || pat;
        var greedy = pat.greedy;
        var result = [];
        strs.forEach(function(s) {
          if (typeof s !== 'string') { result.push(s); return; }
          var last = 0, m;
          re.lastIndex = 0;
          var r = new RegExp(re.source, re.flags || (greedy ? 'g' : 'g'));
          while ((m = r.exec(s)) !== null) {
            if (m.index > last) result.push(s.slice(last, m.index));
            result.push({ type: type, content: m[0] });
            last = m.index + m[0].length;
          }
          if (last < s.length) result.push(s.slice(last));
        });
        strs = result;
      });
    }
    return strs;
  }

  function escHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function highlightAll() {
    document.querySelectorAll('pre code[class*="language-"]').forEach(function(block) {
      var cls   = block.className.match(/language-(\w+)/);
      var name  = cls ? cls[1] : null;
      var g     = lang[name];
      if (!g) return;
      block.innerHTML = highlight(block.textContent, g);
      block.parentElement.setAttribute('data-lang', name);
      addCopyBtn(block.parentElement);
    });
  }

  function addCopyBtn(pre) {
    var btn = document.createElement('button');
    btn.className = 'code-copy-btn';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', 'Copy code');
    btn.onclick = function() {
      var code = pre.querySelector('code');
      navigator.clipboard.writeText(code ? code.textContent : pre.textContent).then(function() {
        btn.textContent = 'Copied!';
        setTimeout(function(){ btn.textContent = 'Copy'; }, 2000);
      });
    };
    pre.style.position = 'relative';
    pre.appendChild(btn);
  }

  return { highlight: highlight, highlightAll: highlightAll, languages: lang };
})();

document.addEventListener('DOMContentLoaded', function() {
  Prism.highlightAll();
});
window.Prism = Prism;
})();
