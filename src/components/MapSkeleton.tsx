const MapSkeleton: React.FC = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="bg-custom-gray/30 h-[calc(100vh_-_300px)] md:h-[calc(100vh_-_280px)] w-full"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default MapSkeleton;
