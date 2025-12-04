import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction
} from "react";

interface ChildrenTypes {
  children?: ReactNode;
}

interface ContextValueTypes {
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext<ContextValueTypes>({
  lang: "",
  setLang: () => {}
});

const ContextProvider = ({ children }: ChildrenTypes) => {
  const [lang, setLang] = useState<string>("en");

  const ContextValue: ContextValueTypes = { lang, setLang };

  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
