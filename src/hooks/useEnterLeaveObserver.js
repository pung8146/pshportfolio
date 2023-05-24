import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const useEnterLeaveObserver = (options) => {
  const [ref, inView] = useInView(options);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (inView) {
      setEntered(true);
    } else if (entered) {
      setEntered(false);
    }
  }, [inView, entered]);

  return [ref, inView, entered];
};

export default useEnterLeaveObserver;
