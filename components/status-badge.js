export function StatusBadge({ status }) {
  const tone =
    status === "On track" || status === "Paid" || status === "Strong"
      ? "badge badge-success"
      : status === "Review" || status === "Pending" || status === "Watch"
        ? "badge badge-warn"
        : "badge badge-danger";

  return <span className={tone}>{status}</span>;
}
