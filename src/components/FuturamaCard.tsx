import styled from "@emotion/styled";
import { FuturamaInfo } from "../types/Futurama";

interface FuturamaProps {
  futuramaData: FuturamaInfo;
}

export const FuturamaInfoCard = ({ futuramaData }: FuturamaProps) => {
  const { synopsis, yearsAired, creators } = futuramaData;

  return (
    <div>
      <h3>Synopsis</h3>
      <p>{synopsis}</p>
      <h3>YearsAired</h3>
      <p>{yearsAired}</p>
      <h3>Creators</h3>
      {creators.map((creator) => {
        return (
          <div>
            <p>{creator.name}</p>
            <p>{creator.url}</p>
          </div>
        );
      })}
    </div>
  );
};
