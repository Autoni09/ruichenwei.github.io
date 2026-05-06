import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export function GET(context: APIContext) {
  const writing = getCollection('writing', ({ data }) => !data.draft);

  return writing.then((posts) =>
    rss({
      title: 'ruichenwei — Writing',
      description: 'Articles, notes, and reflections by ruichenwei.',
      site: context.site!,
      items: posts
        .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
        .map((post) => ({
          title: post.data.title,
          description: post.data.summary,
          pubDate: post.data.date,
          link: `/writing/${post.id}/`,
        })),
    })
  );
}
