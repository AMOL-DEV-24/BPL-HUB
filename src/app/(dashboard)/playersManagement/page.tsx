"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Table from "@/components/ui/Table/index.Table";

import { useGetAllPlayersQuery } from "@/redux/modules/playerManagement/playerApi";

import { usePlayerManagement } from "@/redux/modules/playerManagement/usePlayerManagement";

import { TableColumn } from "@/components/ui/Table/table.types";

import { Player } from "@/types/player.types";

export default function PlayerManagementPage() {
  const router = useRouter();

  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetAllPlayersQuery({
    page,
    limit: 10,
  });

  const players = data?.data ?? [];

  const meta = data?.meta;

  const { approve, reject, loading } = usePlayerManagement();

  const totalPlayers = players.length;

  const approvedPlayers = players.filter(
    (player) => player.status === "approved",
  ).length;

  const pendingPlayers = players.filter(
    (player) => player.status === "pending",
  ).length;

  const rejectedPlayers = players.filter(
    (player) => player.status === "rejected",
  ).length;

 const columns: TableColumn<Player>[] = [
  {
    key: "serial",
    title: "Sr No",
    render: (_, __, index) => (page - 1) * 10 + index + 1,
  },

  {
    key: "player",
    title: "Player",
    render: (_, player) => (
      <div className="players-player">
        <Image
          src={player.imageUrl}
          alt={`${player.firstName} ${player.lastName}`}
          width={44}
          height={44}
        />

        <div>
          <strong>
            {player.firstName} {player.lastName}
          </strong>

          <small>{player.email}</small>
        </div>
      </div>
    ),
  },

  {
    key: "village",
    title: "Village",
  },

  {
    key: "role",
    title: "Role",
  },

  {
    key: "jerseyNumber",
    title: "Jersey",
    render: (value) => (
      <span className="players-jersey">
        #{value}
      </span>
    ),
  },

  {
    key: "paymentStatus",
    title: "Payment",
    render: (value) => {
      const status = String(value).toLowerCase();

      return (
        <span className={`status-bg ${status}`}>
          {status === "success" && "💳 "}
          {status === "pending" && "⏳ "}
          {status === "failed" && "❌ "}
          {String(value)}
        </span>
      );
    },
  },

  {
    key: "status",
    title: "Status",
    render: (value) => {
      const status = String(value).toLowerCase();

      return (
        <span className={`status-bg ${status}`}>
          {status === "approved" && "✅ "}
          {status === "pending" && "🟡 "}
          {status === "rejected" && "❌ "}
          {String(value)}
        </span>
      );
    },
  },

  {
    key: "actions",
    title: "Actions",
    render: (_, player) => (
      <div
        className="players-actions"
        onClick={(e) => e.stopPropagation()}
      >
        {player.status === "pending" && (
          <>
            <button
              className="approve-btn"
              disabled={loading.playerId === player._id}
              onClick={() => approve(player._id)}
            >
              {loading.playerId === player._id &&
              loading.action === "approve"
                ? "Approving..."
                : "Approve"}
            </button>

            <button
              className="reject-btn"
              disabled={loading.playerId === player._id}
              onClick={() => reject(player._id)}
            >
              {loading.playerId === player._id &&
              loading.action === "reject"
                ? "Rejecting..."
                : "Reject"}
            </button>
          </>
        )}
      </div>
    ),
  },
];

  return (
    <div className="players-container">
      {/* Header */}

      <div className="players-header">
        <div className="players-header__text">
          <h1 className="players-header__title">👤 Players Management</h1>

          <p className="players-header__sub">
            Manage all registered tournament players
          </p>
        </div>
      </div>

      {/* Stats */}

      <div className="players-stats">
        <div className="players-stat">
          <span>Total Players</span>
          <h3>{totalPlayers}</h3>
        </div>

        <div className="players-stat">
          <span>Approved</span>
          <h3>{approvedPlayers}</h3>
        </div>

        <div className="players-stat">
          <span>Pending</span>
          <h3>{pendingPlayers}</h3>
        </div>

        <div className="players-stat">
          <span>Rejected</span>
          <h3>{rejectedPlayers}</h3>
        </div>
      </div>

      {/* Table */}

      <Table<Player>
        columns={columns}
        data={players}
        loading={isLoading}
        rowKey={(player) => player._id}
        meta={meta}
        onPageChange={setPage}
        emptyMessage="No players found"
        onRowClick={(player) => router.push(`/playersManagement/${player._id}`)}
      />
    </div>
  );
}
