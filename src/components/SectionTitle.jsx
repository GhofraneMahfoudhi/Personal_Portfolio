// eslint-disable-next-line react/prop-types
const SectionTitle = ({ children, id, subtitle }) => {
  return (
    <div id={id} className="my-10 text-center">
      <h2 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-secondary to-secondary/80">
        {children}
      </h2>
      {subtitle && <p className="mt-2 text-sm text-muted/80">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
