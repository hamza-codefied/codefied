import React from 'react';

/**
 * Formats text by wrapping special characters in spans with Arial font
 * to prevent "demo" text from appearing when using Lufga font
 * Handles: /, -, ', (, ), <, >, <<, >>, —, &, !, ?, _, and other special characters
 */
export const formatText = (text) => {
  if (typeof text !== 'string') return text;

  const parts = [];
  let lastIndex = 0;
  
  // Regex to match special characters: /, -, ', (, ), <, >, <<, >>, —, &, !, ?, _, etc.
  // Note: Match << and >> first (2 chars), then em dash, then other single chars
  const specialCharRegex = /(<<|>>|—|[/\-'()<>&!?_,;:])/g;
  let match;

  while ((match = specialCharRegex.exec(text)) !== null) {
    // Add text before the special character
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    // Add the special character(s) wrapped in a span with Arial font
    parts.push(
      <span key={match.index} style={{ fontFamily: 'Arial, sans-serif' }}>
        {match[0]}
      </span>
    );
    
    // Update lastIndex based on match length (1 for single char, 2 for << or >>)
    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  // If no special characters found, return original text
  if (parts.length === 0) {
    return text;
  }

  return <>{parts}</>;
};

