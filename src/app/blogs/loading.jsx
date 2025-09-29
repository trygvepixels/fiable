export default function ConcentricLoader() {
  return (
    <div className="flex w-full h-screen bg-[#FBF9F7] flex-col items-center justify-center gap-4">
      <div className="flex h-16 w-16 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-[#375E9A] text-4xl text-[#375E9A]">
        <div className="flex h-12 w-12 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-zinc-900 text-2xl text-zinc-900"></div>
      </div>
    </div>
  );
}
