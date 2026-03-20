export default function OverviewPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-2">Overview</h1>
      <p className="text-muted-foreground mb-6">
        See a summary of your clients and recent activity.
      </p>
      <div className="rounded-lg border border-dashed border-secondary p-12 text-center my-8">
        <h2 className="text-xl font-medium mb-4">No client activity yet.</h2>
        <p className="mb-4 text-muted-foreground">When your team adds clients or starts logging notes, activity will appear here.</p>
      </div>
    </div>
  );
}