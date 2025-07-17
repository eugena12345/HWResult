export function useViewportSize() {
  const [viewportSize, setViewportSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useWindowEvent('resize', () => {
    setViewportSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  return viewportSize;
}