import { baseApi } from "../../api/baseApi";

/* =========================================================
   TYPES
========================================================= */

export interface Player {
  _id: string;

  firstName: string;
  lastName: string;

  email: string;
  mobile: string;

  village: string;

  age: number;
  jerseyNumber: string;

  role: string;

  battingStyle: string;
  bowlingStyle: string;

  experience: string | null;

  imageUrl: string;

  paymentStatus: string;
  paymentId: string | null;

  orderId: string;

  status: "pending" | "approved" | "rejected";

  about?: string;

  createdAt: string;
  updatedAt: string;

  stats: {
    matches: number | null;
    runs: number | null;
    wickets: number | null;
    strikeRate: number | null;
    economy: number;
    catches: number;
  };
}

/* =========================================================
   PAGINATION TYPES
========================================================= */

export interface PlayerMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

/* =========================================================
   API RESPONSE
========================================================= */

export interface PlayerListResponse {
  data: Player[];
  meta: PlayerMeta;
  success: boolean;
  message: string;
  statusCode: number;
}

/* =========================================================
   QUERY TYPE
========================================================= */

export interface PlayerQuery {
  page?: number;
  limit?: number;
}

/* =========================================================
   API
========================================================= */

export const playerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    /* ================= GET ALL PLAYERS ================= */
    getAllPlayers: builder.query<PlayerListResponse, PlayerQuery>({
      query: ({ page = 1, limit = 10 }) =>
        `/player/all?page=${page}&limit=${limit}`,

      transformResponse: (response: PlayerListResponse) => response,

      providesTags: ["Player"],
    }),

    /* ================= GET BY ID ================= */
    getPlayerById: builder.query<Player, string>({
      query: (id) => `/player/${id}`,

      transformResponse: (response: { data: Player }) =>
        response.data,

      providesTags: ["Player"],
    }),

    /* ================= APPROVE PLAYER ================= */
    approvePlayer: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/player/${id}/approve`,
        method: "PATCH",
      }),
      invalidatesTags: ["Player"],
    }),

    /* ================= REJECT PLAYER ================= */
    rejectPlayer: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/player/${id}/reject`,
        method: "PATCH",
      }),
      invalidatesTags: ["Player"],
    }),
  }),
});

/* =========================================================
   HOOK EXPORTS
========================================================= */

export const {
  useGetAllPlayersQuery,
  useGetPlayerByIdQuery,
  useApprovePlayerMutation,
  useRejectPlayerMutation,
} = playerApi;