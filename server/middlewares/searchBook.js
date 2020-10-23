const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const searchBook = async (req, res, next) => {
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
      const documents = response.data.documents;
      req.body.documents = documents;
      req.body.ok = true;
      next();
    })
    .catch((err) => {
      console.log(err);
      req.body.ok = false;
      req.body.message = err.response.data || '오류가 발생했습니다.';
      next();
    });
};

module.exports = searchBook;
