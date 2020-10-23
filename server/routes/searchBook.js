const express = require('express');
const router = express.Router();
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '..', '.env') });

router.get('/api/search/book', async (req, res, next) => {
  const config = {
    params: {
      query: req.query.title,
    },
    headers: {
      Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
    },
  };
  axios
    .get(process.env.KAKO_API_URL, config)
    .then((response) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.status(200).json({ ok: true, result: response.data.documents });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ ok: false, message: err.response.data || '오류가 발생했습니다.' });
    });
});

module.exports = router;
