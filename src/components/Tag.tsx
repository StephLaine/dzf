export default function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center bg-ht-blue-100 px-2.5 py-1 text-[0.7rem] font-bold tracking-wide text-ht-blue-800 uppercase">
      {children}
    </span>
  );
}
