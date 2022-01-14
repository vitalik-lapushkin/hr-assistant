import axios from 'axios';

const uploadFile = (file) => {
  const formData = new FormData();
  formData.append('file', file);
   return  axios(
      `http://${process.env.REACT_APP_BACKEND_HOST || 'localhost'}:${process.env.REACT_APP_BACKEND_PORT || '8080'}/static`,
      { method: 'put', data: formData }
    );
}

const StaticApi = {
  uploadFile,
};

export default StaticApi;
