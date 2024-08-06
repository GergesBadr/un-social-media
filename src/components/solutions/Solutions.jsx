import SolutionsList from "./SolutionsList";
import SolutionsInfo from "./SolutionsInfo";

function Solutions() {
  return (
    <section id="solutions" className="bg-indigo-100 py-24">
      <div className="responsive-container relative flex flex-col items-center gap-16 lg:flex-row lg:items-start">
        <SolutionsInfo />
        <SolutionsList />
      </div>
    </section>
  );
}

export default Solutions;
