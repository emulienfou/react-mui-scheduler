(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17117],{17117:function(){Prism.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:Prism.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},Prism.hooks.add("after-tokenize",function(n){if("graphql"===n.language)for(var t=n.tokens.filter(function(n){return"string"!=typeof n&&"comment"!==n.type&&"scalar"!==n.type}),e=0;e<t.length;){var a=t[e++];if("keyword"===a.type&&"mutation"===a.content){var r=[];if(l(["definition-mutation","punctuation"])&&"("===t[e+1].content){e+=2;var i=c(/^\($/,/^\)$/);if(-1===i)continue;for(;e<i;e++){var o=t[e+0];"variable"===o.type&&(f(o,"variable-input"),r.push(o.content))}e=i+1}if(l(["punctuation","property-query"])&&"{"===t[e+0].content&&(f(t[++e+0],"property-mutation"),r.length>0)){var s=c(/^\{$/,/^\}$/);if(-1===s)continue;for(var u=e;u<s;u++){var p=t[u];"variable"===p.type&&r.indexOf(p.content)>=0&&f(p,"variable-input")}}}}function l(n,a){a=a||0;for(var r=0;r<n.length;r++){var i=t[e+(r+a)];if(!i||i.type!==n[r])return!1}return!0}function c(n,a){for(var r=1,i=e;i<t.length;i++){var o=t[i],s=o.content;if("punctuation"===o.type&&"string"==typeof s){if(n.test(s))r++;else if(a.test(s)&&0==--r)return i}}return -1}function f(n,t){var e=n.alias;e?Array.isArray(e)||(n.alias=e=[e]):n.alias=e=[],e.push(t)}})}}]);