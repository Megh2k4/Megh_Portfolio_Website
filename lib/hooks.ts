import { useInView } from "react-intersection-observer";

export function useSectionInView(threshold = 0.5) {
  const { ref, inView } = useInView({
    threshold,
  });

  return {
    ref,
    inView,
  };
}
