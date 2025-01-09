export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          first_name: string | null
          last_name: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          first_name?: string | null
          last_name?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string | null
          last_name?: string | null
          updated_at?: string
        }
      }
      healthcare_providers: {
        Row: {
          id: string
          name: string
          type: string
          address: string | null
          city: string | null
          state: string | null
          postal_code: string | null
          phone: string | null
          email: string | null
          website: string | null
          created_at: string
          updated_at: string
        }
        // Insert と Update の型定義も同様に...
      }
      contacts: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          subject: string
          message: string
          status: 'pending' | 'in_progress' | 'completed'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          subject: string
          message: string
          status?: 'pending' | 'in_progress' | 'completed'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          subject?: string
          message?: string
          status?: 'pending' | 'in_progress' | 'completed'
          updated_at?: string
        }
      }
      // 他のテーブルの型定義も同様に...
    }
  }
} 