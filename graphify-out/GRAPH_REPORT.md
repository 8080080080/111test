# Graph Report - D:\Codexgeneratedwebsite  (2026-04-29)

## Corpus Check
- 11 files · ~2,327,837 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 38 nodes · 35 edges · 10 communities detected
- Extraction: 80% EXTRACTED · 20% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]

## God Nodes (most connected - your core abstractions)
1. `getSiteData()` - 4 edges
2. `resolveProductImage()` - 3 edges
3. `getImageAsset()` - 3 edges
4. `resolveProductColorCollectionItem()` - 2 edges
5. `resolveSiteData()` - 2 edges
6. `createLocalBusinessSchema()` - 2 edges
7. `createProductSchema()` - 2 edges
8. `toAbsoluteUrl()` - 2 edges
9. `getCanonicalUrl()` - 2 edges
10. `getMetaTitle()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `resolveProductImage()` --calls--> `getImageAsset()`  [INFERRED]
  D:\Codexgeneratedwebsite\src\lib\content.ts → D:\Codexgeneratedwebsite\src\lib\imageRegistry.ts
- `resolveSiteData()` --calls--> `getImageAsset()`  [INFERRED]
  D:\Codexgeneratedwebsite\src\lib\content.ts → D:\Codexgeneratedwebsite\src\lib\imageRegistry.ts
- `getSiteData()` --calls--> `getMetaTitle()`  [INFERRED]
  D:\Codexgeneratedwebsite\src\lib\content.ts → D:\Codexgeneratedwebsite\src\lib\seo.ts
- `getSiteData()` --calls--> `getMetaDescription()`  [INFERRED]
  D:\Codexgeneratedwebsite\src\lib\content.ts → D:\Codexgeneratedwebsite\src\lib\seo.ts
- `getSiteData()` --calls--> `GET()`  [INFERRED]
  D:\Codexgeneratedwebsite\src\lib\content.ts → D:\Codexgeneratedwebsite\src\pages\robots.txt.ts

## Communities

### Community 0 - "Community 0"
Cohesion: 0.22
Nodes (2): resolveProductColorCollectionItem(), resolveProductImage()

### Community 1 - "Community 1"
Cohesion: 0.29
Nodes (4): createLocalBusinessSchema(), createProductSchema(), getCanonicalUrl(), toAbsoluteUrl()

### Community 2 - "Community 2"
Cohesion: 0.4
Nodes (4): getSiteData(), GET(), getMetaDescription(), getMetaTitle()

### Community 3 - "Community 3"
Cohesion: 0.5
Nodes (2): resolveSiteData(), getImageAsset()

### Community 4 - "Community 4"
Cohesion: 0.67
Nodes (0): 

### Community 5 - "Community 5"
Cohesion: 0.67
Nodes (0): 

### Community 6 - "Community 6"
Cohesion: 1.0
Nodes (0): 

### Community 7 - "Community 7"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "Community 8"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Community 9"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **Thin community `Community 6`** (2 nodes): `routes.ts`, `localizePath()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 7`** (1 nodes): `astro.config.mjs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (1 nodes): `env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 9`** (1 nodes): `content.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getSiteData()` connect `Community 2` to `Community 0`?**
  _High betweenness centrality (0.283) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `getSiteData()` (e.g. with `getMetaTitle()` and `getMetaDescription()`) actually correct?**
  _`getSiteData()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `getImageAsset()` (e.g. with `resolveProductImage()` and `resolveSiteData()`) actually correct?**
  _`getImageAsset()` has 2 INFERRED edges - model-reasoned connections that need verification._