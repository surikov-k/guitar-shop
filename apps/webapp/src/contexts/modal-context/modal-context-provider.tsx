import { ModalContext } from "./modal-context";
import { useState } from 'react';

type ModalProviderProps = {
  children: JSX.Element[]
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [opened, setOpened] = useState<boolean>(false);
  const [content, setContent] = useState<JSX.Element | null>(null)

  const open = (content: JSX.Element) => {
    setOpened(true);
    setContent(content);
  }

  const close = () => setOpened(false);

  return (
      <ModalContext.Provider value={{ open: open, close }}>
      {children}
        {
          opened && <>{content}</>

        }
      </ModalContext.Provider>
  );
}
