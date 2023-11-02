import { AxiosInstance } from './config'

export class organizationRepository {
  static async getAll() {
    try {
      const response = await AxiosInstance.get('/organizations')
      return response
    } catch (error) {
      console.error('An error occurred:', error)
      throw error
    }
  }
}
