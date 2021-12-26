import type { NextPage } from "next";
import { Error, Loading } from "../../components";
import { useBeerData } from "../../hooks/useBeerData";
import { Beer } from "../../types/Beer";
import { BeerCard } from "../../components/BeerCard";

const IndexBeerPage: NextPage = () => {
  const name = "ale";
  const { data, error } = useBeerData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return <div></div>;
};

export default IndexBeerPage;
