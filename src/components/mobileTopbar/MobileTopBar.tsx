type Props = {
  onMenuClick: () => void;
};

export default function MobileTopbar({ onMenuClick }: Props) {
  return (
    <div className="mobile-topbar">
      <button
        className="mobile-topbar__hamburger"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        ☰
      </button>
      <span className="mobile-topbar__title">⚡ BPL HUB</span>
    </div>
  );
}