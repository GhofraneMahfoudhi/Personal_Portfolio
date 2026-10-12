// eslint-disable-next-line react/prop-types
const SectionTitle = ({ children, id, subtitle }) => {
  return (
    <div id={id} className="section-title-wrap my-10 text-center">
      <h2 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-secondary to-secondary/80">
        {children}
      </h2>
      {subtitle && <p className="mt-2 text-sm text-muted/80">{subtitle}</p>}
      <a href="#top" className="back-to-top" aria-label="Back to top" title="Back to top">↑</a>
    </div>
  );
};

export default SectionTitle;
