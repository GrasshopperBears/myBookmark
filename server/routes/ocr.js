const express = require('express');
const router = express.Router();
const path = require('path');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '..', '.env') });

router.post('/api/ocr', async (req, res, next) => {
  const config = {
    headers: {
      'X-OCR-SECRET': process.env.NAVER_OCR_SECRET,
    },
  };
  const body = {
    images: req.body.images,
    lang: req.body.lang,
    requestId: uuidv4(),
    timestamp: +new Date(),
    version: 'V2',
  };
  axios
    .post(process.env.NAVER_OCR_URL, body, config)
    .then((response) => {
      const fields = response.data.images[0].fields;
      const resultSentence = fields
        .reduce((acc, result) => {
          acc.push(result.inferText);
          return acc;
        }, [])
        .join(' ');
      res.header('Access-Control-Allow-Origin', '*');
      res.status(200).json({ ok: true, resultSentence });
    })
    .catch((err) => {
      res.status(500).json({ ok: false, message: err.response.data || '오류가 발생했습니다.' });
    });
});

module.exports = router;
