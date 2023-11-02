import type { TableIn } from '@/types/type'
import { AxiosInstance } from './config'

export class tableRepository {
  static async create_table(data: TableIn) {
    try {
      const response = await AxiosInstance.post('/tables', data)
      return response
    } catch (error) {
      console.error('An error occurred:', error)
      throw error
    }
  }

  static async getAll() {
    try {
      const response = await AxiosInstance.get('/tables')
      return response
    } catch (error) {
      console.error('An error occurred:', error)
      throw error
    }
  }

  static async get_single(id: number) {
    try {
      const response = await AxiosInstance.get(`/tables/${id}`)
      return response
    } catch (error) {
      console.error('An error occurred:', error)
      throw error
    }
  }

  static async delete(id: number) {
    try {
      const response = await AxiosInstance.delete(`/tables/${id}`)
      return response
    } catch (error) {
      console.error('An error occurred:', error)
      throw error
    }
  }

  static async update(id: number, data: TableIn) {
    try {
      const response = await AxiosInstance.delete(`/tables/${id}`, data)
      return response
    } catch (error) {
      console.error('An error occurred:', error)
      throw error
    }
  }
}
