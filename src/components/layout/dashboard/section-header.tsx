interface SectionHeaderProps {
  name: string;
}
const SectionHeader = (props: SectionHeaderProps) => {
  return <h2 className="font-semibold ">{props.name}</h2>;
};

export default SectionHeader;
