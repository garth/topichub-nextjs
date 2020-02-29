# Topic Hub - Next.js

## Start

```
yarn start
```

## Build

```
yarn build
```

## Build output

```
yarn build
yarn run v1.22.0
$ next build
Creating an optimized production build

Compiled successfully.

Automatically optimizing pages

Page                            Size     First Load
┌ ○ /                           4.53 kB     78.6 kB
├   /_app                       4.41 kB     74.1 kB
├ ○ /topic/[topicId]            2.71 kB     76.8 kB
└ ○ /topics                     5.3 kB      79.4 kB
+ shared by all                 74.1 kB
  ├ static/_buildManifest.js    61 B
  ├ static/pages/_app.js        4.41 kB
  ├ chunks/commons.89c9d1.js    24.2 kB
  ├ chunks/framework.ad13ec.js  39.9 kB
  ├ runtime/main.c575f1.js      4.74 kB
  └ runtime/webpack.91b117.js   746 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)

Done in 12.33s.
```

## Lines of code

```
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
TypeScript                       2             13              0            225
CSS                              1              3              0              4
-------------------------------------------------------------------------------
SUM:                             3             16              0            229
-------------------------------------------------------------------------------
```
