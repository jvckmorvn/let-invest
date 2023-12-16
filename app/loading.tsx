import Skeleton from "react-loading-skeleton";

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="card w-96 bg-base-100 shadow-md transition-transform transform hover:scale-105 hover:cursor-pointer">
        <div>
          <Skeleton height={200} width={300} />
        </div>
        <div className="card-body">
          <h2 className="card-title">
            <Skeleton />
          </h2>
          <p>
            <Skeleton count={3} />
          </p>
          <div className="card-actions justify-end">
            <Skeleton width={80} height={24} />
            <Skeleton width={80} height={24} />
          </div>
        </div>
      </div>
    </main>
  );
}
