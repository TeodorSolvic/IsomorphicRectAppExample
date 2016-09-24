import express from 'express';
import React from 'react';
import ReactDom from 'react-dom';

const app = express();

app.use((req, res)=> {
  res.end('<p>Hello World!</p>');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listeting on: ${PORT}`);
});
