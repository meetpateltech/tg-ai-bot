module.exports = function formatResponse(text) {
    return text
    .replace(/__(.*?)__/g, '<b>$1</b>') // Bold
    .replace(/_(.*?)_/g, '<i>$1</i>') // Italic
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') // Bold (alternative syntax)
    .replace(/\*(.*?)\*/g, '<i>$1</i>') // Italic (alternative syntax)
    .replace(/^\s*\*\s*(.*?)\n/g, '• $1\n') // Bullet points (with * and potential whitespace)
    .replace(/\+/g, '\\+') // Escape plus signs in text
    .replace(/\*/g, '\\*'); // Escape asterisks in text
  };
  