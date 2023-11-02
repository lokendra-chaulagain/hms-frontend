export interface LoginIn {
  email: string
  password: string
}

export interface TableIn {
  name: string
  organization_id: number
}

export interface TableOut {
  id: number
  name: string
  organization_id: number
  created_at: string
  modified_at: string
  created_by_id: number
  modified_by_id: number | null
}
