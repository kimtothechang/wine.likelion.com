import type { NextPage } from "next";
import { FuturamaContainer } from "../../components/FuturamaContainer";

const InfoPage: NextPage = () => {
  const name = "info";

  return (
    <div>
      <FuturamaContainer name={name} />
    </div>
  );
};

export default InfoPage;
