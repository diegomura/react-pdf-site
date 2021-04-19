### Usage with Express.js `node only`

```jsx
import React from 'react';
import ReactPDF from '@react-pdf/renderer';

const pdfStream = await ReactPDF.renderToStream(<MyDocument />);
res.setHeader('Content-Type', 'application/pdf');
pdfStream.pipe(res);
pdfStream.on('end', () => console.log('Done streaming, response sent.'));
```
