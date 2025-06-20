/**
 * Calculate estimated reading time for content
 * @param content - The content text (can be HTML, markdown, or plain text)
 * @returns Formatted reading time string (e.g., "5 min read")
 */
export function calculateReadTime(content: string): string {
    const wordsPerMinute = 200;
    
    // Strip HTML tags and markdown syntax for more accurate word count
    const textContent = content
        .replace(/<[^>]*>/g, '') // Strip HTML tags
        .replace(/[#*_`\[\]()]/g, '') // Strip common markdown syntax
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();
    
    const wordCount = textContent.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    
    return readTime === 1 ? '1 min read' : `${readTime} min read`;
} 