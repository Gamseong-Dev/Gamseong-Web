import * as LOGIN from './types';
import axios from 'axios';


const ROOT_URL = 'http://52.78.110.20:8080'
export const getAccount = (param) => (dispatch) => {
    axios.post(`${ROOT_URL}/gamseongAccounts/users/login`, param)
      .then(response => {
        const result = JSON.parse(response.request.response).result
        console.log(result)
        if(result === 'fail'){
          dispatch({type: LOGIN.USER_LOG_IN_ERR})
          alert('아이디 혹은 비밀번호를 다시 확인하세요.')
        }
        if(result === 'success'){
          dispatch({type: LOGIN.USER_LOG_IN, user: response.data.user})
          localStorage.setItem('userId', response.data.user.id)
          localStorage.setItem('userAcct', response.data.user.account)
          localStorage.setItem('userName', response.data.user.name)
          localStorage.setItem('userImgUrl', response.data.user.imageUrl)
        }
      })
};

export const CheckUserStorage = () => (dispatch) => {
  let user = localStorage.getItem('userId')
  if(user){
    dispatch({type: LOGIN.USER_LOG_IN})
  }
}

export const userLogOut = () => (dispatch) => {
  localStorage.setItem('userId', "")
  localStorage.setItem('userAcct', null)
  localStorage.setItem('userName', null)
  localStorage.setItem('userImgUrl', null)
  dispatch({type: LOGIN.USER_LOG_OUT})
}
