export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      clubs: {
        Row: {
          advisorid: number | null;
          clubname: string;
          createdat: string | null;
          description: string | null;
          id: number;
          meetingday: string | null;
          meetingtime: string | null;
          roomnumber: string | null;
          updatedat: string | null;
        };
        Insert: {
          advisorid?: number | null;
          clubname: string;
          createdat?: string | null;
          description?: string | null;
          id?: number;
          meetingday?: string | null;
          meetingtime?: string | null;
          roomnumber?: string | null;
          updatedat?: string | null;
        };
        Update: {
          advisorid?: number | null;
          clubname?: string;
          createdat?: string | null;
          description?: string | null;
          id?: number;
          meetingday?: string | null;
          meetingtime?: string | null;
          roomnumber?: string | null;
          updatedat?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "clubs_advisorid_fkey";
            columns: ["advisorid"];
            isOneToOne: false;
            referencedRelation: "instructors";
            referencedColumns: ["id"];
          }
        ];
      };
      instructors: {
        Row: {
          createdat: string | null;
          email: string;
          firstname: string;
          id: number;
          lastname: string;
          phone: string | null;
          updatedat: string | null;
        };
        Insert: {
          createdat?: string | null;
          email: string;
          firstname: string;
          id?: number;
          lastname: string;
          phone?: string | null;
          updatedat?: string | null;
        };
        Update: {
          createdat?: string | null;
          email?: string;
          firstname?: string;
          id?: number;
          lastname?: string;
          phone?: string | null;
          updatedat?: string | null;
        };
        Relationships: [];
      };
      members: {
        Row: {
          clubid: number;
          createdat: string | null;
          id: number;
          joindate: string;
          role: string | null;
          studentid: number;
          updatedat: string | null;
        };
        Insert: {
          clubid: number;
          createdat?: string | null;
          id?: number;
          joindate: string;
          role?: string | null;
          studentid: number;
          updatedat?: string | null;
        };
        Update: {
          clubid?: number;
          createdat?: string | null;
          id?: number;
          joindate?: string;
          role?: string | null;
          studentid?: number;
          updatedat?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "members_clubid_fkey";
            columns: ["clubid"];
            isOneToOne: false;
            referencedRelation: "clubs";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "members_studentid_fkey";
            columns: ["studentid"];
            isOneToOne: false;
            referencedRelation: "students";
            referencedColumns: ["id"];
          }
        ];
      };
      students: {
        Row: {
          address: string | null;
          createdate: string | null;
          dateofbirth: string;
          email: string;
          firstname: string;
          gender: string;
          id: number;
          lastname: string;
          phone: string | null;
          updatedate: string | null;
        };
        Insert: {
          address?: string | null;
          createdate?: string | null;
          dateofbirth: string;
          email: string;
          firstname: string;
          gender: string;
          id?: number;
          lastname: string;
          phone?: string | null;
          updatedate?: string | null;
        };
        Update: {
          address?: string | null;
          createdate?: string | null;
          dateofbirth?: string;
          email?: string;
          firstname?: string;
          gender?: string;
          id?: number;
          lastname?: string;
          phone?: string | null;
          updatedate?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
