import { createContext, useContext } from "react";

export interface ICard {
  name: string;
  price: number;
}

export const CardContext = createContext<ICard>({} as ICard);

export const CardProvider = CardContext.Provider;

export const useCardContext = () => useContext(CardContext);
