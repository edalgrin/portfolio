import jobs from "./jobs.json";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="container">
      {jobs?.map((item, index) => (
        <div className="col" key={index}>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
}
