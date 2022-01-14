import axios from 'axios';

const getList = async () => axios(`http://${process.env.REACT_APP_BACKEND_HOST || 'localhost'}:${process.env.REACT_APP_BACKEND_PORT || '8080'}/rest/person`);

const deletePerson = async (id) => 
  axios(
    `http://${process.env.REACT_APP_BACKEND_HOST || 'localhost'}:${process.env.REACT_APP_BACKEND_PORT || '8080'}/rest/person`,
    { method: 'delete', params: { id },
  });

const create = async (data) => 
  axios(
    `http://${process.env.REACT_APP_BACKEND_HOST || 'localhost'}:${process.env.REACT_APP_BACKEND_PORT || '8080'}/rest/person`,
    { method: 'post', data }
  );

const PersonApi = {
  getList,
  delete: deletePerson,
  create,
}

export default PersonApi;
