import { useRecoilState } from "recoil";
import { modalSelector } from "recoil/modal";

function useModal(id: string) {
  const [modal, setModal] = useRecoilState(modalSelector(id));

  const open = () => {
    setModal(true);
  };

  const close = () => {
    setModal(false);
  };
  return {
    modal,
    open,
    close,
  };
}

export default useModal;
