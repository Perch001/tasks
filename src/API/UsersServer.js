import axios from 'axios'

export default class UsersServer{
      static async getAll(){
            const response = await axios.get('https://reqres.in/api/users')
            return response.data
      }

      static async getIdUsers(id){
            const response = await axios.get('https://reqres.in/api/users/' + id)
            return response.data
      }
}