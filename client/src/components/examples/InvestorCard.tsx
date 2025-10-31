import InvestorCard from '../InvestorCard';

export default function InvestorCardExample() {
  return (
    <div className="flex gap-3 flex-wrap">
      <InvestorCard investor="AA" amount={3065} properties={['Alina Ridge', 'Finsbury Heights']} />
      <InvestorCard investor="HH" amount={3065} properties={['Alina Ridge', 'Finsbury Heights']} />
      <InvestorCard investor="MY" amount={1750} properties={['Finsbury Heights']} />
      <InvestorCard investor="OG" amount={4315} properties={['Alina Ridge', 'Finsbury Heights']} />
    </div>
  );
}
