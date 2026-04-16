/**
 * Process TiddlyWiki-style links in HTML content.
 * 
 * Replaces ./#slug with /slug.html
 * Adds rel="nofollow" to missing links and makes them non-clickable.
 */
export function processLinks(html: string): string {
  // Replace ./#slug with /slug.html
  // and handle missing links
  return html.replace(/<a\s+([^>]*?)href="\.\/#([^"]*?)"([^>]*?)>(.*?)<\/a>/g, (match, before, slug, after, text) => {
    const isMissing = match.includes('tc-tiddlylink-missing');
    
    if (isMissing) {
      // For missing links, remove href and add rel="nofollow"
      // The user wants them non-clickable
      return `<span class="tc-tiddlylink tc-tiddlylink-missing" rel="nofollow">${text}</span>`;
    } else {
      // For resolving links, change href to /slug.html
      // We add / at the start to make it an absolute path
      return `<a ${before}href="/${slug}.html"${after}>${text}</a>`;
    }
  });
}
