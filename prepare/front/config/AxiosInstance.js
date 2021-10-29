import axios from 'axios';

const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    // baseURL: `http://localhost:8080`,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        Authorization:
            'Skoolooks eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzNTQzODE0MX0.qn9Iwm6LPg3rzssEJvusVZ-UcpEDy9j4b-mKIlbSEBcvl_QVNdiyJN8_tX5XTtBf79mnPQlzGlhKVBxAXTDncg',
    },
});

instance.interceptors.request.use(
    function (config) {
        // 요청 성공 직전 호출됩니다.
        // axios 설정값을 넣습니다. (사용자 정의 설정도 추가 가능)
        console.log(config);
        return config;
    },
    function (error) {
        // 요청 에러 직전 호출됩니다.
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    function (response) {
        /*
      http status가 200인 경우
      응답 성공 직전 호출됩니다. 
      .then() 으로 이어집니다.
  */
        return response;
    },

    function (error) {
        /*
      http status가 200이 아닌 경우
      응답 에러 직전 호출됩니다.
      .catch() 으로 이어집니다.    
  */
        return Promise.reject(error);
    },
);

export default instance;
