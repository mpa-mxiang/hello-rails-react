import axios from 'axios';

export const fetchRandomGreeting = () => {
  return (dispatch) => {
    axios.get('/api/greetings/random')
      .then(response => {
        dispatch(setRandomGreeting(response.data.greeting));
      })
      .catch(error => console.error(error));
  };
};

export const setRandomGreeting = (greeting) => {
  return {
    type: 'SET_RANDOM_GREETING',
    payload: greeting,
  };
};
