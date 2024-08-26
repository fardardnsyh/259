const Skeleton: React.FC = () => {
  return (
    <div role="status" className="animate-pulse max-w-lg">
      <div className="h-8 bg-custom-gray/30 rounded-full  w-full"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton;
