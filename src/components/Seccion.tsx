export function Seccion({
  id,
  numero,
  titulo,
  children,
}: {
  id: string;
  numero: string;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20 md:py-24">
      <div className="mb-10 flex items-baseline gap-3">
        <span className="font-mono text-sm text-acento" aria-hidden="true">
          {numero}
        </span>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{titulo}</h2>
        <div className="ml-4 hidden h-px flex-1 bg-borde md:block" aria-hidden="true" />
      </div>
      {children}
    </section>
  );
}
