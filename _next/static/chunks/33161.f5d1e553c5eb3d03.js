(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33161],{33161:function(){Prism.languages.twig={comment:/^\{#[\s\S]*?#\}$/,"tag-name":{pattern:/(^\{%-?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%]-?|-?[%}]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,inside:{punctuation:/^['"]|['"]$/}},keyword:/\b(?:even|if|odd)\b/,boolean:/\b(?:false|null|true)\b/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,operator:[{pattern:/(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],punctuation:/[()\[\]{}:.,]/},Prism.hooks.add("before-tokenize",function(e){"twig"===e.language&&Prism.languages["markup-templating"].buildPlaceholders(e,"twig",/\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g)}),Prism.hooks.add("after-tokenize",function(e){Prism.languages["markup-templating"].tokenizePlaceholders(e,"twig")})}}]);