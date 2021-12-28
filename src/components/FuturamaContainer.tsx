import styled from "@emotion/styled";
import { Error, Loading, FuturamaInfoCard } from ".";
import { useFuturamaData } from "../hooks/useFuturamaData";
import { FuturamaInfo } from "../types/Futurama";

interface FuturamaContainerProps {
  name: string;
}

export const FuturamaContainer = ({ name }: FuturamaContainerProps) => {
  const { data, error } = useFuturamaData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Futurama {name}</h1>
      <div>
        {data.map((futuramaData: FuturamaInfo) => {
          return (
            <FuturamaInfoCard
              key={`${name}-beer-list-${futuramaData.id}`}
              futuramaData={futuramaData}
            />
          );
        })}
      </div>
    </div>
  );
};
