import React from 'react';

/**
 * Parses text and converts *wrapped* words to bold
 * Example: "This is *important* text" -> "This is <strong>important</strong> text"
 */
export function parseHighlightedText(text: string): React.ReactNode[] {
  // Split by asterisks but keep the delimiters
  const parts = text.split(/(\*[^*]+\*)/g);
  
  return parts.map((part, index) => {
    // Check if this part is wrapped in asterisks
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      // Remove asterisks and wrap in strong tag
      const boldText = part.slice(1, -1);
      return <strong key={index} className="font-semibold">{boldText}</strong>;
    }
    // Return regular text
    return <span key={index}>{part}</span>;
  });
}

/**
 * Alternative: Parse text with double asterisks for extra bold
 * Example: "This is **very important** text"
 */
export function parseHighlightedTextAdvanced(text: string): React.ReactNode[] {
  // Split by both single and double asterisks
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  
  return parts.map((part, index) => {
    // Check for double asterisks (extra bold)
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      const boldText = part.slice(2, -2);
      return <strong key={index} className="font-bold">{boldText}</strong>;
    }
    // Check for single asterisks (semi-bold)
    else if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      const boldText = part.slice(1, -1);
      return <strong key={index} className="font-semibold">{boldText}</strong>;
    }
    // Return regular text
    return <span key={index}>{part}</span>;
  });
}
