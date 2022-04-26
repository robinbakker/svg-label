addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
/**
 * Respond with customized SVG label based on given query string params
 * @param {Request} request
 */
async function handleRequest(request) {
  const { searchParams } = new URL(request.url);
  const hexRegex = /^([0-9A-F]{6}|[0-9A-F]{3})$/i;
  const text = (searchParams.get('text') || '').replace(/([^a-z0-9-!?])+/gi, ' ') || 'SVG label';
  const textColor = hexRegex.test(searchParams.get('textcolor')) ? searchParams.get('textcolor') : 'fff';
  const bgColor = hexRegex.test(searchParams.get('bgcolor')) ? searchParams.get('bgcolor') : 'f00';
  const fontFamily = "BlinkMacSystemFont,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const fontSize = parseInt(searchParams.get('fontsize')) || 16;
  const fontWeight = parseInt(searchParams.get('fontweight')) || 600;
  const width = parseInt(searchParams.get('width')) || text.length * (fontSize * 0.625);
  const height = parseInt(searchParams.get('height')) || Math.round(fontSize * 1.33);
  const textX = Math.round(width / 2);
  const textY = Math.round(height * 0.7);
  const radius = Math.max(1, Math.round(height / 2));

  return new Response(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
       <rect width="${width}" height="${height}" rx="${radius}" ry="${radius}" fill="#${bgColor}" />
       <text x="${textX}" y="${textY}" fill="#${textColor}" font-family="${fontFamily}" font-size="${fontSize}px" font-weight="${fontWeight}" text-anchor="middle">${text}</text>
     </svg>`,
    {
      headers: { 'content-type': 'image/svg+xml' },
    },
  );
}
