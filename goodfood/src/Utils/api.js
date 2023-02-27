import axios from "axios";

export const getVirtues = async () => (axios.get('http://0.0.0.0:8080/api/virtues')
.then(response => {
  return response.data[0].virtues
})
.catch(error => {
  console.log(error);
}))