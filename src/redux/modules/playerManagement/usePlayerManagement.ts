"use client";

import { useState } from "react";
import {
  useApprovePlayerMutation,
  useRejectPlayerMutation,
} from "@/redux/modules/playerManagement/playerApi";

/* =========================================================
   TYPES
========================================================= */

type Action = "approve" | "reject" | null;

interface LoadingState {
  playerId: string | null;
  action: Action;
}

interface UsePlayerManagementReturn {
  approve: (id: string) => Promise<void>;
  reject: (id: string) => Promise<void>;
  loading: LoadingState;
  error: string | null;
  clearError: () => void;
}

/* =========================================================
   HOOK
========================================================= */

export function usePlayerManagement(): UsePlayerManagementReturn {
  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState<LoadingState>({
    playerId: null,
    action: null,
  });

  const [approvePlayer] = useApprovePlayerMutation();
  const [rejectPlayer] = useRejectPlayerMutation();

  /* ================= APPROVE ================= */
  const approve = async (playerId: string) => {
    try {
      setError(null);
      setLoading({ playerId, action: "approve" });

      await approvePlayer(playerId).unwrap();
    } catch {
      setError("Failed to approve player");
    } finally {
      setLoading({ playerId: null, action: null });
    }
  };

  /* ================= REJECT ================= */
  const reject = async (playerId: string) => {
    try {
      setError(null);
      setLoading({ playerId, action: "reject" });

      await rejectPlayer(playerId).unwrap();
    } catch {
      setError("Failed to reject player");
    } finally {
      setLoading({ playerId: null, action: null });
    }
  };

  return {
    approve,
    reject,
    loading,
    error,
    clearError: () => setError(null),
  };
}