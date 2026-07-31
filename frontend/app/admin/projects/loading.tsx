export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="h-10 w-64 rounded-xl bg-[#dcead7]" />

      <div className="h-16 rounded-2xl bg-white" />

      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="h-24 rounded-2xl bg-white"
        />
      ))}
    </div>
  );
}