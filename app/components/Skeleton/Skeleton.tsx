export default function Skeleton({
  numOfSkeletons,
}: {
  numOfSkeletons: number;
}) {
  return (
    <div role="status" className="animate-pulse">
      {[...Array(numOfSkeletons)].map((_, index) => (
        <div
          className="flex"
          key={index}
          aria-hidden="true"
          data-testid={`skeleton-node-${index}`}
        >
          <div className="my-3 mx-2 h-4 w-4 rounded-full bg-gray-200" />
          <div className="my-3 h-4 w-96 rounded-full bg-gray-200" />
        </div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
