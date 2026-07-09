export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen relative z-50 isolate">
      {/* 
        This layout isolates the preview from the dark mode root layout.
        Since it's rendered in an iframe, we ensure it covers everything.
      */}
      <style dangerouslySetInnerHTML={{__html: `
        .noise {
          display: none !important;
        }
      `}} />
      {children}
    </div>
  );
}
